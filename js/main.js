// Update copyright year
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Fonction pour gérer les animations au scroll
function handleScrollAnimations() {
    const fadeElements = document.querySelectorAll('.hero-content, .project-card, .photos-grid .grid-item, .sandbox-item, .about-content > *, .project-hero, .project-intro, .clients-grid .client-logo');
    
    if (fadeElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in', 'appear');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '50px 0px -10% 0px'
    });

    fadeElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (
            rect.top >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        );
        
        if (isVisible) {
            element.classList.add('fade-in', 'appear');
        } else {
            observer.observe(element);
        }
    });
}

// Exécuter après le chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Gestion des images
    const images = document.querySelectorAll('.project-image img');
    images.forEach(img => {
        if (img.complete) {
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
        }
    });
    
    // Ajouter l'animation au chargement initial
    handleScrollAnimations();
});

// Désactiver les animations si l'utilisateur préfère les mouvements réduits
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
} 