// Lista de libros
export const libros = [];

// Crea un libro (un objeto normal) y lo añade a la lista
export function agregarLibro(titulo, autor, color) {
       const libro = {
              titulo: titulo,
              autor: autor,
              color: color,
              leido: false
       };
       libros.push(libro);
}

// Cambia leído - no leído del libro que le pasemos
export function cambiarLeido(libro) {
       libro.leido = !libro.leido;
}

// Cuena cuántos libros están leídos
export function contarLeidos() {
       let contador = 0;
       for (const libro of libros) {
              if (libro.leido) {
                     contador++;
              }
       }
       return contador;
}

