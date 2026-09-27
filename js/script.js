const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// Mobile menu

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// Close mobile menu when clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});