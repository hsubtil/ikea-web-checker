'use client';
import ItemCard from "./components/ItemCard";
import { useStockItems } from "./core/hooks/useStockItems";

export default function Home() {
  const { items } = useStockItems();
  
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24">
      <h1 className="text-2xl font-bold tracking-tight text-gray-90">Ikea Web Checker</h1>
      <div className="flex flex-col items-center gap-2 w-3/5"> 
      {
        items?.map((item) => item ? <ItemCard key={item.productId} data={item}></ItemCard> : <></>
        )
      }
      </div>
    </main>
  );
}
