import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Header />
      <section className="hero reveal">
        <div className="container">
          <h2 className="hero-title">Perfect Fit. Guaranteed.</h2>
          <p className="hero-subtitle">Футболки, пошиті за твоїми мірками. Без розмірів. Без компромісів.</p>
          <Link to="/quiz" className="btn-primary">Почати підбір</Link>
        </div>
      </section>
      <section className="features reveal">
        <div className="container grid-3">
          <div className="feature">
            <h3>Без розмірів</h3>
            <p>Кожна футболка створюється за твоїми мірками. Ніяких S, M, L.</p>
          </div>
          <div className="feature">
            <h3>Пошито після замовлення</h3>
            <p>Жодних надлишкових виробництв. Все — під тебе.</p>
          </div>
          <div className="feature">
            <h3>Преміум якість</h3>
            <p>Ми використовуємо тільки довговічну, м'яку органічну бавовну.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
