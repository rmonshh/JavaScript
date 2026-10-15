// =====================================================
// data.js
// MISIÓN: guardar los datos de la tienda (los discos).
// Este archivo NO toca la página, solo guarda información.
// =====================================================

// Lista de discos. Cada disco es un objeto con sus datos:
// id      -> número único para identificar el disco
// titulo  -> nombre del disco
// artista -> grupo o cantante
// genero  -> género musical (se usa para filtrar)
// precio  -> precio en euros
// color   -> clase CSS que da el color a la portada (c1, c2...)
export const productos = [
  { id: 1, titulo: "Luz de Neón",    artista: "Mareas Bajas",     genero: "electronica", precio: 24.90, color: "c1" },
  { id: 2, titulo: "Polvo Cósmico",  artista: "Satélite Sur",     genero: "rock",        precio: 27.50, color: "c2" },
  { id: 3, titulo: "Ciudad Dormida", artista: "Nocturama",        genero: "jazz",        precio: 22.00, color: "c3" },
  { id: 4, titulo: "Raíces",         artista: "Terral",           genero: "folk",        precio: 21.00, color: "c4" },
  { id: 5, titulo: "Voltaje",        artista: "Circuito Cerrado", genero: "electronica", precio: 23.90, color: "c5" },
  { id: 6, titulo: "Horizonte",      artista: "Aguas Claras",     genero: "folk",        precio: 25.00, color: "c6" }
];

// Recibe el género tal como lo guardo ("electronica")
// y devuelve el texto que ve el usuario ("Electrónica").
export function nombreGenero(genero) {
  if (genero === "electronica") {
    return "Electrónica";
  } else if (genero === "rock") {
    return "Rock";
  } else if (genero === "jazz") {
    return "Jazz";
  } else if (genero === "folk") {
    return "Folk";
  }
  // Si llega un género que no conozco, lo devuelvo tal cual
  return genero;
}
