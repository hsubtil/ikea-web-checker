const express = require("express");
const checker = require("ikea-availability-checker");
const path = require("path");
const PORT = process.env.PORT || 5000;

const PARILLY_STORE = "562";

const getStockItems = async (items) =>
  await Promise.all(
    items.map(async (stockItem) =>
      checker.availability(PARILLY_STORE, stockItem.id).then((item) => {
        if (item) {
          stockItem.name = item.stockItem;
          return item;
        }
      })
    )
  );

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", async (req, res) => {
    const items = [
      {
        id: "s99530265",
        name: "MITTZON - Bureau 160",
      },
      {
        id: "00314741",
        name: "KOPPLA - Prises",
      },
    ];
    var data = await getStockItems(items);
    res.render("pages/index", { data });
  })
  .get("/hugo", async (req, res) => {
    const items = [
      { id: "90506458", name: "Bribri black" },
      { id: "10503656", name: "Bribri blanc" },
    ];
    var data = await getStockItems(items);
    res.render("pages/hugo", { data: cleanData });
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
