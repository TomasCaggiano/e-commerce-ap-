import React, { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'
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
      </footer>
    </li>
  )
}

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext)

  return (
    <div  className='carrito'>
      <ul className='card-container'>
        {cart.map(product => (
          <CartItem key={product.id} {...product} />
        ))}
      </ul>
      <div className='botonesCarrito'>
      <p>total: ${getTotalPrice()}</p>
      <button onClick={clearCart}>Clear Cart</button>
        <br />
        <br />
        <Link to='/CheckOut'><button >ir a pagar</button></Link>
      </div>
    </div>
  )
}

export default Cart
