import React, { useContext } from "react";
import { CounterContext } from "@/context/Counter";
const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => counterContext.setCount(counterContext.count + 1)}
        className="bg-green-700 cursor-pointer hover:text-white hover:bg-green-500 p-2 m-2 rounded-lg text-black"
      >
        Increment
      </button>
      <button
        onClick={() => counterContext.setCount(counterContext.count - 1)}
        className="bg-red-700 cursor-pointer hover:text-white hover:bg-red-500 p-2 m-2 rounded-lg text-black"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
