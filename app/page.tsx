"use client";
import Item from "@/components/Item";
export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen sm:p-20 bg-zinc-900">
      <Item name="MacBook Pro" price={100000} />
    </div>
  );
}
