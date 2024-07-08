import React, { useEffect } from 'react'
import { useState } from 'react'
import './CountButtons.css'

const CountButtons = ({stock, onAdd}) => {

   const [count, setCount] = useState(1);

   useEffect(() =>{
    if(stock === 0){
      setCount(0)
    }else{setCount(1);}
   },[stock])

   const sumar = () =>{
   if (count < stock) {
    setCount(count + 1)
   }
   }

const restar = () =>{
  if (count >= 1) {
    setCount(count - 1)
  }
}

const agregarAlCarrito = () =>{
  if (onAdd) {
    onAdd(count)
  }
}




    return (
    <div className='buttons'>
      <button onClick={restar} disabled={stock === 0 || count === stock}>{''}-{''}</button>
      <h3>{count}</h3>
      <button onClick={sumar} disabled={stock === 0 || count ===1}>{''}+{''}</button>
       <button className='add' onClick={agregarAlCarrito} disabled={stock === 0}>add</button>
    </div>
  )
}

export default CountButtons
