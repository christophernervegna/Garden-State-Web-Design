// Selectors
let header = document.querySelector('.nav-header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', function () {
    header.classList.toggle('menu-open');
});