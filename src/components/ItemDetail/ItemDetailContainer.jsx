import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import CountButtons from '../Buttons/CountButtons';
import { CartContext } from '../CartContext/CartContext';

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
    return <p>Loading product...</p>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <CountButtons />
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ItemDetailContainer;