import React from 'react'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css'
const CheckOut = () => {
    const { clearCart, cart } = useContext(CartContext);
  return (
      <div className='checkout'>
    <div>
            <label htmlFor="email">Mail:</label>
            <input type="text" name='email'  />
          </div>
          <br />
          <div>
            <label htmlFor="phone">Phone:</label>
            <input type="text" name='phone' />
          </div>
          <br />
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name'/>
          </div>
          <br />
          <div>
            <label htmlFor="address">Address:</label>
            <input type="text" name='address' />
          </div>
          <br />
          <div>
            <label htmlFor="creditCard">Credit Card:</label>
            <input type="text" name='creditCard' />
          </div>
          <br />
          <div>
            <label htmlFor="dni">DNI:</label>
            <input type="text" name='dni'/>
          </div>
          <br />
    <Link to="/"><button onClick={clearCart}>terminar compra</button></Link>

    </div>
  )
}

export default CheckOut
