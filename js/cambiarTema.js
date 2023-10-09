// Función para cambiar el tema
function cambiarTema() {
    const body = document.body;
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');

    // Comprobar el tema actual
    if (body.classList.contains('modo-oscuro')) {
        // Cambiar a modo claro
        body.classList.remove('modo-oscuro');
        header.classList.remove('modo-oscuro');
        footer.classList.remove('modo-oscuro');
    } else {
        // Cambiar a modo oscuro
        body.classList.add('modo-oscuro');
        header.classList.add('modo-oscuro');
        footer.classList.add('modo-oscuro');
    }
}

// Agregar un evento de clic al botón de cambio de tema
const btnCambiarTema = document.getElementById('btnCambiarTema');
if (btnCambiarTema) {
    btnCambiarTema.addEventListener('click', cambiarTema);
}