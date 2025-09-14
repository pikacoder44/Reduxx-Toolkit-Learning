"use client";
import { useContext } from "react";
import { CounterContext } from "@/context/Counter";
import Counter from "@/components/Counter";
export default function Home() {
  const counterState = useContext(CounterContext);
  console.log("Content: ", counterState);
  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen sm:p-20">
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
