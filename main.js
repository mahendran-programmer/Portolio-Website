var typed = new Typed(".role",{
    strings:["Software Engineer", "Web Developer", "Freelancer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// Dark Mode Toggle
const toggleSwitch = document.getElementById('moon-icon');

toggleSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleSwitch.classList.replace('bx-moon', 'bx-sun');
    } else {
        toggleSwitch.classList.replace('bx-sun', 'bx-moon');
    }
});

//Menu Icon click handling
let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuicon.addEventListener('click', () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

//Highlighting the Menu which activated
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function () {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    ScrollReveal({
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200,
    })
    ScrollReveal().reveal('.logo, .header-text,.about-img,.technical-bars, .contact-info', {origin: 'left'});

    ScrollReveal().reveal('.bx-moon, .pic,.experience, .tools-box, .contact-form', {origin: 'right'})

    ScrollReveal().reveal('.navbar, .about-content, .skills-heading, .service-header, .contact-header', {origin: 'top'})

    ScrollReveal().reveal('.skills-header, .services-list', {origin: 'bottom'})

});



