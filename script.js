// Script básico para el portafolio

// Función para manejar el envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    // Aquí podrías agregar lógica para enviar el formulario a un servidor
});

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación simple al cargar la página
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 1s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});