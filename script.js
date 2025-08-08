/*======== TOGGLE ICON NAVBAR ========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*======== SCROLL SECTIONS ACTIVE LINK ========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======== STICKY NAVBAR ========*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /*======== REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL) ========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*======== SCROLL REVEAL ========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .skills-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*======== TYPED JS ========*/
const typed = new Typed('.multiple-text', {
    strings: ['Java Developer', 'Frontend Developer', 'Full-Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
// Add this to the top of your script.js file
(function(){
  emailjs.init({
    publicKey: "BcpIezJ6G3kI1h_qy",
  });
})();

// Add this function to your script.js file
function sendMail(event) {
  event.preventDefault(); // Prevents the default form submission

  emailjs.sendForm('service_9vjwem6', 'template_4ymupdb', event.target)
    .then(
      () => {
        // Success message and form reset
        alert("Your message has been sent successfully! I will get back to you shortly.");
        event.target.reset(); 
      },
      (error) => {
        // Error message
        alert("Oops! Something went wrong. Please try again later.");
        console.error("FAILED...", error); 
      },
    );
}

// Rest of your existing JavaScript code will go here...