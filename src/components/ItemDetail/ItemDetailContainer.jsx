import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import './ItemDetailContainer.css'

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err));
  }, [productId]);

  if (!product) {
    return <p className='loading'>Loading product...</p>;
  }

  return (
    <div className='detail'>
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className='precio'>Price: ${product.price}</p>
      </div>
    </div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
  );
}

export default ItemDetailContainer;