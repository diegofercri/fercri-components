const navbar = document.getElementById('navbar');
const toggleMenuOpen = document.getElementById('toggle-menu__open');
const mainMenu = document.getElementById('main-menu');
toggleMenuOpen.addEventListener('click', e => {
    navbar.classList.toggle('navbar--show');
    mainMenu.classList.toggle('main-menu--show');
});

const elements = document.querySelectorAll('.toggle-menu__close');
elements.forEach(element => {
    element.addEventListener('click', () => {
        navbar.classList.toggle('navbar--show');
        mainMenu.classList.toggle('main-menu--show');
    });
});

window.addEventListener('resize', () => {
    if (navbar.classList.contains('navbar--show')) {
        navbar.classList.remove('navbar--show');
        mainMenu.classList.remove('main-menu--show');
    }
});