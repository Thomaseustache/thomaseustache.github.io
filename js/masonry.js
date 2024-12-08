document.addEventListener('DOMContentLoaded', () => {
    // Initialisation de Masonry uniquement sur la page photos
    if (document.querySelector('.photos-grid')) {
        const grid = document.querySelector('.photos-grid');
        const masonry = new Masonry(grid, {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true,
            gutter: 32,
            fitWidth: true,
            transitionDuration: 0
        });

        // Réinitialiser Masonry après le chargement des images
        imagesLoaded(grid, function() {
            masonry.layout();
        });
    }
}); 