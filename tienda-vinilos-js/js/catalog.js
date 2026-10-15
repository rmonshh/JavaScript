// =====================================================
// catalog.js
// MISIÓN: pintar las tarjetas de los discos en la página
// y filtrar por género.
// =====================================================

import { productos, nombreGenero } from "./data.js";
import { formatearPrecio } from "./utils.js";

// Género que está seleccionado ahora. Al principio se ven todos.
let generoActivo = "todos";

// Cambia el género elegido y vuelve a pintar el catálogo
export function cambiarGenero(genero) {
  generoActivo = genero;
  pintarCatalogo();
}

// Crea el HTML de las tarjetas y lo mete dentro del <div id="grid">
export function pintarCatalogo() {
  let rejilla = document.getElementById("grid");
  let html = ""; // aquí voy juntando el HTML de todas las tarjetas

  for (let i = 0; i < productos.length; i++) {
    let p = productos[i];

    // Solo pinto el disco si se ven "todos" o si es del género elegido
    if (generoActivo === "todos" || p.genero === generoActivo) {
      html += '<div class="card">';

      // Portada: color de fondo + disco asomando + etiqueta del género
      html += '  <div class="sleeve ' + p.color + '">';
      html += '    <div class="peek"></div>';
      html += '    <span class="tag">' + nombreGenero(p.genero) + '</span>';
      html += '  </div>';

      // Parte de abajo: título, artista, precio y botón
      html += '  <div class="card-body">';
      html += '    <h3>' + p.titulo + '</h3>';
      html += '    <div class="artist">' + p.artista + '</div>';
      html += '    <div class="card-foot">';
      html += '      <span class="price">' + formatearPrecio(p.precio) + '</span>';
      // Guardo el id del disco en data-id para saber cuál se ha pulsado
      html += '      <button class="add-btn" data-id="' + p.id + '">Añadir a la cesta</button>';
      html += '    </div>';
      html += '  </div>';

      html += '</div>';
    }
  }

  // Sustituyo lo que había en la rejilla por las tarjetas nuevas
  rejilla.innerHTML = html;
}
