// Отримання кошика з localStorage або створення нового
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Додавання товару в кошик
function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${product.name} додано в кошик!`);
  updateCartUI();
}

// Відображення кошика на сторінці
function updateCartUI() {
  const container = document.getElementById('cart-items');
  if (!container) return;

  container.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    container.innerHTML = '<li>Кошик порожній.</li>';
    return;
  }

  cart.forEach(item => {
    total += item.price;
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="product">
        ${item.image ? `<img src="${item.image}" alt="${item.name}" />` : ''}
        <h3>${item.name}</h3>
        <p>${item.price} грн</p>
      </div>
    `;
    container.appendChild(li);
  });

  const totalContainer = document.getElementById('total');
  if (totalContainer) {
    totalContainer.textContent = total + ' грн';
  }
}

// Оформлення замовлення
function checkout() {
  alert('Дякуємо за замовлення!');
  localStorage.removeItem('cart');
  location.reload();
}

// Якщо сторінка має кошик — відображаємо його
if (document.getElementById('cart-items')) {
  updateCartUI();
}

/* =====  quick view modal  ===== */
function openQuickView(prod){
    // заповнюємо дані
    document.getElementById('qImg').src   = prod.image;
    document.getElementById('qName').textContent  = prod.name;
    document.getElementById('qPrice').textContent = prod.price;
    // кнопка «Додати в кошик» усередині модалі
    const btn = document.getElementById('qAddBtn');
    btn.onclick = ()=>{ addToCart(prod); closeQuickView(); };
    // показуємо модальне вікно
    document.getElementById('quickOverlay').classList.add('show');
  }
  // закриття модалі
  function closeQuickView(){ document.getElementById('quickOverlay').classList.remove('show'); }
  // закриваємо кліком по фону
  document.getElementById('quickOverlay').addEventListener('click',e=>{
    if(e.target.id==='quickOverlay') closeQuickView();
  });
  