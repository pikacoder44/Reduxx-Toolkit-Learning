"use client";
import Item from "@/components/Item";
import Cart from "@/components/Cart";
export default function Home() {
  return (
    <div className="font-sans gap-4 flex flex-col items-center justify-center min-h-screen sm:p-20 bg-zinc-900">
      <div className="grid grid-cols-3 gap-4">
        <Item name="MacBook Pro" price={100000} />
        <Item name="Pendrive" price={4000} />
        <Item name="Iphone XR" price={40000} />
      </div>
      <Cart />
    </div>
  );
}
