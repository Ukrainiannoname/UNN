// src/pages/SizeForm.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SizeForm() {
  const [form, setForm] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: ''
  });

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('userSize', JSON.stringify(form));
    window.location.href = '/checkout';
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Вкажіть параметри тіла</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Зріст (см):
            <input
              name="height"
              type="number"
              required
              onChange={handleChange}
              value={form.height}
            />
          </label>
          <br />
          <br />
          <label>
            Вага (кг):
            <input
              name="weight"
              type="number"
              required
              onChange={handleChange}
              value={form.weight}
            />
          </label>
          <br />
          <br />
          <label>
            Обхват грудей (см):
            <input
              name="chest"
              type="number"
              required
              onChange={handleChange}
              value={form.chest}
            />
          </label>
          <br />
          <br />
          <label>
            Обхват талії (см):
            <input
              name="waist"
              type="number"
              required
              onChange={handleChange}
              value={form.waist}
            />
          </label>
          <br />
          <br />
          <button type="submit">Перейти до замовлення</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default SizeForm;
