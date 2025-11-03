// El botón hamburguesa
const menuToggle = document.querySelector('.navbar-toggle'); 

// La lista de enlaces
const menuLinks = document.querySelector('.navbar-links');

// Todos los enlaces individuales dentro del menú
const allLinks = document.querySelectorAll('.navbar-links a');

const body = document.querySelector('body');


// ABRIR MENU
menuToggle.addEventListener('click', () => {
    
    menuToggle.classList.toggle('active');
    menuLinks.classList.toggle('active');
    body.classList.toggle('scroll-lock');
});


// CERRAR MENU
allLinks.forEach(link => {
    
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        menuLinks.classList.remove('active');
        body.classList.remove('scroll-lock');
    });
});