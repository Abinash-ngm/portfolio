// Welcome message
console.log("Welcome to Abinash's Portfolio");

// Smooth scroll animation
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith("#")) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href'))
                .scrollIntoView({ behavior: 'smooth' });
        }
    });
});