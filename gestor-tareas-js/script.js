// 1. las tareas guardadas en un array (ponemos unas de ejemplo)
let tareas = [
       {texto: "Estudiar JavaScript", hecha: false},
       {texto: "Hacer la compra", hecha: true}
];

// 2. Dibujar la lista en pantalla
function pintar() {
       const lista = document.getElementById("lista"); // añadimos HTML a la <ul> creando lista
       lista.innerHTML = ""; // vacia la pantalla, no el array tareas

       tareas.forEach((tarea, i) => {
              const li = document.createElement("li");
              if (tarea.hecha) li.classList.add("hecha");

              li.innerHTML = `<span>${tarea.texto}</span> <button class="borrar">×</button>`;

              // Clic en el texto: marcar/desmarcar
              li.querySelector("span").onclick = () => {
                     tarea.hecha = !tarea.hecha;
                     pintar();
              };

              //Clic en la x: borrar
              li.querySelector(".borrar").onclick = () => {
                     tareas.splice(i, 1);
                     pintar();
              }

              // aqui es el punto concreto donde en esencia añadimos HTML a la <ul> creando lista
              lista.appendChild(li);
       });

       const pendientes = tareas.filter(t => !t.hecha).length;
       document.getElementById("contador").textContent = `Te quedan ${pendientes} tareas`;
}

// 3. Añadir una tarea al enviar el formulario
document.getElementById("form").onsubmit = (e) => {
       e.preventDefault(); // no recargar pagina al enviar formulario 
       const input = document.getElementById("texto"); // guarda lo escrito a la variable input
       tareas.push({ texto: input.value, hecha: false}); // añadir objeto al array tareas
       input.value = ""; // vacia campo
       pintar();
};

// 4. Pintar al cargar la página
pintar();