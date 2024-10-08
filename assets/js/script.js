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


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}