const hamburgerElement =  document.querySelector('#hamburger');
const mobileNavigation = document.querySelector('#navigation-mobile');

const toggleNav = () => {
    mobileNavigation.classList.toggle('u-toggle-display');
}

hamburgerElement.addEventListener('click', toggleNav);