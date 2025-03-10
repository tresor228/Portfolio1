document.addEventListener("DOMContentLoaded", () => {
    // Basculer l'affichage du menu de navigation
    const boutonMenu = document.querySelector('.hamburger');
    const liensNavigation = document.querySelector('.nav-links');

    boutonMenu.addEventListener('click', () => {
        liensNavigation.classList.toggle('actif');
    });

    // Fermer le menu lorsqu'on clique sur un lien
    document.querySelectorAll('.nav-links a').forEach(lien => {
        lien.addEventListener('click', () => {
            liensNavigation.classList.remove('actif');
        });
    });

    // Défilement fluide pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(ancre => {
        ancre.addEventListener('click', function (e) {
            e.preventDefault();
            const cible = document.querySelector(this.getAttribute('href'));
            if (cible) {
                cible.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Activation du lien de navigation en fonction du défilement
    const sections = document.querySelectorAll('section');
    const elementsNavigation = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let sectionActuelle = '';
        sections.forEach(section => {
            const positionSection = section.offsetTop;
            const hauteurSection = section.clientHeight;
            if (window.scrollY >= (positionSection - 200) && window.scrollY < (positionSection + hauteurSection - 200)) {
                sectionActuelle = section.getAttribute('id');
            }
        });

        elementsNavigation.forEach(element => {
            element.classList.remove('actif');
            if (element.getAttribute('href').includes(sectionActuelle)) {
                element.classList.add('actif');
            }
        });
    });

    // Filtrage du portfolio
    const boutonsFiltre = document.querySelectorAll('.filter-btn');
    const elementsPortfolio = document.querySelectorAll('.portfolio-item');

    boutonsFiltre.forEach(bouton => {
        bouton.addEventListener('click', () => {
            // Activation du bouton sélectionné
            boutonsFiltre.forEach(b => b.classList.remove('actif'));
            bouton.classList.add('actif');

            // Filtrage des éléments du portfolio
            const filtre = bouton.dataset.filter;
            elementsPortfolio.forEach(element => {
                element.style.display = (filtre === 'all' || element.dataset.category === filtre) ? 'flex' : 'none';
            });
        });
    });
});
