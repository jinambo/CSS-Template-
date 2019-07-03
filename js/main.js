// menu dropdown
let clicker = false;
function dropDown() {
    let nav = document.querySelector('.menu-box');

    if (clicker == false) {
        nav.style.top = 0;
        clicker = true;
    } else {
        nav.style.top = "-200%";
        clicker = false;
    }
}
// end of menu dropdown

// slide to element
function slideTo(clickedElement) {
    let myElement = document.querySelector('.' + clickedElement);
    const y = myElement.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: y,
      behavior: 'smooth'
    });
}
// end of slide to element

// submenu 
let subMenu = document.querySelector('.dropdowned-box');

function showSubMenu() {
    subMenu.style.opacity = 1;
}

function hideSubMenu() {
    subMenu.style.opacity = 0;
}
//end of submenu