// src/components/Header.jsx
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Header() {
  return (
    <header className="site-header reveal">
      <div className="container">
        <h1 className="logo">UNN</h1>
        <nav className="nav">
          <Link to="/">Головна</Link>
          <Link to="/quiz">Підбір</Link>
          <Link to="/products">Футболки</Link>
          <Link to="/cart">Кошик</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
