import { ItemStockInfo } from "ikea-availability-checker/dist/src/lib/ingka";

export interface Item extends ItemStockInfo {
  name: string | undefined;
}
