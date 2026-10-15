// Unir todo y pintar la página

import { libros, agregarLibro, cambiarLeido, contarLeidos} from './libros.js';
import { librosGuardados } from './datos.js';

// color para los libros que todavia no tienen portada
const SIN_PORTADA = '#9a8f85';

// 1) Meto en la lista los libros de la "base de datos"
for (const dato of librosGuardados) {
       agregarLibro(dato.titulo, dato.autor, dato.color);
}

// 2) Cojo los elementos del HTML que voy a usar
const lista = document.getElementById('lista');
const formulario = document.getElementById('formulario');

// 3) Función que dibuja todos los libros
function pintar() {
       lista.innerHTML = '';

       for (const libro of libros) {
              // Creo la tarjeta
              const tarjeta = document.createElement('div');
              tarjeta.className = 'libro';
              tarjeta.innerHTML = `
              <div class="portada" style="background:${libro.color}">${libro.titulo}</div>
              <div class="info">
                     <p>${libro.autor}</p>
                     <button>${libro.leido ? '✓ Leído' : 'Por leer'}</button>
              </div>
              `;

              // Cojo el botón de ESTA tarjeta
              const boton = tarjeta.querySelector('button');
              if (libro.leido) {
                     boton.classList.add('leido'); // lo pinto verde
              }

              // Al hacer clic: cambio el libro y vuelvo a pintar
              boton.addEventListener('click', () => {
                     cambiarLeido(libro);
                     pintar();
              });

              lista.appendChild(tarjeta); // meto la tarjeta en la página
       }

       // Actualizo el contador de arriba
       document.getElementById('total').textContent = libros.length;
       document.getElementById('leidos').textContent = contarLeidos();
}



// 4) Cuando se envía el formulario, añado un libro nuevo
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // que no se recargue la página

  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;

  // El libro nuevo todavía no tiene portada: le pongo la gris
  agregarLibro(titulo, autor, SIN_PORTADA);
  formulario.reset(); // vacío los campos
  pintar();
});


// 5) Pinto por primera vez al abrir la página
pintar();