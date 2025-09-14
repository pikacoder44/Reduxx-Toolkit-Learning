import React from "react";

const Counter = () => {
  return (
    <div>
      <button className="bg-green-700 cursor-pointer hover:text-white hover:bg-green-500 p-2 m-2 rounded-lg text-black">
        Increment
      </button>
      <button className="bg-red-700 cursor-pointer hover:text-white hover:bg-red-500 p-2 m-2 rounded-lg text-black">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
