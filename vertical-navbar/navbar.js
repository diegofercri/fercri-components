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


const dropdownList0 = document.getElementById('dropdown-list0');
const dropdownToggle0 = document.getElementById('dropdown-toggle0');
const dropdownList1 = document.getElementById('dropdown-list1');
const dropdownToggle1 = document.getElementById('dropdown-toggle1');
dropdownToggle0.addEventListener('click', e => {
    dropdownList0.classList.toggle('dropdown-list--show');
    if (dropdownList1.classList.contains('dropdown-list--show-1')) {
        dropdownList1.classList.remove('dropdown-list--show-1');
        dropdownToggle1.querySelector('.fa-angle-down').classList.toggle('rotated');
    }
    dropdownToggle0.querySelector('.fa-angle-down').classList.toggle('rotated');
    imgCloseChecker();
});

dropdownToggle1.addEventListener('click', e => {
    dropdownList1.classList.toggle('dropdown-list--show-1');
    if (dropdownList0.classList.contains('dropdown-list--show')) {
        dropdownList0.classList.remove('dropdown-list--show');
        dropdownToggle0.querySelector('.fa-angle-down').classList.toggle('rotated');
    }
    dropdownToggle1.querySelector('.fa-angle-down').classList.toggle('rotated');
    imgCloseChecker();
});

function imgCloseChecker() {
    // Verifica si ambos toggles están activados
    if (dropdownList0.classList.contains('dropdown-list--show') || dropdownList1.classList.contains('dropdown-list--show-1')) {
        // Asegura que la clase esté presente para ocultar la imagen
        navbar.classList.add('navbar-logo--hidden');
        setTimeout(function () {
            navbar.classList.add('navbar-logo--hidden2');
        }, 500)
    } else {
        // Asegura que la clase esté ausente para mostrar la imagen
        navbar.classList.remove('navbar-logo--hidden');
        navbar.classList.remove('navbar-logo--hidden2');
    }
}


window.addEventListener('resize', () => {
    if (navbar.classList.contains('navbar--show')) {
        navbar.classList.remove('navbar--show');
        mainMenu.classList.remove('main-menu--show');
    }
});