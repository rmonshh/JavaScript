// Punto de entrada: conecta los módulos y registra los eventos
import { addItem, changeQty, removeItem, clearCart } from './cart.js';
import { renderGrid, setGenre } from './catalog.js';
import { updateCartUI, openDrawer, closeDrawer } from './cartUI.js';
import { showToast } from './toast.js';

// --- Filtros del catálogo ---
const filters = document.getElementById('filters');
filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if(!btn) return;
  filters.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  setGenre(btn.dataset.genre);
});

// --- Botón "Añadir a la cesta" (delegación de eventos sobre la rejilla) ---
document.getElementById('grid').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action="add"]');
  if(!btn) return;
  const product = addItem(Number(btn.dataset.id));
  updateCartUI();
  showToast(`${product.title} añadido a la cesta`);
  btn.textContent = "Añadido";
  btn.classList.add('added');
  setTimeout(() => { btn.textContent = "Añadir a la cesta"; btn.classList.remove('added'); }, 1400);
});

// --- Botones dentro del panel de la cesta (+, −, Quitar) ---
document.getElementById('drawerItems').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-action]');
  if(!btn) return;
  const id = Number(btn.dataset.id);
  if(btn.dataset.action === 'qty') changeQty(id, Number(btn.dataset.delta));
  if(btn.dataset.action === 'remove') removeItem(id);
  updateCartUI();
});

// --- Finalizar pedido ---
document.getElementById('checkoutBtn').addEventListener('click', () => {
  showToast("Pedido confirmado (demo) — gracias por tu compra");
  clearCart();
  updateCartUI();
  closeDrawer();
});

// --- Abrir / cerrar el panel ---
document.getElementById('cartToggle').addEventListener('click', openDrawer);
document.getElementById('drawerClose').addEventListener('click', closeDrawer);
document.getElementById('overlay').addEventListener('click', closeDrawer);

// --- Botones con data-scroll (hero) y data-toast (newsletter) ---
document.addEventListener('click', (e) => {
  const scrollBtn = e.target.closest('[data-scroll]');
  if(scrollBtn) document.getElementById(scrollBtn.dataset.scroll).scrollIntoView();
  const toastBtn = e.target.closest('[data-toast]');
  if(toastBtn) showToast(toastBtn.dataset.toast);
});

// --- Primer pintado ---
renderGrid();
updateCartUI();
