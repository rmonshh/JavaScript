// =====================================================
// main.js
// MISIÓN: es el archivo principal. Importa las funciones
// de los otros archivos y decide qué pasa en cada clic.
// =====================================================

import { agregarProducto, sumarUno, restarUno, quitarProducto, vaciarCesta } from "./cart.js";
import { pintarCatalogo, cambiarGenero } from "./catalog.js";
import { pintarCesta, abrirCesta, cerrarCesta } from "./cartUI.js";
import { mostrarAviso } from "./toast.js";


// ---------- 1. FILTROS POR GÉNERO ----------
let botonesFiltro = document.querySelectorAll(".chip");

for (let i = 0; i < botonesFiltro.length; i++) {
  let boton = botonesFiltro[i];

  boton.addEventListener("click", function () {
    // Quito la clase "active" a todos los filtros...
    for (let j = 0; j < botonesFiltro.length; j++) {
      botonesFiltro[j].classList.remove("active");
    }
    // ...y se la pongo solo al que he pulsado
    boton.classList.add("active");

    // Le paso el género (data-genre del HTML) al catálogo
    cambiarGenero(boton.dataset.genre);
  });
}


// ---------- 2. BOTÓN "AÑADIR A LA CESTA" ----------
// Los botones se crean y se borran cada vez que filtro,
// así que escucho los clics en la rejilla entera
// y miro si lo que se ha pulsado es un botón de añadir.
let rejilla = document.getElementById("grid");

rejilla.addEventListener("click", function (evento) {
  let elemento = evento.target; // lo que se ha pulsado

  if (elemento.classList.contains("add-btn")) {
    let id = Number(elemento.dataset.id); // data-id viene como texto, lo paso a número
    let producto = agregarProducto(id);

    pintarCesta();
    mostrarAviso(producto.titulo + " añadido a la cesta");

    // Cambio el botón un momento para que se note que ha funcionado
    elemento.textContent = "Añadido";
    elemento.classList.add("added");

    setTimeout(function () {
      elemento.textContent = "Añadir a la cesta";
      elemento.classList.remove("added");
    }, 1400);
  }
});


// ---------- 3. BOTONES DENTRO DE LA CESTA (+, −, Quitar) ----------
// Igual que antes: escucho en la lista y miro qué botón es
let listaCesta = document.getElementById("drawerItems");

listaCesta.addEventListener("click", function (evento) {
  let elemento = evento.target;
  let id = Number(elemento.dataset.id);

  if (elemento.classList.contains("mas")) {
    sumarUno(id);
  } else if (elemento.classList.contains("menos")) {
    restarUno(id);
  } else if (elemento.classList.contains("remove-link")) {
    quitarProducto(id);
  } else {
    return; // no se ha pulsado ningún botón, no hago nada
  }

  pintarCesta(); // vuelvo a dibujar la cesta con los cambios
});


// ---------- 4. FINALIZAR PEDIDO ----------
document.getElementById("checkoutBtn").addEventListener("click", function () {
  mostrarAviso("Pedido confirmado (demo) — gracias por tu compra");
  vaciarCesta();
  pintarCesta();
  cerrarCesta();
});


// ---------- 5. ABRIR Y CERRAR EL PANEL DE LA CESTA ----------
document.getElementById("cartToggle").addEventListener("click", abrirCesta);   // botón "Cesta"
document.getElementById("drawerClose").addEventListener("click", cerrarCesta); // la X
document.getElementById("overlay").addEventListener("click", cerrarCesta);     // fondo oscuro


// ---------- 6. BOTONES DEL PRINCIPIO (bajar a una sección) ----------
let botonesScroll = document.querySelectorAll("[data-scroll]");

for (let i = 0; i < botonesScroll.length; i++) {
  let boton = botonesScroll[i];

  boton.addEventListener("click", function () {
    // data-scroll tiene el id de la sección ("catalogo" o "nosotros")
    let seccion = document.getElementById(boton.dataset.scroll);
    seccion.scrollIntoView();
  });
}


// ---------- 7. BOTÓN DE LA NEWSLETTER ----------
let botonNewsletter = document.querySelector("[data-toast]");

botonNewsletter.addEventListener("click", function () {
  mostrarAviso(botonNewsletter.dataset.toast);
});


// ---------- 8. AL CARGAR LA PÁGINA ----------
pintarCatalogo(); // dibujo los discos
pintarCesta();    // dibujo la cesta (vacía al principio)
