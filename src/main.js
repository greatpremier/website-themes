import './index.css';

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    const contactForm = document.getElementById('contact-form');

    // Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('bg-white', 'shadow-md', 'py-3');
            navbar.classList.remove('bg-white/90', 'backdrop-blur-sm', 'py-5');
        } else {
            navbar.classList.remove('bg-white', 'shadow-md', 'py-3');
            navbar.classList.add('bg-white/90', 'backdrop-blur-sm', 'py-5');
        }
    });

    // Smooth Scrolling
    document.querySelectorAll('button[data-scroll]').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-scroll');
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (mobileMenu) mobileMenu.classList.add('hidden');
            }
        });
    });

    // Form Submission Handler
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // --- JAVASCRIPT PLACEHOLDER FOR FORM SUBMISSION ---
            // This is where you would typically send the form data to a server.
            // Example:
            /*
            const formData = {
                name: document.getElementById('form-name').value,
                email: document.getElementById('form-email').value,
                phone: document.getElementById('form-phone').value,
                message: document.getElementById('form-message').value
            };

            fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Message sent successfully!');
            })
            .catch(error => {
                console.error('Error:', error);
            });
            */
            // --------------------------------------------------

            alert('Thank you! Your message has been sent. We will contact you shortly.');
            contactForm.reset();
        });
    }
});
