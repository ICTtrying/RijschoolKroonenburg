// script.js
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // pas aan hoeveel scroll je wilt
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
