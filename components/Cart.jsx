import React from 'react'
import { ShoppingCart } from 'lucide-react'
const Cart = () => {
  return (
    <div className='bg-zinc-600 p-4 rounded-lg flex flex-row gap-2'>
      <ShoppingCart/>
      <h2>Cart</h2>
    </div>
  )
}

export default Cart
