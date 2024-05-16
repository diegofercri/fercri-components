// Block 1

// Get the necessary elements from the DOM
const navbar = document.getElementById('navbar'); // The navigation bar
const toggleMenuOpen = document.getElementById('toggle-menu__open'); // The button to open the menu
const mainMenu = document.getElementById('main-menu'); // The main menu

// Add a click event to the button to open the menu
toggleMenuOpen.addEventListener('click', e => {
    // On click, toggle the 'navbar--show' class on the navigation bar
    // and the 'main-menu--show' class on the main menu
    // This has the effect of showing or hiding these elements
    navbar.classList.toggle('navbar--show');
    mainMenu.classList.toggle('main-menu--show');
});

// Get all the elements that can close the menu
const elements = document.querySelectorAll('.toggle-menu__close');

// To each of these elements, add a click event
elements.forEach(element => {
    element.addEventListener('click', () => {
        // On click, toggle the same classes as before
        // This has the effect of showing or hiding the navigation bar and the main menu
        navbar.classList.toggle('navbar--show');
        mainMenu.classList.toggle('main-menu--show');
    });
});


// Block 2

// Get the necessary elements from the DOM
const dropdownList0 = document.getElementById('dropdown-list0'); // The first dropdown list
const dropdownToggle0 = document.getElementById('dropdown-toggle0'); // The button to toggle the first dropdown
const dropdownList1 = document.getElementById('dropdown-list1'); // The second dropdown list
const dropdownToggle1 = document.getElementById('dropdown-toggle1'); // The button to toggle the second dropdown

// Add a click event to the button to toggle the first dropdown
dropdownToggle0.addEventListener('click', e => {
    // On click, toggle the 'dropdown-list--show-0' class on the first dropdown list
    dropdownList0.classList.toggle('dropdown-list--show-0');
    
    // If the second dropdown list is shown, hide it and rotate its toggle button
    if (dropdownList1.classList.contains('dropdown-list--show-1')) {
        dropdownList1.classList.remove('dropdown-list--show-1');
        dropdownToggle1.querySelector('.fa-angle-down').classList.toggle('rotated');
    }
    
    // Rotate the toggle button of the first dropdown
    dropdownToggle0.querySelector('.fa-angle-down').classList.toggle('rotated');
    
    // Check if the close image should be shown or hidden
    imgCloseChecker();
});

// Add a click event to the button to toggle the second dropdown
dropdownToggle1.addEventListener('click', e => {
    // On click, toggle the 'dropdown-list--show-1' class on the second dropdown list
    dropdownList1.classList.toggle('dropdown-list--show-1');
    
    // If the first dropdown list is shown, hide it and rotate its toggle button
    if (dropdownList0.classList.contains('dropdown-list--show-0')) {
        dropdownList0.classList.remove('dropdown-list--show-0');
        dropdownToggle0.querySelector('.fa-angle-down').classList.toggle('rotated');
    }
    
    // Rotate the toggle button of the second dropdown
    dropdownToggle1.querySelector('.fa-angle-down').classList.toggle('rotated');
    
    // Check if the close image should be shown or hidden
    imgCloseChecker();
});


// Block 3

// This function checks if either of the dropdown lists is shown
function imgCloseChecker() {
    // If either the first or the second dropdown list is shown
    if (dropdownList0.classList.contains('dropdown-list--show-0') || dropdownList1.classList.contains('dropdown-list--show-1')) {
        // Add the 'navbar-logo--hidden' class to the navigation bar
        // This has the effect of hiding the logo
        navbar.classList.add('navbar-logo--hidden');
    } else {
        // Otherwise, remove the 'navbar-logo--hidden' class from the navigation bar
        // This has the effect of showing the logo
        navbar.classList.remove('navbar-logo--hidden');
    }
}


// Block 4

// Add a 'resize' event listener to the window
window.addEventListener('resize', () => {
    // When the window is resized, check if the navigation bar is shown
    if (navbar.classList.contains('navbar--show')) {
        // If it is, remove the 'navbar--show' class from the navigation bar
        // and the 'main-menu--show' class from the main menu
        // This has the effect of hiding the navigation bar and the main menu
        navbar.classList.remove('navbar--show');
        mainMenu.classList.remove('main-menu--show');
    }
});
