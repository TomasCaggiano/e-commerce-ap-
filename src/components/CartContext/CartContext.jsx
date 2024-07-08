import React, { createContext, useState } from 'react';

export const CartContext = createContext([]);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isInCart = cart.findIndex((item) => item.id === product.id);

    if (isInCart >= 0) {
      const newCart = [...cart];
      newCart[isInCart].quantity += 1;
      setCart(newCart);
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  };

  function clearCart() {
    setCart([]);
  }

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
