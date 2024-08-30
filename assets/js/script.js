document.getElementById('saludoForm').addEventListener('submit', function(event) {
    // Previene el envío por defecto
    event.preventDefault();

    // Valida el correo electrónico
    var email = document.getElementById('exampleInputEmail1').value;
    var password = document.getElementById('exampleInputPassword1').value;
    var check = document.getElementById('exampleCheck1').checked;

    if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }

    if (!check) {
        alert("Debes aceptar los términos para continuar.");
        return;
    }

    // Si todas las validaciones pasan, muestra el mensaje de éxito
    var successMessage = document.getElementById('successMessage');
    successMessage.textContent = "Saludo enviado con éxito";
    successMessage.style.display = "block";
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}








document.addEventListener('DOMContentLoaded', () => {
    // Función para cambiar el color de fondo del botón al pasar el mouse
    function changeButtonColor(event) {
        event.target.style.backgroundColor = '#4f0000'; // Color al pasar el mouse
    }

    // Función para restaurar el color original del botón al quitar el mouse
    function restoreButtonColor(event) {
        event.target.style.backgroundColor = '#dc3545'; // Color original del botón
    }

    // Selecciona todos los botones con la clase .btn-danger
    const buttons = document.querySelectorAll('.btn-danger');

    // Añade los eventos mouseover y mouseout a cada botón
    buttons.forEach(button => {
        button.addEventListener('mouseover', changeButtonColor);
        button.addEventListener('mouseout', restoreButtonColor);
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExample');
    const items = carousel.querySelectorAll('.carousel-item');
    
    carousel.addEventListener('slide.bs.carousel', function (e) {
        // Añadir animación a la imagen actual antes de que empiece la transición
        const currentElement = carousel.querySelector('.carousel-item.active');
        currentElement.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        currentElement.style.transform = 'scale(0.95)';
        currentElement.style.opacity = '0';

        // Añadir animación al siguiente elemento que aparecerá
        const nextElement = e.relatedTarget;
        nextElement.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
        nextElement.style.transform = 'scale(1)';
        nextElement.style.opacity = '1';
    });
});
