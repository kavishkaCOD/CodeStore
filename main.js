document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const themeToggle = document.getElementById("theme-toggle");

    // Mobile Menu Toggle
    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Dark/Light Mode Toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        // Change icon
        if (document.body.classList.contains("light-mode")) {
            themeToggle.innerHTML = "🌞"; // Light mode icon
        } else {
            themeToggle.innerHTML = "🌙"; // Dark mode icon
        }
    });
});
