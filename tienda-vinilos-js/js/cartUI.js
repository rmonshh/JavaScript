// Panel lateral de la cesta: pintado y apertura/cierre
import { getCart, getCount, getTotal } from './cart.js';
import { formatPrice } from './utils.js';

const drawer = document.getElementById('drawer');
const overlay = document.getElementById('overlay');

export const openDrawer  = () => { drawer.classList.add('open');    overlay.classList.add('open'); };
export const closeDrawer = () => { drawer.classList.remove('open'); overlay.classList.remove('open'); };

// Dibuja las líneas de la cesta, el total y el contador
export function updateCartUI(){
  const cart = getCart();
  document.getElementById('cartCount').textContent = getCount();
  document.getElementById('cartTotal').textContent = formatPrice(getTotal());
  document.getElementById('checkoutBtn').disabled = cart.length === 0;

  const itemsEl = document.getElementById('drawerItems');
  if(cart.length === 0){
    itemsEl.innerHTML = `<div class="empty-cart">Tu cesta está vacía por ahora.<br>Explora el catálogo y añade algún disco.</div>`;
    return;
  }
  itemsEl.innerHTML = cart.map(i => `
    <div class="drawer-item">
      <div class="thumb"></div>
      <div class="info">
        <h4>${i.title}</h4>
        <div class="artist">${i.artist}</div>
        <div class="row">
          <div>
            <button class="qty-btn" data-action="qty" data-id="${i.id}" data-delta="-1">−</button>
            <span style="margin:0 8px;">${i.qty}</span>
            <button class="qty-btn" data-action="qty" data-id="${i.id}" data-delta="1">+</button>
          </div>
          <button class="remove-link" data-action="remove" data-id="${i.id}">Quitar</button>
        </div>
      </div>
    </div>
  `).join('');
}
