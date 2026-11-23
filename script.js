// =========================================
// Soft Interior Decor - JavaScript
// =========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initMobileNav();
    initNavbarScroll();
    initSmoothScroll();
    initGallery();
    initContactForm();
    initScrollAnimations();
    initNewsletterForm();
});

// =========================================
// Mobile Navigation
// =========================================
function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// =========================================
// Navbar Scroll Effect
// =========================================
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// =========================================
// Gallery Initialization
// =========================================
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');

    const galleryItems = [
        {
            title: 'Modern Living Room',
            category: 'Living Room',
            image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0e6f6"/><rect x="50" y="50" width="300" height="200" fill="%23e8dcf4" opacity="0.5"/><text x="200" y="150" font-family="Arial" font-size="24" fill="%238e7cc3" text-anchor="middle">Living Room</text></svg>'
        },
        {
            title: 'Serene Bedroom',
            category: 'Bedroom',
            image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0e6f6"/><rect x="50" y="50" width="300" height="200" fill="%23e8dcf4" opacity="0.5"/><text x="200" y="150" font-family="Arial" font-size="24" fill="%238e7cc3" text-anchor="middle">Bedroom</text></svg>'
        },
        {
            title: 'Elegant Dining',
            category: 'Dining Area',
            image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0e6f6"/><rect x="50" y="50" width="300" height="200" fill="%23e8dcf4" opacity="0.5"/><text x="200" y="150" font-family="Arial" font-size="24" fill="%238e7cc3" text-anchor="middle">Dining Area</text></svg>'
        },
        {
            title: 'Home Office',
            category: 'Home Office',
            image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0e6f6"/><rect x="50" y="50" width="300" height="200" fill="%23e8dcf4" opacity="0.5"/><text x="200" y="150" font-family="Arial" font-size="24" fill="%238e7cc3" text-anchor="middle">Home Office</text></svg>'
        },
        {
            title: 'Cozy Reading Nook',
            category: 'Soft Furnishings',
            image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0e6f6"/><rect x="50" y="50" width="300" height="200" fill="%23e8dcf4" opacity="0.5"/><text x="200" y="150" font-family="Arial" font-size="24" fill="%238e7cc3" text-anchor="middle">Reading Nook</text></svg>'
        },
        {
            title: 'Entryway Design',
            category: 'Entryway',
            image: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f0e6f6"/><rect x="50" y="50" width="300" height="200" fill="%23e8dcf4" opacity="0.5"/><text x="200" y="150" font-family="Arial" font-size="24" fill="%238e7cc3" text-anchor="middle">Entryway</text></svg>'
        }
    ];

    galleryItems.forEach((item, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.style.animationDelay = `${index * 0.1}s`;
        galleryItem.innerHTML = `
            <div class="gallery-image" style="background-image: url('${item.image}');"></div>
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <span class="gallery-category">${item.category}</span>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// =========================================
// Contact Form Handling
// =========================================
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show loading state on submit button
        const submitBtn = contactForm.querySelector('.btn-submit');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you within 24 hours.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
}

// =========================================
// Newsletter Form
// =========================================
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            const btn = form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Subscribing...';
            btn.disabled = true;

            setTimeout(() => {
                alert(`Thank you for subscribing with ${email}!`);
                form.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    });
}

// =========================================
// Scroll Animations (Intersection Observer)
// =========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(
        '.service-card, .gallery-item, .about-text, .about-image, .contact-info, .contact-form-wrapper'
    );

    animatedElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// =========================================
// Smooth Scroll for Navigation Links
// =========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}