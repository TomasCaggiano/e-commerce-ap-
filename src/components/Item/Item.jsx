import React from 'react'
import { useState } from 'react'
import CountButtons from '../Buttons/CountButtons'
import { Link } from 'react-router-dom'

function Item  ({producto}) {

  return (
    <div className='card' >
      <Link to={`/product/${producto.id}`}>
        <img src={producto.image} alt="" />
        <h3>{producto.title}</h3>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
      </Link>
        </div>
        
  )
}

export default Item
