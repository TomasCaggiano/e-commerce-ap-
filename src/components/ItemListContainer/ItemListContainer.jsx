import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';



function ItemListContainer() {
  const { categoryId } = useParams();
  const { productsId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        if (categoryId) {
          const filteredProducts = data.filter(product => product.category === categoryId);
          setProductos(filteredProducts);
        } else {
          setProductos(data);
        }
      })
      .catch(err => console.log(err));
  }, [categoryId]);

  return (
    <main>
      <section className="item-list-container">
        <ItemList key={categoryId} productos={productos} />
      </section>
    </main>
  );
}

export default ItemListContainer;