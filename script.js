
document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });


    // =====================================
    // ANIMATED JOB TITLES
    // =====================================

    const typingElement = document.getElementById("typing-text");

    const roles = [
        "Data Engineer",
        "Python Developer",
        "ETL Developer",
        "Data Analytics Professional"
    ];

    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;

    function typeRole() {

        const currentRole = roles[roleIndex];

        if (!deleting) {
            characterIndex++;

            typingElement.textContent =
                currentRole.substring(0, characterIndex);

            if (characterIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeRole, 1500);
                return;
            }

        } else {
            characterIndex--;

            typingElement.textContent =
                currentRole.substring(0, characterIndex);

            if (characterIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeRole, deleting ? 45 : 90);
    }

    typeRole();


    // =====================================
    // ACTIVE NAVIGATION ON SCROLL
    // =====================================

    const sections = document.querySelectorAll("main section[id]");

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");

            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }


    // =====================================
    // BACK TO TOP
    // =====================================

    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {

        updateActiveNavigation();

        if (window.scrollY > 400) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // =====================================
    // AUTOMATIC COPYRIGHT YEAR
    // =====================================

    document.getElementById("year").textContent =
        new Date().getFullYear();

});

