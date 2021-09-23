const express = require('express')
const checker = require('ikea-availability-checker');
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', async (req, res) => {
    const storeId= '562'
    const items = ['60342656', '60263244', '10488769', '80346941', '30277959', '60446545', '00295549', '30246722', '20348896', '50433987']
    var data = await Promise.all(items.map(async (item) => {
      return await checker.availability(storeId, item);
    }))
    res.render('pages/index', {data})
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
