    // Obtener todos los botones "Leer más"
    const readMoreButtons = document.querySelectorAll('.btn__2');

    // Agregar un evento de clic a cada botón
    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Mostrar una alerta cuando se hace clic
            alert('¡Gracias por querer saber más!');
        });
    });
