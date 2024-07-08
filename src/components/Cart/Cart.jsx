import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'

function CartItem({ image, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={image} alt="imagen del producto" />
      <div>
        <strong>{title}</strong> ${price}
      </div>
      <footer>
        <small>
          Quantity: {quantity}
        </small>
        <button onClick={addToCart}>Add to Cart</button>
      </footer>
    </li>
  )
}

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext)

  return (
    <>
      <ul>
        {cart.map(product => (
          <CartItem key={product.id} {...product} />
        ))}
      </ul>
      <button onClick={clearCart}>Clear Cart</button>
    </>
  )
}

export default Cart
