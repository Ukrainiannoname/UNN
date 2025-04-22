import { useState } from 'react';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css';
import FitQuiz from './FitQuiz';

function App() {
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return (
      <div className="App">
        <FitQuiz />
      </div>
    );
  }

  return (
    <div className="App">
      <header className="grid-x align-middle text-center hero-section">
        <div className="cell">
          <h1 className="hero-title">Perfect Fit. Guaranteed.</h1>
          <p className="lead">Tailored T-Shirts based on your unique body.</p>
          <button
            className="button large primary"
            onClick={() => setShowQuiz(true)}
          >
            Start Fit Quiz
          </button>
        </div>
      </header>

      <section className="grid-x grid-padding-x align-center text-center features-section">
        <div className="cell small-12 medium-4">
          <h3>No Sizes</h3>
          <p>Each shirt is made to your unique body data. No S, M, L.</p>
        </div>
        <div className="cell small-12 medium-4">
          <h3>Made-to-Order</h3>
          <p>Produced after you order. No overproduction.</p>
        </div>
        <div className="cell small-12 medium-4">
          <h3>Premium Quality</h3>
          <p>We use long-lasting, soft organic cotton.</p>
        </div>
      </section>

      <footer className="grid-x align-center text-center footer-section">
        <div className="cell">
          <p>&copy; {new Date().getFullYear()} UNN. Inspired by Son of a Tailor.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
