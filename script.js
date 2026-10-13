// Translations
const translations = {
    es: {
        // Header
        'nav-inicio': 'Inicio',
        'nav-servicios': 'Servicios',
        'nav-galeria': 'Galería',
        'nav-contacto': 'Contacto',
        'header-cta': 'Contactar',

        // Hero
        'hero-badge': '¡Siente el Ritmo!',
        'hero-title': '💃 Clases de Baile con Nicolás Garzón 🕺',
        'hero-subtitle': 'Salsa, Bachata, Merengue y Rumbaterapia para todos los niveles y edades',
        'hero-cta-primary': 'Solicitar Información',
        'hero-cta-secondary': 'Ver Servicios',
        'stat-1-label': 'Estilos',
        'stat-2-label': 'Niveles',
        'stat-3-label': 'Comisión',

        // Video Section
        'video-tag': 'Video Promocional',
        'video-title': '🎬 Conoce Mis Clases',
        'video-subtitle': 'Mira cómo disfrutamos aprendiendo a bailar',

        // Services
        'services-tag': 'Nuestros Servicios',
        'services-title': '💃 Tipos de Clases 🕺',
        'services-subtitle': 'Grupales, personalizadas y eventos especiales para todos los niveles',
        'service-1-title': '🎓 Clases Principiantes',
        'service-1-desc': 'Clases introductorias perfectas para breaking the ice y crear momentos memorables entre huéspedes.',
        'service-1-price': 'Clase Única',
        'service-2-title': '👥 Clases Grupales',
        'service-2-desc': 'Grupos pequeños de 5-10 personas. Ambiente social, divertido y perfecto para crear comunidad.',
        'service-2-price': 'Clase Semanal',
        'service-featured': 'Más Popular',
        'service-3-title': '⭐ Clases Personalizadas',
        'service-3-desc': 'Clases individuales o para parejas. Atención personalizada según tus necesidades.',
        'service-3-price': 'Clase Semanal',
        'service-4-title': '🎉 Rumbaterapia',
        'service-4-desc': '¡Diviértete y muévete! Clases para liberar estrés y disfrutar.',
        'service-4-price': 'Clase Semanal',
        'service-5-title': '🎊 Eventos Especiales',
        'service-5-desc': 'Clases para bodas, aniversarios, fiestas y eventos especiales.',
        'service-5-price': 'Según evento',
        'service-6-title': '🏨 Comisión Hoteles',
        'service-6-desc': 'Trabajamos con hoteles y establecimientos con modelo de comisión.',
        'service-6-price': 'Comisión',
        'service-cta': 'Cotizar',

        // Gallery
        'gallery-tag': 'Nuestro Portafolio',
        'gallery-title': '📸 Galería de Experiencias',
        'gallery-subtitle': 'Descubre la magia de nuestras clases a través de imágenes',
        'gallery-item-1': 'Introducción',
        'gallery-item-2': 'Servicios',
        'gallery-item-3': 'Modalidades',
        'gallery-item-4': 'Contacto',
        'gallery-cta': 'Más Info',

        // Classes Gallery
        'classes-tag': 'Clases en Acción',
        'classes-title': '🎭 Momentos Memorables',
        'classes-subtitle': 'Fotos reales de nuestras clases en hoteles',
        'class-1-title': 'Clase de Baile',
        'class-1-desc': 'Aprendiendo los primeros pasos',
        'class-2-title': 'Clase Individual',
        'class-2-desc': 'Atención personalizada',
        'class-3-title': 'Clase Grupal',
        'class-3-desc': 'Grupos disfrutando del baile',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': '¡Diviértete y muévete!',

        // Dance Styles
        'styles-tag': 'Estilos de Baile',
        'styles-title': '🎶 Estilos que Ofrecemos',
        'styles-subtitle': 'Salsa, Bachata, Merengue y Rumbaterapia para todos los niveles',
        'style-1': 'Salsa',
        'style-1-desc': 'Ritmo latino apasionado',
        'style-2': 'Bachata',
        'style-2-desc': 'Romance y sensualidad',
        'style-3': 'Merengue',
        'style-3-desc': 'Energía caribeña',
        'style-4': 'Rumbaterapia',
        'style-4-desc': '¡Diviértete y muévete!',

        // Instructor
        'instructor-tag': 'Tu Instructor',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Licenciado en Educación física, recreación y deportes',
        'instructor-cta': '¡Agenda tu Clase!',
        'instructor-desc-1': 'Con años de experiencia enseñando salsa, bachata, merengue y rumbaterapia, me dedico a compartir mi pasión por el baile con personas de todas las edades y niveles.',
        'instructor-desc-2': 'Mi objetivo es que cada clase sea una experiencia divertida, donde puedas liberar el estrés, mejorar tu coordinación y, sobre todo, disfrutar al máximo.',

        // Why Choose Us
        'why-tag': '¿Por Qué Elegirnos?',
        'why-title': '⭐ Diferenciadores Únicos',
        'why-1-title': 'Formación Profesional',
        'why-1-desc': 'Licenciado en Educación física, recreación y deportes',
        'why-2-title': 'Para Todos los Niveles',
        'why-2-desc': 'Clases adaptadas desde principiantes hasta avanzados',
        'why-3-title': 'Personalización Total',
        'why-3-desc': 'Clases grupales y personalizadas según tus necesidades',
        'why-4-title': 'Flexibilidad Horaria',
        'why-4-desc': 'Horarios que se ajustan a tu disponibilidad',

        // CTA
        'cta-title': '🎵 ¿Listo para Aprender a Bailar?',
        'cta-subtitle': 'Contáctame hoy y comienza tu viaje en el mundo del baile',
        'cta-whatsapp': 'Contactar por WhatsApp',
        'cta-email': 'Enviar Mensaje',

        // Contact
        'contact-tag': 'Contacto',
        'contact-title': '📞 Contáctame',
        'contact-subtitle': 'Estoy listo para ayudarte a aprender a bailar',
        'contact-whatsapp': 'WhatsApp',
        'contact-email': 'Email',
        'contact-qr': 'Escanea el QR',
        'contact-qr-desc': 'Contáctame directamente',
        'contact-qr-cta': 'Iniciar Chat',
        'contact-email-cta': 'Enviar Email',
        'contact-form-title': 'Solicitar Información',
        'form-name': 'Tu Nombre',
        'form-phone': 'Teléfono / WhatsApp',
        'form-email': 'Email',
        'form-type': 'Tipo de Clase',
        'form-message': 'Cuéntame sobre tu interés en las clases...',
        'form-submit': 'Enviar por WhatsApp',

        // Footer
        'footer-about': 'Licenciado en Educación física, recreación y deportes',
        'footer-quick': 'Enlaces Rápidos',
        'footer-services': 'Servicios',
        'footer-hours': 'Horario de Atención',
        'footer-copy': '© 2024 Nicolás Garzón. Todos los derechos reservados.',

        // WhatsApp Float
        'whatsapp-tooltip': '¡Contáctanos!'
    },
    en: {
        // Header
        'nav-inicio': 'Home',
        'nav-servicios': 'Services',
        'nav-galeria': 'Gallery',
        'nav-contacto': 'Contact',
        'header-cta': 'Contact',

        // Hero
        'hero-badge': 'Feel the Rhythm!',
        'hero-title': '💃 Dance Classes with Nicolás Garzón 🕺',
        'hero-subtitle': 'Salsa, Bachata, Merengue and Rumbaterapia for all levels and ages',
        'hero-cta-primary': 'Request Information',
        'hero-cta-secondary': 'View Services',
        'stat-1-label': 'Styles',
        'stat-2-label': 'Levels',
        'stat-3-label': 'Commission',

        // Video Section
        'video-tag': 'Promotional Video',
        'video-title': '🎬 Discover My Classes',
        'video-subtitle': 'Watch how we enjoy learning to dance',

        // Services
        'services-tag': 'Our Services',
        'services-title': '💃 Types of Classes 🕺',
        'services-subtitle': 'Group, private and special events for all levels',
        'service-1-title': '🎓 Beginner Classes',
        'service-1-desc': 'Introductory classes perfect for breaking the ice and creating memorable moments.',
        'service-1-price': 'Single Class',
        'service-2-title': '👥 Group Classes',
        'service-2-desc': 'Small groups of 5-10 people. Social, fun atmosphere perfect for building community.',
        'service-2-price': 'Weekly Class',
        'service-featured': 'Most Popular',
        'service-3-title': '⭐ Private Classes',
        'service-3-desc': 'Individual or couples classes. Personalized attention according to your needs.',
        'service-3-price': 'Weekly Class',
        'service-4-title': '🎉 Rumbaterapia',
        'service-4-desc': 'Have fun and move! Classes to release stress and enjoy.',
        'service-4-price': 'Weekly Class',
        'service-5-title': '🎊 Special Events',
        'service-5-desc': 'Classes for weddings, anniversaries, parties and special events.',
        'service-5-price': 'Per Event',
        'service-6-title': '🏨 Hotel Commission',
        'service-6-desc': 'We work with hotels and establishments with commission model.',
        'service-6-price': 'Commission',
        'service-cta': 'Quote',

        // Gallery
        'gallery-tag': 'Our Portfolio',
        'gallery-title': '📸 Experience Gallery',
        'gallery-subtitle': 'Discover the magic of our classes through images',
        'gallery-item-1': 'Introduction',
        'gallery-item-2': 'Services',
        'gallery-item-3': 'Modalities',
        'gallery-item-4': 'Contact',
        'gallery-cta': 'More Info',

        // Classes Gallery
        'classes-tag': 'Classes in Action',
        'classes-title': '🎭 Memorable Moments',
        'classes-subtitle': 'Real photos of our classes',
        'class-1-title': 'Dance Class',
        'class-1-desc': 'Learning the first steps',
        'class-2-title': 'Private Class',
        'class-2-desc': 'Personalized attention',
        'class-3-title': 'Group Class',
        'class-3-desc': 'Groups enjoying dance',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': 'Have fun and move!',

        // Dance Styles
        'styles-tag': 'Dance Styles',
        'styles-title': '🎶 Styles We Offer',
        'styles-subtitle': 'Salsa, Bachata, Merengue and Rumbaterapia for all levels',
        'style-1': 'Salsa',
        'style-1-desc': 'Passionate Latin rhythm',
        'style-2': 'Bachata',
        'style-2-desc': 'Romance and sensuality',
        'style-3': 'Merengue',
        'style-3-desc': 'Caribbean energy',
        'style-4': 'Rumbaterapia',
        'style-4-desc': 'Have fun and move!',

        // Instructor
        'instructor-tag': 'Your Instructor',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Licensed in Physical Education, Recreation and Sports',
        'instructor-cta': 'Book Your Class!',
        'instructor-desc-1': 'With years of experience teaching salsa, bachata, merengue and rumbaterapia, I dedicate myself to sharing my passion for dance with people of all ages and levels.',
        'instructor-desc-2': 'My goal is that each class is a fun experience where you can release stress, improve your coordination and, above all, enjoy to the fullest.',

        // Why Choose Us
        'why-tag': 'Why Choose Us?',
        'why-title': '⭐ Unique Differentiators',
        'why-1-title': 'Professional Training',
        'why-1-desc': 'Licensed in Physical Education, Recreation and Sports',
        'why-2-title': 'For All Levels',
        'why-2-desc': 'Classes adapted from beginners to advanced',
        'why-3-title': 'Total Personalization',
        'why-3-desc': 'Group and private classes according to your needs',
        'why-4-title': 'Flexible Schedule',
        'why-4-desc': 'Schedules that fit your availability',

        // CTA
        'cta-title': '🎵 Ready to Learn to Dance?',
        'cta-subtitle': 'Contact me today and start your journey in the world of dance',
        'cta-whatsapp': 'Contact via WhatsApp',
        'cta-email': 'Send Message',

        // Contact
        'contact-tag': 'Contact',
        'contact-title': '📞 Contact Me',
        'contact-subtitle': 'I am ready to help you learn to dance',
        'contact-whatsapp': 'WhatsApp',
        'contact-email': 'Email',
        'contact-qr': 'Scan the QR',
        'contact-qr-desc': 'Contact me directly',
        'contact-qr-cta': 'Start Chat',
        'contact-email-cta': 'Send Email',
        'contact-form-title': 'Request Information',
        'form-name': 'Your Name',
        'form-phone': 'Phone / WhatsApp',
        'form-email': 'Email',
        'form-type': 'Class Type',
        'form-message': 'Tell me about your interest in classes...',
        'form-submit': 'Send via WhatsApp',

        // Footer
        'footer-about': 'Licensed in Physical Education, Recreation and Sports',
        'footer-quick': 'Quick Links',
        'footer-services': 'Services',
        'footer-hours': 'Opening Hours',
        'footer-copy': '© 2024 Nicolás Garzón. All rights reserved.',

        // WhatsApp Float
        'whatsapp-tooltip': 'Contact Us!'
    },
    fr: {
        // Header
        'nav-inicio': 'Accueil',
        'nav-servicios': 'Services',
        'nav-galeria': 'Galerie',
        'nav-contacto': 'Contact',
        'header-cta': 'Contact',

        // Hero
        'hero-badge': 'Ressentez le Rythme!',
        'hero-title': '💃 Cours de Danse avec Nicolás Garzón 🕺',
        'hero-subtitle': 'Salsa, Bachata, Merengue et Rumbaterapia pour tous les niveaux et âges',
        'hero-cta-primary': 'Demander des Informations',
        'hero-cta-secondary': 'Voir les Services',
        'stat-1-label': 'Styles',
        'stat-2-label': 'Niveaux',
        'stat-3-label': 'Commission',

        // Video Section
        'video-tag': 'Vidéo Promotionnelle',
        'video-title': '🎬 Découvrez Mes Cours',
        'video-subtitle': 'Regardez comment nous profitons en apprenant à danser',

        // Services
        'services-tag': 'Nos Services',
        'services-title': '💃 Types de Cours 🕺',
        'services-subtitle': 'Collectifs, privés et événements spéciaux pour tous les niveaux',
        'service-1-title': '🎓 Cours Débutants',
        'service-1-desc': 'Cours d\'introduction parfaits pour briser la glace et créer des moments mémorables.',
        'service-1-price': 'Cours Unique',
        'service-2-title': '👥 Cours Collectifs',
        'service-2-desc': 'Petits groupes de 5-10 personnes. Ambiance sociale, amusante et parfaite pour créer une communauté.',
        'service-2-price': 'Cours Hebdomadaire',
        'service-featured': 'Plus Populaire',
        'service-3-title': '⭐ Cours Personnalisés',
        'service-3-desc': 'Cours individuels ou pour couples. Attention personnalisée selon vos besoins.',
        'service-3-price': 'Cours Hebdomadaire',
        'service-4-title': '🎉 Rumbaterapia',
        'service-4-desc': 'Amusez-vous et bougez! Cours pour libérer le stress et profiter.',
        'service-4-price': 'Cours Hebdomadaire',
        'service-5-title': '🎊 Événements Spéciaux',
        'service-5-desc': 'Cours pour mariages, anniversaires, fêtes et événements spéciaux.',
        'service-5-price': 'Par Événement',
        'service-6-title': '🏨 Commission Hôtels',
        'service-6-desc': 'Nous travaillons avec les hôtels et établissements avec modèle de commission.',
        'service-6-price': 'Commission',
        'service-cta': 'Devis',

        // Gallery
        'gallery-tag': 'Notre Portfolio',
        'gallery-title': '📸 Galerie d\'Expériences',
        'gallery-subtitle': 'Découvrez la magie de nos cours à travers les images',
        'gallery-item-1': 'Introduction',
        'gallery-item-2': 'Services',
        'gallery-item-3': 'Modalités',
        'gallery-item-4': 'Contact',
        'gallery-cta': 'Plus d\'Infos',

        // Classes Gallery
        'classes-tag': 'Cours en Action',
        'classes-title': '🎭 Moments Mémorables',
        'classes-subtitle': 'Photos réelles de nos cours',
        'class-1-title': 'Cours de Danse',
        'class-1-desc': 'Apprendre les premiers pas',
        'class-2-title': 'Cours Privé',
        'class-2-desc': 'Attention personnalisée',
        'class-3-title': 'Cours Collectif',
        'class-3-desc': 'Groupes profitant de la danse',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': 'Amusez-vous et bougez!',

        // Dance Styles
        'styles-tag': 'Styles de Danse',
        'styles-title': '🎶 Styles que Nous Offrons',
        'styles-subtitle': 'Salsa, Bachata, Merengue et Rumbaterapia pour tous les niveaux',
        'style-1': 'Salsa',
        'style-1-desc': 'Rythme latin passionné',
        'style-2': 'Bachata',
        'style-2-desc': 'Romance et sensualité',
        'style-3': 'Merengue',
        'style-3-desc': 'Énergie caribéenne',
        'style-4': 'Rumbaterapia',
        'style-4-desc': 'Amusez-vous et bougez!',

        // Instructor
        'instructor-tag': 'Votre Instructeur',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Licencié en Éducation Physique, Récréation et Sports',
        'instructor-cta': 'Réservez Votre Cours!',
        'instructor-desc-1': 'Avec des années d\'expérience enseignant la salsa, la bachata, le merengue et la rumbaterapia, je me consacre à partager ma passion pour la danse avec des personnes de tous âges et niveaux.',
        'instructor-desc-2': 'Mon objectif est que chaque cours soit une expérience amusante où vous pouvez libérer le stress, améliorer votre coordination et, surtout, profiter au maximum.',

        // Why Choose Us
        'why-tag': 'Pourquoi Nous Choisir?',
        'why-title': '⭐ Différenciateurs Uniques',
        'why-1-title': 'Formation Professionnelle',
        'why-1-desc': 'Licencié en Éducation Physique, Récréation et Sports',
        'why-2-title': 'Pour Tous les Niveaux',
        'why-2-desc': 'Cours adaptés des débutants aux avancés',
        'why-3-title': 'Personnalisation Totale',
        'why-3-desc': 'Cours collectifs et privés selon vos besoins',
        'why-4-title': 'Horaire Flexible',
        'why-4-desc': 'Horaires qui s\'adaptent à votre disponibilité',

        // CTA
        'cta-title': '🎵 Prêt à Apprendre à Danser?',
        'cta-subtitle': 'Contactez-moi aujourd\'hui et commencez votre voyage dans le monde de la danse',
        'cta-whatsapp': 'Contact via WhatsApp',
        'cta-email': 'Envoyer Message',

        // Contact
        'contact-tag': 'Contact',
        'contact-title': '📞 Contactez-Moi',
        'contact-subtitle': 'Je suis prêt à vous aider à apprendre à danser',
        'contact-whatsapp': 'WhatsApp',
        'contact-email': 'Email',
        'contact-qr': 'Scannez le QR',
        'contact-qr-desc': 'Contactez-moi directement',
        'contact-qr-cta': 'Démarrer Chat',
        'contact-email-cta': 'Envoyer Email',
        'contact-form-title': 'Demander des Informations',
        'form-name': 'Votre Nom',
        'form-phone': 'Téléphone / WhatsApp',
        'form-email': 'Email',
        'form-type': 'Type de Cours',
        'form-message': 'Parlez-moi de votre intérêt pour les cours...',
        'form-submit': 'Envoyer via WhatsApp',

        // Footer
        'footer-about': 'Licencié en Éducation Physique, Récréation et Sports',
        'footer-quick': 'Liens Rapides',
        'footer-services': 'Services',
        'footer-hours': 'Heures d\'Ouverture',
        'footer-copy': '© 2024 Nicolás Garzón. Tous droits réservés.',

        // WhatsApp Float
        'whatsapp-tooltip': 'Contactez-Nous!'
    },
    de: {
        // Header
        'nav-inicio': 'Startseite',
        'nav-servicios': 'Dienstleistungen',
        'nav-galeria': 'Galerie',
        'nav-contacto': 'Kontakt',
        'header-cta': 'Kontakt',

        // Hero
        'hero-badge': 'Fühle den Rhythmus!',
        'hero-title': '💃 Tanzkurse mit Nicolás Garzón 🕺',
        'hero-subtitle': 'Salsa, Bachata, Merengue und Rumbaterapia für alle Level und Altersgruppen',
        'hero-cta-primary': 'Informationen Anfordern',
        'hero-cta-secondary': 'Dienstleistungen Ansehen',
        'stat-1-label': 'Stile',
        'stat-2-label': 'Level',
        'stat-3-label': 'Kommission',

        // Video Section
        'video-tag': 'Werbevideo',
        'video-title': '🎬 Entdecken Sie Meine Kurse',
        'video-subtitle': 'Sehen Sie, wie wir beim Tanzenlernen Spaß haben',

        // Services
        'services-tag': 'Unsere Dienstleistungen',
        'services-title': '💃 Arten von Kursen 🕺',
        'services-subtitle': 'Gruppen-, Privat- und Sonderveranstaltungen für alle Level',
        'service-1-title': '🎓 Anfängerkurse',
        'service-1-desc': 'Einführungskurse perfekt, um das Eis zu brechen und unvergessliche Momente zu schaffen.',
        'service-1-price': 'Einzelkurs',
        'service-2-title': '👥 Gruppenkurse',
        'service-2-desc': 'Kleine Gruppen von 5-10 Personen. Soziale, lustige Atmosphäre perfekt zum Aufbau einer Gemeinschaft.',
        'service-2-price': 'Wöchentlicher Kurs',
        'service-featured': 'Am Beliebtesten',
        'service-3-title': '⭐ Private Kurse',
        'service-3-desc': 'Einzel- oder Paarkurse. Personalisierte Aufmerksamkeit nach Ihren Bedürfnissen.',
        'service-3-price': 'Wöchentlicher Kurs',
        'service-4-title': '🎉 Rumbaterapia',
        'service-4-desc': 'Haben Sie Spaß und bewegen Sie sich! Kurse zum Stressabbau und Genuss.',
        'service-4-price': 'Wöchentlicher Kurs',
        'service-5-title': '🎊 Sonderveranstaltungen',
        'service-5-desc': 'Kurse für Hochzeiten, Jubiläen, Partys und Sonderveranstaltungen.',
        'service-5-price': 'Pro Veranstaltung',
        'service-6-title': '🏨 Hotelkommission',
        'service-6-desc': 'Wir arbeiten mit Hotels und Einrichtungen mit Kommissionsmodell.',
        'service-6-price': 'Kommission',
        'service-cta': 'Angebot',

        // Gallery
        'gallery-tag': 'Unser Portfolio',
        'gallery-title': '📸 Erlebnisgalerie',
        'gallery-subtitle': 'Entdecken Sie die Magie unserer Kurse durch Bilder',
        'gallery-item-1': 'Einführung',
        'gallery-item-2': 'Dienstleistungen',
        'gallery-item-3': 'Modalitäten',
        'gallery-item-4': 'Kontakt',
        'gallery-cta': 'Mehr Infos',

        // Classes Gallery
        'classes-tag': 'Kurse in Aktion',
        'classes-title': '🎭 Unvergessliche Momente',
        'classes-subtitle': 'Echte Fotos unserer Kurse',
        'class-1-title': 'Tanzkurs',
        'class-1-desc': 'Die ersten Schritte lernen',
        'class-2-title': 'Privatkurs',
        'class-2-desc': 'Personalisierte Aufmerksamkeit',
        'class-3-title': 'Gruppenkurs',
        'class-3-desc': 'Gruppen genießen das Tanzen',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': 'Haben Sie Spaß und bewegen Sie sich!',

        // Dance Styles
        'styles-tag': 'Tanzstile',
        'styles-title': '🎶 Stile, die Wir Anbieten',
        'styles-subtitle': 'Salsa, Bachata, Merengue und Rumbaterapia für alle Level',
        'style-1': 'Salsa',
        'style-1-desc': 'Leidenschaftlicher lateinamerikanischer Rhythmus',
        'style-2': 'Bachata',
        'style-2-desc': 'Romantik und Sinnlichkeit',
        'style-3': 'Merengue',
        'style-3-desc': 'Karibische Energie',
        'style-4': 'Rumbaterapia',
        'style-4-desc': 'Haben Sie Spaß und bewegen Sie sich!',

        // Instructor
        'instructor-tag': 'Ihr Lehrer',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Lizenzierter in Sporterziehung, Erholung und Sport',
        'instructor-cta': 'Buchen Sie Ihren Kurs!',
        'instructor-desc-1': 'Mit Jahren Erfahrung im Unterrichten von Salsa, Bachata, Merengue und Rumbaterapia widme ich mich dem Teilen meiner Leidenschaft für Tanz mit Menschen aller Altersgruppen und Level.',
        'instructor-desc-2': 'Mein Ziel ist es, dass jeder Kurs eine lustige Erfahrung ist, in der Sie Stress abbauen, Ihre Koordination verbessern und vor allem最大限度地 genießen können.',

        // Why Choose Us
        'why-tag': 'Warum Uns Wählen?',
        'why-title': '⭐ Einzigartige Unterschiede',
        'why-1-title': 'Professionelle Ausbildung',
        'why-1-desc': 'Lizenzierter in Sporterziehung, Erholung und Sport',
        'why-2-title': 'Für Alle Level',
        'why-2-desc': 'Kurse angepasst von Anfängern bis Fortgeschrittene',
        'why-3-title': 'Totale Personalisierung',
        'why-3-desc': 'Gruppen- und Privatkurse nach Ihren Bedürfnissen',
        'why-4-title': 'Flexibler Zeitplan',
        'why-4-desc': 'Zeitpläne, die sich Ihrer Verfügbarkeit anpassen',

        // CTA
        'cta-title': '🎵 Bereit, Tanzen zu Lernen?',
        'cta-subtitle': 'Kontaktieren Sie mich heute und beginnen Sie Ihre Reise in die Welt des Tanzes',
        'cta-whatsapp': 'Kontakt über WhatsApp',
        'cta-email': 'Nachricht Senden',

        // Contact
        'contact-tag': 'Kontakt',
        'contact-title': '📞 Kontaktieren Sie Mich',
        'contact-subtitle': 'Ich bin bereit, Ihnen beim Tanzenlernen zu helfen',
        'contact-whatsapp': 'WhatsApp',
        'contact-email': 'Email',
        'contact-qr': 'QR Scannen',
        'contact-qr-desc': 'Kontaktieren Sie mich direkt',
        'contact-qr-cta': 'Chat Starten',
        'contact-email-cta': 'Email Senden',
        'contact-form-title': 'Informationen Anfordern',
        'form-name': 'Ihr Name',
        'form-phone': 'Telefon / WhatsApp',
        'form-email': 'Email',
        'form-type': 'Kurstyp',
        'form-message': 'Erzählen Sie mir von Ihrem Interesse an Kursen...',
        'form-submit': 'Über WhatsApp Senden',

        // Footer
        'footer-about': 'Lizenzierter in Sporterziehung, Erholung und Sport',
        'footer-quick': 'Schnelle Links',
        'footer-services': 'Dienstleistungen',
        'footer-hours': 'Öffnungszeiten',
        'footer-copy': '© 2024 Nicolás Garzón. Alle Rechte vorbehalten.',

        // WhatsApp Float
        'whatsapp-tooltip': 'Kontaktieren Sie Uns!'
    }
};

// Language selector
let currentLanguage = 'es';

function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update lang attribute on html
    document.documentElement.lang = lang;

    // Save preference to localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language from localStorage or browser
function initializeLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        changeLanguage(savedLang);
    } else {
        // Detect browser language
        const browserLang = navigator.language.substring(0, 2);
        if (translations[browserLang]) {
            changeLanguage(browserLang);
        }
    }
}

// Music Player
const musicToggle = document.getElementById('musicToggle');
const backgroundMusic = document.getElementById('backgroundMusic');
let isPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.play();
        musicToggle.classList.add('playing');
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Set initial volume
backgroundMusic.volume = 0.3;

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Form submission - Send via WhatsApp
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const contactName = contactForm.querySelector('input[placeholder="Tu Nombre"]').value;
    const phone = contactForm.querySelector('input[placeholder="Teléfono / WhatsApp"]').value;
    const email = contactForm.querySelector('input[placeholder="Email"]').value;
    const serviceType = contactForm.querySelector('select').value;
    const message = contactForm.querySelector('textarea').value;

    // Create WhatsApp message
    const whatsappMessage = `¡Hola! Me gustaría solicitar información sobre clases de baile.

👤 *Nombre:* ${contactName}
📱 *Teléfono:* ${phone}
📧 *Email:* ${email}
🎭 *Tipo de Clase:* ${serviceType}
💬 *Mensaje:* ${message}

¡Espero tu respuesta!`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // IMPORTANT: Replace with your actual WhatsApp number (including country code, no + symbol)
    const whatsappNumber = '573003256451'; // Example: 521234567890
    
    // Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    alert('¡Gracias! Se abrirá WhatsApp para enviar su solicitud.');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all service cards, gallery items, and other elements
document.querySelectorAll('.service-card, .gallery-item, .style-card, .why-item, .contact-card').forEach(el => {
    el.classList.add('animate-on-scroll');
    observer.observe(el);
});

// Counter animation for stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
};

// Observe stats section
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('K')) {
                    const num = parseInt(text);
                    animateCounter(stat, num * 1000);
                    setTimeout(() => {
                        stat.textContent = text;
                    }, 2000);
                } else if (text.includes('%')) {
                    const num = parseInt(text);
                    animateCounter(stat, num);
                    setTimeout(() => {
                        stat.textContent = text;
                    }, 2000);
                } else if (text.includes('+')) {
                    const num = parseInt(text);
                    animateCounter(stat, num);
                    setTimeout(() => {
                        stat.textContent = text;
                    }, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add hover effect to service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Gallery image lazy loading optimization
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Prevent music autoplay issues
document.addEventListener('click', () => {
    if (!isPlaying && backgroundMusic.paused) {
        // Try to play music on first user interaction
        // musicToggle.click();
    }
}, { once: true });

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
});

console.log('Portfolio loaded successfully! 🎭💃');