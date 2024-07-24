import { availability } from 'ikea-availability-checker';
import { STORE_ID } from '../configItems';


export const getStockItems = async (itemsToRetreive: ItemConfig[]) => 
      await Promise.all(
        itemsToRetreive.map(async (stockItem) =>
          availability(STORE_ID, stockItem.id).then((item) => {
            return item;
          })
        )
      );