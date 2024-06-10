function toggleMenu() {
    var navLinks = document.querySelector(".nav-links");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('#nav-links');

    function toggleMenu() {
        navLinks.classList.toggle('active');
    }

    function handleResize() {
        if (window.innerWidth > 768) {
            navLinks.style.display = 'flex';
        } else if (!navLinks.classList.contains('active')) {
            navLinks.style.display = 'none';
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    // Llama a handleResize al cargar la página para asegurar el estado inicial correcto
    handleResize();
});
