"use client";
import { useContext } from "react";
import { CounterContext } from "@/context/Counter";
import Counter from "@/components/Counter";
export default function Home() {
  const counterState = useContext(CounterContext);
  console.log("Content: ", counterState);
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen sm:p-20 bg-zinc-900">
      <h1 className="text-2xl">Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
