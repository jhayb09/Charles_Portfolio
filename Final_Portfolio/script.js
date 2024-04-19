let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Function to handle scrolling
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
};

// Function to handle menu icon click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
    if (navbar.classList.contains('active')) {
        navbar.style.display = 'block'; // If the navbar is active, display it
    } else {
        navbar.style.display = 'none'; // If the navbar is not active, hide it
    }
};

// Function to handle window resize
const handleWindowResize = () => {
    if (window.innerWidth > 995) {
        // If window width is larger than 995 pixels, ensure navbar is always visible
        navbar.classList.remove('active');
        navbar.style.display = 'block';
    } else {
        // If window width is 995 pixels or smaller, handle navbar visibility with menu icon
        navbar.style.display = 'none';
    }
};

// Call handleWindowResize initially and on window resize
handleWindowResize();
window.addEventListener('resize', handleWindowResize);
