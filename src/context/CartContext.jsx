// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });

  // зберігаємо в localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // додає товар (якщо є — просто інкрементує кількість)
  function addToCart(item) {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  }

  // оновлює кількість
  function updateQuantity(id, quantity) {
    setCart(prev =>
      prev
        .map(i => (i.id === id ? { ...i, quantity } : i))
        .filter(i => i.quantity > 0)
    );
  }

  function clearCart() {
    setCart([]);
  }

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
