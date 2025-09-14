import React from "react";
import { ShoppingCart } from "lucide-react";
const Cart = () => {
  return (
    <div className="bg-zinc-800 p-4 rounded-lg flex flex-col items-center">
      <div className="flex flex-row items-center text-blue-300 gap-2 mb-4">
        <ShoppingCart />
        <h2 className="text-2xl">Cart</h2>
      </div>

      <li className="list-none">MacBookPro - $1000</li>
      <h5 className="mt-2">Total: $2000000</h5>
    </div>
  );
};

export default Cart;
