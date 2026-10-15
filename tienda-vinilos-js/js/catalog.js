// Catálogo: pintado de la rejilla y filtro por género
import { products, genreLabel } from './data.js';
import { formatPrice } from './utils.js';

const grid = document.getElementById('grid');
let activeGenre = "todos";

export function setGenre(genre){
  activeGenre = genre;
  renderGrid();
}

export function renderGrid(){
  const list = activeGenre === "todos" ? products : products.filter(p => p.genre === activeGenre);
  grid.innerHTML = list.map(p => `
    <div class="card">
      <div class="sleeve ${p.cls}">
        <div class="peek"></div>
        <span class="tag">${genreLabel[p.genre]}</span>
      </div>
      <div class="card-body">
        <h3>${p.title}</h3>
        <div class="artist">${p.artist}</div>
        <div class="card-foot">
          <span class="price">${formatPrice(p.price)}</span>
          <button class="add-btn" data-action="add" data-id="${p.id}">Añadir a la cesta</button>
        </div>
      </div>
    </div>
  `).join('');
}
