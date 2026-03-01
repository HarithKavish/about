document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        if (body.classList.contains('dark-mode')) {
            prefersDark.prevent();
        } else {
            prefersDark.matchMedia('(prefers-color-scheme: dark)').matches && body.classList.remove('dark-mode');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add fade-in animations on scroll
    const elements = document.querySelectorAll('.element-enter');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('element-enter');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });

    // Initialize with dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches && !body.classList.contains('dark-mode')) {
        body.classList.add('dark-mode');
    }
});