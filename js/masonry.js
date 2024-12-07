// Initialisation de Masonry
window.addEventListener('load', () => {
    const grid = document.querySelector('.photos-grid');
    const masonry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 32, // Augmentation de l'espacement
        fitWidth: true, // Pour centrer la grille
        transitionDuration: 0 // Pour un rendu plus rapide
    });

    // Réinitialiser Masonry après le chargement des images
    imagesLoaded(grid, function() {
        masonry.layout();
    });
}); 