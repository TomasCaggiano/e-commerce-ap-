import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item  ({producto}) {

  return (
    <div className='card' >
      <Link to={`/product/${producto.id}`}>
        <img src={producto.image} alt="" />
        <h3>{producto.title}</h3>
        <p className='descripcion'>{producto.description}</p>
        <p>${producto.price}</p>
      </Link>
        </div>
        
  )
}

export default Item
