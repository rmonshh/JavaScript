// Datos de la tienda: array de objetos (cada disco es un objeto con sus propiedades)
export const products = [
  { id:1, title:"Luz de Neón",     artist:"Mareas Bajas",     genre:"electronica", price:24.90, cls:"c1" },
  { id:2, title:"Polvo Cósmico",   artist:"Satélite Sur",     genre:"rock",        price:27.50, cls:"c2" },
  { id:3, title:"Ciudad Dormida",  artist:"Nocturama",        genre:"jazz",        price:22.00, cls:"c3" },
  { id:4, title:"Raíces",          artist:"Terral",           genre:"folk",        price:21.00, cls:"c4" },
  { id:5, title:"Voltaje",         artist:"Circuito Cerrado", genre:"electronica", price:23.90, cls:"c5" },
  { id:6, title:"Horizonte",       artist:"Aguas Claras",     genre:"folk",        price:25.00, cls:"c6" },
];

// Diccionario de traducción: valor interno del género → texto para el usuario
export const genreLabel = { electronica:"Electrónica", rock:"Rock", jazz:"Jazz", folk:"Folk" };
