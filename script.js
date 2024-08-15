 // Navbar JavaScript
 const hamburger = document.querySelector(".hamburger");
 const navLinks = document.querySelector(".nav-links");

 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navLinks.classList.toggle("active");
 });

 document.querySelectorAll(".nav-links li").forEach(n => n.addEventListener("click", () => {
     hamburger.classList.remove("active");
     navLinks.classList.remove("active");
 }));
 window.addEventListener('load', function() {
    document.querySelector('.loader').style.display = 'none';
});

// nabar sticky 
// Select the navbar
const navbar = document.querySelector('.nav-container');

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        navbar.style.boxShadow = "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px";
    } else {
        navbar.style.boxShadow = "none";
    }
});




// back to top
// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 300px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
