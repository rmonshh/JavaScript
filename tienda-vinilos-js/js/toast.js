// =====================================================
// toast.js
// MISIÓN: enseñar un aviso abajo de la pantalla durante
// unos segundos (por ejemplo "Disco añadido a la cesta").
// =====================================================

// Guardo el temporizador para poder cancelarlo
// si sale otro aviso antes de que se esconda el anterior
let temporizador = null;

export function mostrarAviso(mensaje) {
  let aviso = document.getElementById("toast");

  aviso.textContent = mensaje;  // pongo el texto
  aviso.classList.add("show");  // lo hago visible (el CSS hace la animación)

  // Si había un temporizador anterior, lo cancelo
  if (temporizador !== null) {
    clearTimeout(temporizador);
  }

  // Dentro de 2,6 segundos lo escondo otra vez
  temporizador = setTimeout(function () {
    aviso.classList.remove("show");
  }, 2600);
}
