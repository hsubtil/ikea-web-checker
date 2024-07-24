import { ItemStockInfo, PRODUCT_AVAILABILITY } from "ikea-availability-checker/dist/src/lib/ingka";

export const getStockStatusColor = (item: ItemStockInfo) => {
    if (item.probability && item.probability === PRODUCT_AVAILABILITY.OUT_OF_STOCK) {
        if(item.restockDate) {
            return 'bg-yellow-300'
        }
        return 'bg-red-300'
    }
    if (item.probability && item.probability === PRODUCT_AVAILABILITY.LOW_IN_STOCK) {
        return 'bg-green-300'
    }
    return 'bg-white'
}