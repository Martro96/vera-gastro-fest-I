/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




/****MENÚ HAMBURGUESA******/
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    abrir.addEventListener("click", () => {
        nav.classList.add("main-nav--visible"); 
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("main-nav--visible"); 
    });
});

/***CURRENT PAGE***/
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos la URL de la página actual
    const currentUrl = window.location.href;
    
    // Obtenemos todas las etiquetas <a> dentro de la lista de navegación
    const navLinks = document.querySelectorAll(".main-nav__link");

    // Iteramos sobre cada enlace
    navLinks.forEach(function(link) {
        // Verificamos si la URL del enlace coincide con la URL de la página actual
        if (link.href === currentUrl) {
            // Agregamos la clase "current-page" a la etiqueta <li> padre del enlace
            link.parentNode.classList.add("current-page");
        }
    });
});

import Swiper from 'swiper';
// Importar los estilos de Swiper y los módulos necesarios
import 'swiper/swiper-bundle.css';

// Inicializar Swiper
let swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
    // Agregar los módulos de navegación y paginación
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        250: {
        slidesPerView: 1,
        spaceBetween: 20,
        },
        // when window width is >= 768 pantalla desktop
        768: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >=900
        915: {
            slidesPerView: 3,
            spaceBetween: 100,
        }
        }
});
