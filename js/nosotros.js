// Obtenemos todas las secciones y los párrafos
const secciones = document.querySelectorAll('.seccion');
const parrafos = document.querySelectorAll('p');

// Agregamos un evento de clic a cada sección
secciones.forEach((seccion, index) => {
  seccion.addEventListener('click', () => {
    // Alternamos la visualización del párrafo correspondiente
    parrafos[index].classList.toggle('mostrar');
  });
});
