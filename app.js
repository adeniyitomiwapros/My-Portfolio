// ----- HAMBURGER MENU -----
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const overlay = document.getElementById("nav-overlay");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

function closeMenu() {
  navLinks.classList.remove("open");
  hamburger.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("no-scroll");
}

function toggleMenu() {
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("no-scroll");
}

// hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);


// ----- THEME TOGGLE -----
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
});

// ----- SMOOTH SCROLL -----
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: 'smooth' });

    // Close mobile menu
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
    }
  });
});

// ----- SCROLL REVEAL -----
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ----- CONTACT FORM -----
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon.');
    contactForm.reset();
  });
}

