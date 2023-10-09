    // Obtener el elemento del encabezado
    const header = document.querySelector('.header');

    // Agregar un evento de "mouseenter" al encabezado
    header.addEventListener('mouseenter', () => {
        // Cambiar el color de fondo al pasar el cursor
        header.style.backgroundColor = '#808080';
    });

    // Agregar un evento de "mouseleave" al encabezado
    header.addEventListener('mouseleave', () => {
        // Restaurar el color de fondo cuando el cursor se aleje
        header.style.backgroundColor = '';
    });