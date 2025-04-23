import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { cart, clearCart, total } = useContext(CartContext);
  const [userSize, setUserSize] = useState(null);
  const [formData, setFormData] = useState({ name: '', address: '', phone: '' });

  useEffect(() => {
    const size = JSON.parse(localStorage.getItem('userSize'));
    if (size) setUserSize(size);
  }, []);

  const handleChange = e => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    alert('Замовлення оформлено! Дякуємо!');
    clearCart();
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <section className="reveal">
          <h2>Ваші параметри тіла</h2>
          <ul>
            {userSize ? (
              <>
                <li>Зріст: {userSize.height} см</li>
                <li>Вага: {userSize.weight} кг</li>
                <li>Груди: {userSize.chest} см</li>
                <li>Талія: {userSize.waist} см</li>
              </>
            ) : <li>Параметри не вказані</li>}
          </ul>
        </section>
        <section className="reveal">
          <h2>Дані для доставки</h2>
          <form onSubmit={handleSubmit}>
            <label>Ім’я: <input type="text" name="name" required onChange={handleChange} value={formData.name} /></label><br /><br />
            <label>Адреса доставки: <input type="text" name="address" required onChange={handleChange} value={formData.address} /></label><br /><br />
            <label>Телефон: <input type="tel" name="phone" required onChange={handleChange} value={formData.phone} /></label><br /><br />
            <button type="submit">Підтвердити замовлення</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;