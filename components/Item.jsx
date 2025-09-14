import React from "react";

const Item = (props) => {
  return (
    <div className="bg-zinc-700 p-6 rounded-2xl flex flex-col items-center justify-center gap-2">
      <h4 className="text-3xl">{props.name}</h4>
      <p className="text-xl">Price : ${props.price}</p>
      <button className="bg-blue-800 py-3 px-6 rounded-lg hover:bg-blue-700 hover:text-white text-black cursor-pointer">
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
