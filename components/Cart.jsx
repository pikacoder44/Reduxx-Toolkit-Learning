import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/Cart";
const Cart = () => {
  const cart = useCart();
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  console.log("cart: ", cart);
  return (
    <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center">
      <div className="flex flex-row items-center text-blue-300 gap-2 mb-4">
        <ShoppingCart />
        <h2 className="text-2xl">Cart</h2>
      </div>
      <div className=" flex items-center text-center border-1 border-zinc-500 rounded-lg px-2 py-1 bg-zinc-800 ">
        <p>Item Name - Price</p>
      </div>
      {cart &&
        cart.items.map((item,index) => (
          <li
            className="list-none hover:bg-zinc-400 hover:text-black px-2 py-1 rounded-lg transition-all ease-out"
            key={index}
          >
            {item.name} --- ${item.price}
          </li>
        ))}
      <div className="bg-green-700 text-black mt-3 w-full py-1 px-2 flex justify-center items-center cursor-pointer rounded-md hover:scale-105 hover:bg-green-400 hover:font-bold transition-all delay-75 ease-in-out">
        <h5>Total: ${total}</h5>
      </div>
    </div>
  );
};

export default Cart;
