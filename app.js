const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is_active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling
const highlighMenu = () => {
    const elem = document.querySelector('.highlight');
    console.log(elem);
    const homeMenu = document.querySelector('#home_page');
    const aboutMenu = document.querySelector('#about_page');
    const servicesMenu = document.querySelector('#services_page');
    let scrollPos = window.scrollY;

    // adds highlight class to menu items
    if(window.innerWidth > 750 && scrollPos < 600) {
        homeMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 750 && scrollPos < 1400) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 750 && scrollPos < 2345) {
        servicesMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.remove('highlight');
        return
    }

    if( (elem && window.innerWidth < 750 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlighMenu);
window.addEventListener('click', highlighMenu);

// close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is_active');
    if(window.innerWidth <= 750 && menuBars) {
        menu.classList.toggle('is_active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);