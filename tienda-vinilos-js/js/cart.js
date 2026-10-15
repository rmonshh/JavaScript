// =====================================================
// cart.js
// MISIÓN: guardar qué discos hay en la cesta y cuántos.
// Aquí NO se toca la página, solo los datos de la cesta.
// =====================================================

import { productos } from "./data.js";

// La cesta empieza vacía.
// Cada elemento será: { id, titulo, artista, precio, cantidad }
let cesta = [];

// Devuelve la cesta para que otros archivos puedan leerla
export function obtenerCesta() {
  return cesta;
}

// Cuenta cuántos discos hay en total (sumando las cantidades)
export function contarDiscos() {
  let total = 0;
  for (let i = 0; i < cesta.length; i++) {
    total = total + cesta[i].cantidad;
  }
  return total;
}

// Calcula lo que cuesta toda la cesta
export function calcularTotal() {
  let total = 0;
  for (let i = 0; i < cesta.length; i++) {
    total = total + cesta[i].precio * cesta[i].cantidad;
  }
  return total;
}

// Busca un disco en la lista de productos por su id.
// Si no lo encuentra devuelve null.
function buscarProducto(id) {
  for (let i = 0; i < productos.length; i++) {
    if (productos[i].id === id) {
      return productos[i];
    }
  }
  return null;
}

// Busca un disco dentro de la cesta por su id.
// Si no está en la cesta devuelve null.
function buscarEnCesta(id) {
  for (let i = 0; i < cesta.length; i++) {
    if (cesta[i].id === id) {
      return cesta[i];
    }
  }
  return null;
}

// Añade un disco a la cesta.
// Si ya estaba, le sumo 1 a la cantidad.
// Devuelvo el producto para poder enseñar su nombre en el aviso.
export function agregarProducto(id) {
  let producto = buscarProducto(id);
  let linea = buscarEnCesta(id);

  if (linea !== null) {
    // Ya estaba en la cesta: solo sumo uno
    linea.cantidad = linea.cantidad + 1;
  } else {
    // No estaba: creo una línea nueva copiando los datos del producto
    let nuevaLinea = {
      id: producto.id,
      titulo: producto.titulo,
      artista: producto.artista,
      precio: producto.precio,
      cantidad: 1
    };
    cesta.push(nuevaLinea);
  }

  return producto;
}

// Suma 1 a la cantidad de un disco de la cesta (botón +)
export function sumarUno(id) {
  let linea = buscarEnCesta(id);
  if (linea !== null) {
    linea.cantidad = linea.cantidad + 1;
  }
}

// Resta 1 a la cantidad (botón −). Si llega a 0 lo quito.
export function restarUno(id) {
  let linea = buscarEnCesta(id);
  if (linea !== null) {
    linea.cantidad = linea.cantidad - 1;
    if (linea.cantidad <= 0) {
      quitarProducto(id);
    }
  }
}

// Quita un disco de la cesta del todo (botón Quitar).
// Hago una cesta nueva con todos los discos MENOS ese.
export function quitarProducto(id) {
  let nuevaCesta = [];
  for (let i = 0; i < cesta.length; i++) {
    if (cesta[i].id !== id) {
      nuevaCesta.push(cesta[i]);
    }
  }
  cesta = nuevaCesta;
}

// Deja la cesta vacía (al finalizar el pedido)
export function vaciarCesta() {
  cesta = [];
}
