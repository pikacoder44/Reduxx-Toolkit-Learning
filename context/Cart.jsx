import { createContext, useState } from "react";

let CartContext = createContext(null);
const [items, setItems] = useState([]);
export const CartProvider = (props) => {
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
