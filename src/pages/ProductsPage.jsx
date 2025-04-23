import { useState, useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CartContext } from '../context/CartContext';

const allProducts = [
  { id: 1, name: 'Чорна футболка', price: 999, image: 'https://via.placeholder.com/320x420?text=Black+T-shirt', color: 'black', fabric: 'cotton', sleeve: 'short' },
  { id: 2, name: 'Біла футболка', price: 999, image: 'https://via.placeholder.com/320x420?text=White+T-shirt', color: 'white', fabric: 'cotton', sleeve: 'short' },
  { id: 3, name: 'Чорна Logo (довгий рукав)', price: 1050, image: 'https://via.placeholder.com/320x420?text=Logo+Black', color: 'black', fabric: 'pima', sleeve: 'long' },
  { id: 4, name: 'Oversize біла (довгий рукав)', price: 1050, image: 'https://via.placeholder.com/320x420?text=Oversize+White', color: 'white', fabric: 'pima', sleeve: 'long' }
];

function ProductsPage() {
  const { addToCart } = useContext(CartContext);
  const [filters, setFilters] = useState({ color: 'all', fabric: 'all', sleeve: 'all' });
  const [quick, setQuick] = useState(null);

  const handleFilter = ({ target: { id, value } }) => setFilters(prev => ({ ...prev, [id]: value }));
  const reset = () => setFilters({ color: 'all', fabric: 'all', sleeve: 'all' });

  const visible = allProducts.filter(p =>
    (filters.color === 'all' || p.color === filters.color) &&
    (filters.fabric === 'all' || p.fabric === filters.fabric) &&
    (filters.sleeve === 'all' || p.sleeve === filters.sleeve)
  );

  const closeQuick = () => setQuick(null);

  return (
    <>
      <Header />
      <section className="hero reveal" style={{ background: '#111 url(https://via.placeholder.com/1600x400) center/cover' }}>
        <div className="container">
          <h2 className="hero-title">Каталог футболок</h2>
          <p className="hero-subtitle">Обери тканину, колір та ідеальний рукав</p>
        </div>
      </section>
      <section className="container reveal" style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <select id="color" className="btn-primary" value={filters.color} onChange={handleFilter}>
          <option value="all">Колір: Усі</option>
          <option value="white">Білі</option>
          <option value="black">Чорні</option>
        </select>
        <select id="fabric" className="btn-primary" value={filters.fabric} onChange={handleFilter}>
          <option value="all">Тканина: Усі</option>
          <option value="cotton">Бавовна</option>
          <option value="pima">Pima Cotton</option>
        </select>
        <select id="sleeve" className="btn-primary" value={filters.sleeve} onChange={handleFilter}>
          <option value="all">Рукав: Усі</option>
          <option value="short">Короткий</option>
          <option value="long">Довгий</option>
        </select>
        <button onClick={reset} className="btn-primary">Скинути</button>
      </section>
      <main className="container reveal" style={{ padding: '2rem 1rem' }}>
        <div className="product-grid">
          {visible.map(p => (
            <div key={p.id} className="product reveal">
              <img src={p.image} alt={p.name} />
              <h2>{p.name}</h2>
              <p>₴{p.price}</p>
              <button onClick={() => addToCart(p)}>Додати в кошик</button>
              <button onClick={() => setQuick(p)}>Швидкий перегляд</button>
            </div>
          ))}
        </div>
      </main>
      {quick && (
        <div id="quickOverlay" className="modal-overlay show" onClick={closeQuick}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close" onClick={closeQuick}>×</button>
            <img src={quick.image} alt="" />
            <h3>{quick.name}</h3>
            <p><span>{quick.price}</span> грн</p>
            <button className="btn-primary" onClick={() => { addToCart(quick); closeQuick(); }}>Додати в кошик</button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default ProductsPage;