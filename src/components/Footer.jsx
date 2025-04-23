import '../styles/styles.css';

function Footer() {
  return (
    <footer className="site-footer reveal">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} UNN. Натхненний Son of a Tailor.</p>
      </div>
    </footer>
  );
}

export default Footer;
