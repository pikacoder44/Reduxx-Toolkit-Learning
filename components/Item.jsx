import React from "react";
import { useCart } from "@/context/Cart";
const Item = (props) => {
  const cart = useCart();
  console.log("Cart: ", cart);
  return (
    <div className="bg-zinc-700 hover:bg-zinc-400 hover:text-black p-6 rounded-2xl flex flex-col items-center justify-center gap-2 transition-all ease-in-out cursor-pointer hover:scale-105">
      <h4 className="text-3xl">{props.name}</h4>
      <p className="text-xl">Price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
        className="bg-blue-800 py-3 px-6 rounded-lg hover:bg-blue-700 hover:text-white text-black cursor-pointer"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
