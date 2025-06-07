// Navigation mobile
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger?.classList.remove('active');
        navMenu?.classList.remove('active');
    });
});

// Animation au scroll avec Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Données des projets détaillés
const projectsData = {
    1: {
        title: "Réparation d'Ordinateurs",
        description: "Stage professionnel axé sur la maintenance et la réparation de matériel informatique",
        periode: "2021",
        contexte: "Stage réalisé dans le cadre de ma scolarité en classe de 3e.",
        objectifs: [
            "Apprendre les techniques de diagnostic matériel",
            "Maîtriser le remplacement de composants",
            "Développer l'expertise en maintenance préventive",
            "Acquérir une expérience client en conseil technique"
        ],
        competences: [
            "Diagnostic matériel avancé",
            "Remplacement de composants (RAM, disques durs, cartes mères)",
            "Optimisation des performances système",
            "Conseil et relation client",
            "Gestion des achats de composants"
        ],
        travailGroupe: "Collaboration avec l'équipe technique pour les cas complexes",
        travailIndividuel: [
            "Diagnostic autonome des pannes",
            "Réparation complète des ordinateurs clients",
            "Suivi des interventions et documentation",
            "Conseil personnalisé aux clients"
        ],
        savoirsFaire: [
            "Utilisation d'outils de diagnostic matériel",
            "Démontage et remontage sécurisé",
            "Test et validation des réparations",
            "Rédaction de rapports d'intervention"
        ]
    },
    2: {
        title: "Gestion Auchan Drive",
        description: "Expérience professionnelle en logistique et management d'équipe",
        periode: "22/06/2022 - 27/03/2024",
        contexte: "Poste de préparateur de commande avec évolution vers des responsabilités de formation et d'encadrement",
        objectifs: [
            "Optimiser la préparation des commandes clients",
            "Former et encadrer les nouveaux employés",
            "Maintenir la qualité de service client",
            "Gérer efficacement les flux logistiques"
        ],
        competences: [
            "Management d'équipe",
            "Formation et pédagogie",
            "Gestion logistique",
            "Relation client",
            "Organisation et planification"
        ],
        travailGroupe: "Direction d'une équipe de préparateurs, coordination avec les différents services",
        travailIndividuel: [
            "Préparation rapide et précise des commandes",
            "Formation individuelle des nouveaux employés",
            "Résolution autonome des problèmes clients",
            "Reporting quotidien des activités"
        ],
        savoirsFaire: [
            "Techniques de formation professionnelle",
            "Gestion des conflits et médiation",
            "Optimisation des processus logistiques",
            "Communication efficace avec la clientèle"
        ]
    },
    3: {
        title: "Projets BUT Informatique",
        description: "Projets académiques et personnels en développement informatique",
        periode: "2024-2025",
        contexte: "Formation BUT Informatique à l'I.U.T.2 de Grenoble",
        objectifs: [
            "Maîtriser les fondamentaux de la programmation",
            "Développer des applications fonctionnelles",
            "Comprendre les enjeux de la gestion de projet",
            "Acquérir les bases des systèmes et réseaux"
        ],
        competences: [
            "Programmation (Python, Java, JavaScript)",
            "Développement web (HTML, CSS, PHP)",
            "Bases de données (SQL)",
            "Algorithmique et structures de données",
            "Gestion de projet agile"
        ],
        travailGroupe: "Projets collaboratifs en équipe de 3-4 étudiants avec répartition des tâches",
        travailIndividuel: [
            "Développement de modules spécifiques",
            "Tests et déboggage du code",
            "Documentation technique",
            "Veille technologique personnelle"
        ],
        savoirsFaire: [
            "Méthodologies de développement",
            "Utilisation de Git pour le versioning",
            "Tests unitaires et validation",
            "Présentation de projets techniques"
        ]
    }
};

// Données des mentions légales
const legalData = {
    mentions: {
        title: "Mentions Légales",
        content: `
            <h2>Mentions Légales</h2>
            <h3>Identification</h3>
            <p><strong>Nom :</strong> Iliesse Essediri</p>
            <p><strong>Adresse :</strong> 4 Rue Pierre Semard, 317B</p>
            <p><strong>Email :</strong> iliesseessediri@gmail.com</p>
            <p><strong>Téléphone :</strong> +33 6 16 83 18 66</p>
            
            <h3>Hébergement</h3>
            <p>Ce site est hébergé par un service d'hébergement web.</p>
            
            <h3>Propriété intellectuelle</h3>
            <p>L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
            
            <h3>Responsabilité</h3>
            <p>Les informations contenues sur ce site sont données à titre indicatif et sont susceptibles d'évoluer. Par ailleurs, les renseignements figurant sur ce site ne sont pas exhaustifs.</p>
        `
    },
    privacy: {
        title: "Politique de Confidentialité",
        content: `
            <h2>Politique de Confidentialité</h2>
            <h3>Collecte des données</h3>
            <p>Ce site ne collecte aucune donnée personnelle sans votre consentement explicite.</p>
            
            <h3>Utilisation des données</h3>
            <p>Les éventuelles données collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes.</p>
            
            <h3>Conservation des données</h3>
            <p>Aucune donnée personnelle n'est stockée de manière permanente sur ce site.</p>
            
            <h3>Vos droits</h3>
            <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
            
            <h3>Contact</h3>
            <p>Pour toute question concernant cette politique de confidentialité, vous pouvez me contacter à : iliesseessediri@gmail.com</p>
        `
    },
    cookies: {
        title: "Politique des Cookies",
        content: `
            <h2>Politique des Cookies</h2>
            <h3>Qu'est-ce qu'un cookie ?</h3>
            <p>Un cookie est un petit fichier texte stocké par votre navigateur lorsque vous visitez un site web.</p>
            
            <h3>Utilisation des cookies sur ce site</h3>
            <p>Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement du site (navigation, préférences d'affichage).</p>
            
            <h3>Cookies tiers</h3>
            <p>Ce site n'utilise pas de cookies de suivi ou publicitaires.</p>
            
            <h3>Gestion des cookies</h3>
            <p>Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter le fonctionnement du site.</p>
            
            <h3>Durée de conservation</h3>
            <p>Les cookies techniques sont supprimés à la fermeture de votre navigateur.</p>
        `
    }
};

// Fonction pour ouvrir la modal de projet
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectsData[projectId];
    
    if (!project || !modal || !modalBody) return;
    
    const createList = (items) => items.map(item => `<li>${item}</li>`).join('');
    
    modalBody.innerHTML = `
        <div class="project-detail">
            <h2>${project.title}</h2>
            <p><strong>Période :</strong> ${project.periode}</p>
            <p>${project.description}</p>
            
            <h3>Contexte</h3>
            <p>${project.contexte}</p>
            
            <h3>Objectifs</h3>
            <ul>${createList(project.objectifs)}</ul>
            
            <h3>Compétences développées</h3>
            <ul>${createList(project.competences)}</ul>
            
            <h3>Travail en groupe</h3>
            <p>${project.travailGroupe}</p>
            
            <h3>Travail individuel</h3>
            <ul>${createList(project.travailIndividuel)}</ul>
            
            <h3>Techniques et savoir-faire acquis</h3>
            <ul>${createList(project.savoirsFaire)}</ul>
        </div>
    `;
    
    showModal(modal);
}

// Fonction pour ouvrir la modal des mentions légales
function openLegalModal(type) {
    const modal = document.getElementById('legalModal');
    const modalBody = document.getElementById('legalModalBody');
    const legalInfo = legalData[type];
    
    if (!legalInfo || !modal || !modalBody) return;
    
    modalBody.innerHTML = legalInfo.content;
    showModal(modal);
}

// Fonction générique pour afficher une modal
function showModal(modal) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fonction générique pour fermer une modal
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Gestionnaire de fermeture des modals
const initModals = () => {
    const modals = [document.getElementById('projectModal'), document.getElementById('legalModal')];
    const closeBtns = document.querySelectorAll('.close');

    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            modals.forEach(modal => modal && closeModal(modal));
        });
    });

    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (modal && e.target === modal) {
                closeModal(modal);
            }
        });
    });
};

// Formulaire de contact
const initContactForm = () => {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        
        // Validation simple
        if (!data.name || !data.email || !data.message) {
            showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }
        
        // Simulation d'envoi
        showNotification('Message envoyé avec succès !', 'success');
        contactForm.reset();
    });
};

// Fonction pour afficher les notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        info: '#3b82f6'
    };
    
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        info: 'fa-info-circle'
    };
    
    notification.innerHTML = `
        <i class="fas ${icons[type]}"></i>
        <span>${message}</span>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type]};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Bouton scroll to top
const createScrollTopButton = () => {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
    
    document.body.appendChild(scrollTopBtn);
    
    const toggleVisibility = () => {
        scrollTopBtn.classList.toggle('visible', window.pageYOffset > 300);
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Navigation active
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!sections.length || !navLinks.length) return;
    
    const updateActive = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActive);
};

// Mode sombre optimisé
const initTheme = () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('i');
    const html = document.documentElement;

    if (!themeToggle || !themeIcon) return;

    // Récupérer le thème sauvegardé ou utiliser le thème système
    const getPreferredTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    // Appliquer le thème et corriger les éléments
    const setTheme = (theme) => {
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        
        // Correction des éléments problématiques
        updateThemeElements(theme);
    };

    // Fonction pour corriger les éléments avec le nouveau thème
    const updateThemeElements = (theme) => {
        const isDark = theme === 'dark';
        
        // Corriger tous les éléments avec classes FontAwesome
        const faElements = document.querySelectorAll('[class*="fa-"]');
        faElements.forEach(element => {
            if (isDark) {
                element.style.color = '#f8fafc';
            } else {
                element.style.color = '';
            }
        });

        // Corriger les icônes de navigation retour
        const backIcons = document.querySelectorAll('.fas.fa-arrow-left');
        backIcons.forEach(icon => {
            if (isDark) {
                icon.style.color = '#f8fafc !important';
            } else {
                icon.style.color = '';
            }
        });

        // Corriger les cartes techniques
        const techCards = document.querySelectorAll('div[style*="background: white"]');
        techCards.forEach(card => {
            if (isDark) {
                card.style.background = '#374151';
                card.style.color = '#f8fafc';
            } else {
                card.style.background = 'white';
                card.style.color = 'inherit';
            }
        });

        // Corriger les titres de section
        const sectionTitles = document.querySelectorAll('.section-title');
        sectionTitles.forEach(title => {
            if (isDark) {
                title.style.color = '#f8fafc';
            } else {
                title.style.color = '';
            }
        });
    };

    // Basculer le thème
    const toggleTheme = () => {
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    // Initialiser le thème
    setTheme(getPreferredTheme());

    // Événements
    themeToggle.addEventListener('click', toggleTheme);
    
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
};

// Smooth scroll pour les liens de navigation
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// Animation d'entrée pour les éléments hero
const animateHeroElements = () => {
    const heroElements = document.querySelectorAll('.hero-text > *');
    if (!heroElements.length) return;
    
    setTimeout(() => {
        heroElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
};

// Animation des barres de compétences avec pourcentages réduits
const animateSkillBars = () => {
    const skillsSection = document.querySelector('.skills');
    if (!skillsSection) return;
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(bar => {
                    let width = bar.dataset.width || bar.style.width;
                    
                    // Réduire les pourcentages
                    const percentage = parseInt(width);
                    let newPercentage;
                    
                    if (percentage >= 90) newPercentage = 75;
                    else if (percentage >= 85) newPercentage = 70;
                    else if (percentage >= 80) newPercentage = 65;
                    else if (percentage >= 75) newPercentage = 60;
                    else if (percentage >= 70) newPercentage = 55;
                    else if (percentage >= 65) newPercentage = 50;
                    else newPercentage = Math.max(percentage - 15, 30);
                    
                    width = newPercentage + '%';
                    
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 300);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    });
    
    skillsObserver.observe(skillsSection);
};

// Correction des éléments avec style inline
const fixInlineElements = () => {
    // Remplacer les cartes avec style inline par des classes
    const techElements = document.querySelectorAll('div[style*="background: white"]');
    techElements.forEach(element => {
        element.classList.add('tech-card');
        // Ne pas supprimer le style inline pour permettre la correction dynamique
    });
    
    // Observer les mutations pour corriger les nouveaux éléments
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType === 1) { // Element node
                    const elements = node.querySelectorAll ? node.querySelectorAll('div[style*="background: white"]') : [];
                    elements.forEach(el => el.classList.add('tech-card'));
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
};

// Injection des styles CSS dynamiques
const injectDynamicStyles = () => {
    const dynamicStyles = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        /* Corrections pour le mode sombre */
        [data-theme="dark"] .fas,
        [data-theme="dark"] .fa-arrow-left {
            color: #f8fafc !important;
        }
        
        [data-theme="dark"] .section-title {
            color: #f8fafc !important;
        }
        
        /* Alignement des boutons SAE */
        .sae-buttons-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
            margin: 2rem 0;
        }
        
        .sae-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.8rem 1.5rem;
            background: var(--primary-color);
            color: white;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 500;
            transition: var(--transition);
            min-width: 150px;
            text-align: center;
        }
        
        .sae-button:hover {
            background: var(--secondary-color);
            transform: translateY(-2px);
            color: white;
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = dynamicStyles;
    document.head.appendChild(styleSheet);
};

// Initialisation complète et optimisée
document.addEventListener('DOMContentLoaded', () => {
    // Injecter les styles en premier
    injectDynamicStyles();
    
    // Observer tous les éléments avec animation
    const fadeElements = document.querySelectorAll('.project-card, .info-card, .skills-category');
    fadeElements.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Initialiser toutes les fonctionnalités
    initTheme(); // Initialiser le thème en premier
    animateSkillBars();
    createScrollTopButton();
    updateActiveNavLink();
    initModals();
    initContactForm();
    initSmoothScroll();
    animateHeroElements();
    fixInlineElements();
    
    // Correction finale après un court délai
    setTimeout(() => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        if (currentTheme === 'dark') {
            // Force la correction en mode sombre
            document.querySelectorAll('.fas, .section-title').forEach(el => {
                el.style.color = '#f8fafc';
            });
        }
    }, 100);
});