import React from 'react';
import './ItemList.css'
import CountButtons from '../Buttons/CountButtons';
import Item from '../Item/Item';
import ItemDetailContainer from '../ItemDetail/ItemDetailContainer';

function ItemList ({ productos }) {
  
  return (
    <div className='card-container'>
      {productos.map((producto) =>(
          <Item 
          key={producto.id} producto={producto}/>
        ))};
    </div>
    );
    }

export default ItemList;
