'use client';
import { useEffect, useState } from "react";
import { ITEMS_TO_RETRIEVE } from '../configItems';
import { getStockItems } from '../services/ikeaService';
import { Item } from "../types/Item";

export const useStockItems = () => {
    const [itemsToRetrieve, setItemsToRetrieve] = useState(ITEMS_TO_RETRIEVE);
    const [items, setItems] = useState<(Item | undefined)[]>();
   
    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () => {
          const stockItems = await getStockItems(itemsToRetrieve)
          const stockItemsWithNames : Item[] = stockItems.map((item) => {
            return {
              ...item!,
              name: itemsToRetrieve.find((el) => el.id === item?.productId)?.name
            }
          })

          console.log("🚀 ~ fetchData ~ stockItems:", stockItemsWithNames)

          // set state with the result
          setItems(stockItemsWithNames)
        }

      fetchData().catch(console.error)
    }, [itemsToRetrieve])
    

    return {
      items
    }
    
  }