document.addEventListener('DOMContentLoaded', function() {
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

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate sending the form (replace with actual API call in production)
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        });
    }

    // Add hover effects for cards with animations
    const cards = document.querySelectorAll('.content-card, .education-card, .project-card, .insight-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add animation for sections on scroll
    const sections = document.querySelectorAll('.about-section, .projects-section, .education-section, .insights-section, .contact-section');
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        window.addEventListener('scroll', () => {
            const sectionPosition = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionPosition < windowHeight - 300) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });

        // Initial check
        if (section.offsetHeight > 0) {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
    });
});