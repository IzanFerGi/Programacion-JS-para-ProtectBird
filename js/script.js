

            // IMAGEN QUE VA CAMBIANDO: EL EFECTO

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.imagen-rotativa');
    let currentIndex = 0;

    function rotateImages() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    // Activar la primera imagen
    images[0].classList.add('active');

    // Cambiar imagen cada 10 segundos
    setInterval(rotateImages, 6000);
});


            // BOTONES: EL EFECTO DE APARICIÓN

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-links li");
    const logo = document.getElementById("logo");

    // Efecto de aparición en cascada para los botones
    navItems.forEach((item, index) => {
        // Establece estilos iniciales fuera de vista
        item.style.opacity = "0";
        item.style.transform = "translateY(-20px)";
        item.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";

        // Añade retraso progresivo para cada botón
        setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }, index * 200); 
    });

    // Efecto de agrandamiento al pasar el ratón por encima de los botones
    navItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transition = "transform 0.2s ease";
            item.style.transform = "scale(1.1)"; 
        });

        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
        });
    });

    // Efecto de iluminación en el logo al pasar el ratón
    logo.addEventListener("mouseenter", () => {
        logo.style.transition = "filter 0.3s ease";
        logo.style.filter = "brightness(1.5)";
    });

    logo.addEventListener("mouseleave", () => {
        logo.style.filter = "brightness(1)";
    });
});

            