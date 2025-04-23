import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function QuizPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    height: '',
    weight: '',
    chest: '',
    waist: ''
  });

  const handleChange = e =>
    setData(prev => ({ ...prev, [e.target.id]: e.target.value }));

  const next = () => {
    if (step < 4) setStep(s => s + 1);
    else finish();
  };
  const prev = () => {
    if (step > 1) setStep(s => s - 1);
  };

  const finish = () => {
    localStorage.setItem('userSize', JSON.stringify(data));
    alert('Дякуємо! Переходимо до каталогу.');
    window.location.href = '/products';
  };

  return (
    <>
      <Header />
      <main className="container">
        <h2 style={{ marginTop: '2rem', textAlign: 'center' }}>
          Fit Quiz
        </h2>

        <div className="progress-wrap">
          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            />
          </div>
        </div>

        <div style={{ padding: '0 1rem' }}>
          {step === 1 && (
            <label>
              Ваш зріст (см):
              <input
                type="number"
                id="height"
                value={data.height}
                onChange={handleChange}
                required
              />
            </label>
          )}

          {step === 2 && (
            <label>
              Ваша вага (кг):
              <input
                type="number"
                id="weight"
                value={data.weight}
                onChange={handleChange}
                required
              />
            </label>
          )}

          {step === 3 && (
            <label>
              Обхват грудей (см):
              <input
                type="number"
                id="chest"
                value={data.chest}
                onChange={handleChange}
                required
              />
            </label>
          )}

          {step === 4 && (
            <label>
              Обхват талії (см):
              <input
                type="number"
                id="waist"
                value={data.waist}
                onChange={handleChange}
                required
              />
            </label>
          )}

          <div className="nav-btns">
            <button
              className="btn-primary"
              onClick={prev}
              style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
            >
              Назад
            </button>
            <button className="btn-primary" onClick={next}>
              {step < 4 ? 'Далі' : 'Готово'}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default QuizPage;
