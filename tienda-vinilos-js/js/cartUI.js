// =====================================================
// cartUI.js
// MISIÓN: enseñar la cesta en la página (panel lateral,
// contador y total) y abrir/cerrar el panel.
// =====================================================

import { obtenerCesta, contarDiscos, calcularTotal } from "./cart.js";
import { formatearPrecio } from "./utils.js";

// Abre el panel: le pongo la clase "open" al panel y al fondo oscuro
export function abrirCesta() {
  document.getElementById("drawer").classList.add("open");
  document.getElementById("overlay").classList.add("open");
}

// Cierra el panel: les quito la clase "open"
export function cerrarCesta() {
  document.getElementById("drawer").classList.remove("open");
  document.getElementById("overlay").classList.remove("open");
}

// Vuelve a dibujar todo lo de la cesta.
// La llamo cada vez que la cesta cambia.
export function pintarCesta() {
  let cesta = obtenerCesta();

  // 1. Número del botón "Cesta" de arriba
  document.getElementById("cartCount").textContent = contarDiscos();

  // 2. Total en euros
  document.getElementById("cartTotal").textContent = formatearPrecio(calcularTotal());

  // 3. El botón de finalizar solo funciona si hay algo en la cesta
  let botonFinalizar = document.getElementById("checkoutBtn");
  if (cesta.length === 0) {
    botonFinalizar.disabled = true;
  } else {
    botonFinalizar.disabled = false;
  }

  // 4. Lista de discos dentro del panel
  let lista = document.getElementById("drawerItems");

  // Si está vacía pongo un mensaje y salgo de la función
  if (cesta.length === 0) {
    lista.innerHTML = '<div class="empty-cart">Tu cesta está vacía por ahora.<br>Explora el catálogo y añade algún disco.</div>';
    return;
  }

  let html = "";
  for (let i = 0; i < cesta.length; i++) {
    let linea = cesta[i];

    html += '<div class="drawer-item">';
    html += '  <div class="thumb"></div>';
    html += '  <div class="info">';
    html += '    <h4>' + linea.titulo + '</h4>';
    html += '    <div class="artist">' + linea.artista + '</div>';
    html += '    <div class="row">';
    html += '      <div>';
    // Botón para restar (clase "menos")
    html += '        <button class="qty-btn menos" data-id="' + linea.id + '">−</button>';
    html += '        <span style="margin:0 8px;">' + linea.cantidad + '</span>';
    // Botón para sumar (clase "mas")
    html += '        <button class="qty-btn mas" data-id="' + linea.id + '">+</button>';
    html += '      </div>';
    html += '      <button class="remove-link" data-id="' + linea.id + '">Quitar</button>';
    html += '    </div>';
    html += '  </div>';
    html += '</div>';
  }

  lista.innerHTML = html;
}
