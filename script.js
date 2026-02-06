// script.js
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // pas aan hoeveel scroll je wilt
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add intersection observer to toggle 'show' class on elements with 'hidden' class

document.addEventListener('DOMContentLoaded', function () {
  const hiddenSections = document.querySelectorAll('.hidden');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.2
  });

  hiddenSections.forEach(section => {
    observer.observe(section);
  });
});


