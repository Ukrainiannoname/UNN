import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import useReveal from './hooks/useReveal';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import SizeForm from './pages/SizeForm';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';

function App() {
  useReveal();

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/size-form" element={<SizeForm />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;