// src/pages/CartPage.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

function CartPage() {
  const { cart, updateQuantity, clearCart, total } = useContext(CartContext);

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Кошик</h2>
        {cart.length === 0 ? (
          <p>Кошик порожній.</p>
        ) : (
          <>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cart.map(item => (
                <li
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"          // ← lazy-loading
                      style={{ width: '80px', marginRight: '1rem' }}
                    />
                  )}
                  <div style={{ flexGrow: 1 }}>
                    <p style={{ margin: 0 }}>{item.name}</p>
                    <p style={{ margin: 0, fontWeight: 'bold' }}>
                      ₴{item.price} × {item.quantity} = ₴{item.price * item.quantity}
                    </p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={e =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                    style={{ width: '3rem', marginRight: '1rem' }}
                  />
                </li>
              ))}
            </ul>

            <p>
              <strong>Загальна сума:</strong> ₴{total}
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button onClick={clearCart}>Очистити кошик</button>
              <Link to="/checkout">
                <button>Оформити замовлення</button>
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default CartPage;
