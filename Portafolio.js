$(document).ready(function(){
    // Manejo de eventos para cambiar entre modo diurno y nocturno
    $('#toggle-theme').click(function(){
        $('body').toggleClass('dark-mode');
        var text = $(this).text() === "Modo Nocturno" ? "Modo Diurno" : "Modo Nocturno";
        $(this).text(text);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Calcula la edad y actualiza el span
    calcularEdad();

    // Actualiza la edad cada año
    setInterval(calcularEdad, 1000 * 60 * 60 * 24); // Actualiza cada día
});

function calcularEdad() {
    var fechaNacimiento = new Date("2003-04-12"); // Reemplaza YYYY-MM-DD con tu fecha de nacimiento en formato ISO (año-mes-día)
    var ahora = new Date();
    var edad = ahora.getFullYear() - fechaNacimiento.getFullYear();
    if (ahora < new Date(ahora.getFullYear(), fechaNacimiento.getMonth(), fechaNacimiento.getDate())) {
        edad--;
    }
    document.getElementById("edad-span").textContent = edad;
}

let prevScrollpos = window.pageYOffset;
let navbar = document.getElementById("navbar");

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
        navbar.classList.remove("hidden"); // Muestra la barra de navegación al desplazar hacia arriba o si está en la parte superior de la página
    } else {
        navbar.classList.add("hidden"); // Oculta la barra de navegación al desplazar hacia abajo
    }
    prevScrollpos = currentScrollPos;
}

navbar.addEventListener("mouseenter", function() {
    navbar.classList.remove("hidden"); // Muestra la barra de navegación al acercar el mouse
});

navbar.addEventListener("mouseleave", function() {
    if (window.pageYOffset !== 0) {
        navbar.classList.add("hidden"); // Oculta la barra de navegación si el mouse sale y la página no está en la parte superior fua
    }
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});