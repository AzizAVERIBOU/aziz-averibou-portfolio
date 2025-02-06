/**
 * Portfolio Interactif
 * Fichier principal de gestion des interactions utilisateur
 * @author Aziz AVERIBOU
 */

// ============================
// Configuration et Initialisation
// ============================
document.addEventListener('DOMContentLoaded', function() {
    initializeTooltip();
    initializeSmoothScrolling();
    initializeContactForm();
});

// ============================
// Gestion de l'Info-bulle
// ============================
function initializeTooltip() {
    const brandLink = document.querySelector('.navbar-brand');
    const profileImg = document.querySelector('.navbar-profile-img');
    const tooltip = createTooltip();
    
    // Gestionnaires d'événements pour l'info-bulle
    brandLink.addEventListener('mouseenter', (e) => showTooltip(e, tooltip, profileImg));
    brandLink.addEventListener('mouseleave', () => hideTooltip(tooltip, profileImg));
}

/**
 * Crée et configure l'élément info-bulle
 * @returns {HTMLElement} L'élément info-bulle configuré
 */
function createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-content">
            <p class="tooltip-name">Aziz AVERIBOU</p>
            <p class="tooltip-title">Étudiant en Informatique</p>
        </div>
    `;
    document.body.appendChild(tooltip);
    return tooltip;
}

/**
 * Affiche l'info-bulle avec animation
 * @param {Event} event 
 * @param {HTMLElement} tooltip 
 * @param {HTMLElement} profileImg 
 */
function showTooltip(event, tooltip, profileImg) {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
    profileImg.style.transform = 'scale(1.1) rotate(5deg)';
    
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left}px`;
    tooltip.style.top = `${rect.bottom + 10}px`;
}

/**
 * Cache l'info-bulle et réinitialise l'animation
 * @param {HTMLElement} tooltip 
 * @param {HTMLElement} profileImg 
 */

function hideTooltip(tooltip, profileImg) {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
    profileImg.style.transform = 'scale(1) rotate(0)';
}

// ============================
// Navigation Fluide
// ============================
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// ============================
// Gestion du Formulaire
// ============================
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

/**
 * Gère la soumission du formulaire de contact
 * @param {Event} event - L'événement submit
 */
function handleFormSubmit(event) {
    event.preventDefault();
    // TODO: Implémenter la logique d'envoi du formulaire
    alert('Message envoyé !');
} 