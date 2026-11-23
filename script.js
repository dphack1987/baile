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
        'hero-subtitle': 'Salsa, Bachata, Merengue y Salsa Choke para todos los niveles y edades',
        'hero-cta-primary': 'Solicitar Información',
        'hero-cta-secondary': 'Ver Servicios',
        'stat-1-label': 'Estilos',
        'stat-2-label': 'Niveles',
        'stat-3-label': 'Comisión',

        // Video Section
        'video-tag': 'Video Promocional',
        'video-title': '🎬 Conoce Mis Clases',
        'video-subtitle': 'Mira cómo disfrutamos aprendiendo a bailar',

        // Flexibilidad Section
        'flexibilidad-tag': 'Flexibilidad',
        'flexibilidad-title': '🕐 Tu Primera Clase es Cuando Tú Quieras',
        'flexibilidad-subtitle': 'Adapta las clases a tu horario, no al revés',
        'flexibilidad-heading': 'Horarios Personalizados',
        'flexibilidad-desc-1': 'Entiendo que cada persona tiene compromisos diferentes. Por eso, ofrezco horarios flexibles que se adaptan a tu disponibilidad.',
        'flexibilidad-desc-2': 'Ya sea temprano en la mañana, tarde en la noche, o fines de semana, podemos encontrar el momento perfecto para tu primera clase.',
        'flexibilidad-cta': 'Agendar Mi Primera Clase',

        // Virtual Section
        'virtual-tag': 'Clases Virtuales',
        'virtual-title': '💻 Clases Online desde Donde Estés',
        'virtual-subtitle': 'Aprende a bailar desde la comodidad de tu hogar',
        'virtual-heading': 'Baile sin Límites',
        'virtual-desc-1': 'Mis clases virtuales te permiten aprender salsa, bachata, merengue y salsa choke desde cualquier lugar. Solo necesitas un dispositivo con internet y ganas de bailar.',
        'virtual-desc-2': 'A través de videollamada, te guiaré paso a paso con instrucciones claras y personalizadas. ¡Es como estar en clase presencial!',
        'virtual-feature-1': 'Instrucción personalizada en vivo',
        'virtual-feature-2': 'Material de apoyo incluido',
        'virtual-feature-3': 'Grabación de la clase disponible',
        'virtual-cta': 'Probar Clase Virtual',

        // Services
        'services-tag': 'Nuestros Servicios',
        'services-title': '💃 Tipos de Clases 🕺',
        'services-subtitle': 'Personalizadas, principiantes y eventos especiales para todos los niveles',
        'service-1-title': '🎓 Clases Principiantes',
        'service-1-desc': 'Aprendizaje desde cero. Clases introductorias perfectas para comenzar tu viaje en el baile.',
        'service-1-price': 'Clase Única',
        'service-1b-title': '👥 Clases Grupales Principiantes',
        'service-1b-desc': 'Clases abiertas al público para principiantes. Aprende en grupo y diviértete.',
        'service-1b-price': 'Clase Semanal',
        'service-2-title': '⭐ Clases Personalizadas',
        'service-2-desc': 'Clases individuales o para parejas. Atención personalizada según tus necesidades.',
        'service-2-price': 'Por Hora',
        'service-featured': 'Más Popular',
        'service-3-title': '🎉 Rumbaterapia',
        'service-3-desc': '¡Diviértete y muévete! Clases para liberar estrés y disfrutar.',
        'service-3-price': 'Por Hora',
        'service-4-title': '🎊 Eventos Especiales',
        'service-4-desc': 'Clases para bodas, aniversarios, fiestas y eventos especiales.',
        'service-4-price': 'Según evento',
        'service-5-title': '🏨 Comisión Hoteles',
        'service-5-desc': 'Trabajamos con hoteles y establecimientos con modelo de comisión.',
        'service-5-price': 'Comisión',
        'service-cta': 'Cotizar',
        'discount-note': '¡20% de descuento desde tu segunda clase!',
        'discount-weekly': '60.000 COP si es semanal',

        // Gallery
        'gallery-tag': 'Nuestro Portafolio',
        'gallery-title': '📸 Galería de Experiencias',
        'gallery-subtitle': 'Descubre la magia de nuestras clases a través de imágenes y videos',
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
        'class-3-title': 'Clase Personalizada',
        'class-3-desc': 'Atención personalizada',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': '¡Diviértete y muévete!',

        // Dance Styles
        'styles-tag': 'Estilos de Baile',
        'styles-title': '🎶 Estilos que Ofrecemos',
        'styles-subtitle': 'Salsa, Bachata, Merengue y Salsa Choke para todos los niveles',
        'style-1': 'Salsa',
        'style-1-desc': 'Energía y movimiento',
        'style-2': 'Bachata',
        'style-2-desc': 'Sensualidad y conexión',
        'style-3': 'Merengue',
        'style-3-desc': 'Diversión',
        'style-4': 'Salsa Choke',
        'style-4-desc': 'Alegría y sabor',

        // Instructor
        'instructor-tag': 'Tu Instructor',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Licenciado en Educación física, recreación y deportes',
        'instructor-cta': '¡Agenda tu Clase!',
        'instructor-desc-1': 'Con años de experiencia enseñando salsa, bachata, merengue y salsa choke, me dedico a compartir mi pasión por el baile con personas de todas las edades y niveles.',
        'instructor-desc-2': 'Mi objetivo es que cada clase sea una experiencia divertida, donde puedas liberar el estrés, mejorar tu coordinación y, sobre todo, disfrutar al máximo.',

        // Why Choose Us
        'why-tag': '¿Por Qué Elegirnos?',
        'why-title': '⭐ Diferenciadores Únicos',
        'why-1-title': 'Formación Profesional',
        'why-1-desc': 'Licenciado en Educación física, recreación y deportes',
        'why-2-title': 'Para Todos los Niveles',
        'why-2-desc': 'Clases adaptadas desde principiantes hasta avanzados',
        'why-3-title': 'Personalización Total',
        'why-3-desc': 'Clases personalizadas según tus necesidades',
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
        'hero-subtitle': 'Salsa, Bachata, Merengue and Salsa Choke for all levels and ages',
        'hero-cta-primary': 'Request Information',
        'hero-cta-secondary': 'View Services',
        'stat-1-label': 'Styles',
        'stat-2-label': 'Levels',
        'stat-3-label': 'Commission',

        // Video Section
        'video-tag': 'Promotional Video',
        'video-title': '🎬 Discover My Classes',
        'video-subtitle': 'Watch how we enjoy learning to dance',

        // Flexibilidad Section
        'flexibilidad-tag': 'Flexibility',
        'flexibilidad-title': '🕐 Your First Class is When You Want',
        'flexibilidad-subtitle': 'Adapt classes to your schedule, not the other way around',
        'flexibilidad-heading': 'Personalized Schedules',
        'flexibilidad-desc-1': 'I understand that each person has different commitments. That\'s why I offer flexible schedules that adapt to your availability.',
        'flexibilidad-desc-2': 'Whether early in the morning, late at night, or on weekends, we can find the perfect time for your first class.',
        'flexibilidad-cta': 'Schedule My First Class',

        // Virtual Section
        'virtual-tag': 'Virtual Classes',
        'virtual-title': '💻 Online Classes from Anywhere',
        'virtual-subtitle': 'Learn to dance from the comfort of your home',
        'virtual-heading': 'Dance Without Limits',
        'virtual-desc-1': 'My virtual classes allow you to learn salsa, bachata, merengue and salsa choke from anywhere. You just need a device with internet and the desire to dance.',
        'virtual-desc-2': 'Through video call, I will guide you step by step with clear and personalized instructions. It\'s like being in an in-person class!',
        'virtual-feature-1': 'Live personalized instruction',
        'virtual-feature-2': 'Support material included',
        'virtual-feature-3': 'Class recording available',
        'virtual-cta': 'Try Virtual Class',

        // Services
        'services-tag': 'Our Services',
        'services-title': '💃 Types of Classes 🕺',
        'services-subtitle': 'Private, beginner and special events for all levels',
        'service-1-title': '🎓 Beginner Classes',
        'service-1-desc': 'Learning from scratch. Introductory classes perfect to start your dance journey.',
        'service-1-price': 'Single Class',
        'service-1b-title': '👥 Beginner Group Classes',
        'service-1b-desc': 'Public classes for beginners. Learn in a group and have fun.',
        'service-1b-price': 'Weekly Class',
        'service-2-title': '⭐ Private Classes',
        'service-2-desc': 'Individual or couples classes. Personalized attention according to your needs.',
        'service-2-price': 'Per Hour',
        'service-featured': 'Most Popular',
        'service-3-title': '🎉 Rumbaterapia',
        'service-3-desc': 'Have fun and move! Classes to release stress and enjoy.',
        'service-3-price': 'Per Hour',
        'service-4-title': '🎊 Special Events',
        'service-4-desc': 'Classes for weddings, anniversaries, parties and special events.',
        'service-4-price': 'Per Event',
        'service-5-title': '🏨 Hotel Commission',
        'service-5-desc': 'We work with hotels and establishments with commission model.',
        'service-5-price': 'Commission',
        'service-cta': 'Quote',
        'discount-note': '20% discount from your second class!',
        'discount-weekly': '60.000 COP if weekly',

        // Gallery
        'gallery-tag': 'Our Portfolio',
        'gallery-title': '📸 Experience Gallery',
        'gallery-subtitle': 'Discover the magic of our classes through images and videos',
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
        'class-3-title': 'Private Class',
        'class-3-desc': 'Personalized attention',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': 'Have fun and move!',

        // Dance Styles
        'styles-tag': 'Dance Styles',
        'styles-title': '🎶 Styles We Offer',
        'styles-subtitle': 'Salsa, Bachata, Merengue and Salsa Choke for all levels',
        'style-1': 'Salsa',
        'style-1-desc': 'Energy and movement',
        'style-2': 'Bachata',
        'style-2-desc': 'Sensuality and connection',
        'style-3': 'Merengue',
        'style-3-desc': 'Fun',
        'style-4': 'Salsa Choke',
        'style-4-desc': 'Joy and flavor',

        // Instructor
        'instructor-tag': 'Your Instructor',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Licensed in Physical Education, Recreation and Sports',
        'instructor-cta': 'Book Your Class!',
        'instructor-desc-1': 'With years of experience teaching salsa, bachata, merengue and salsa choke, I dedicate myself to sharing my passion for dance with people of all ages and levels.',
        'instructor-desc-2': 'My goal is that each class is a fun experience where you can release stress, improve your coordination and, above all, enjoy to the fullest.',

        // Why Choose Us
        'why-tag': 'Why Choose Us?',
        'why-title': '⭐ Unique Differentiators',
        'why-1-title': 'Professional Training',
        'why-1-desc': 'Licensed in Physical Education, Recreation and Sports',
        'why-2-title': 'For All Levels',
        'why-2-desc': 'Classes adapted from beginners to advanced',
        'why-3-title': 'Total Personalization',
        'why-3-desc': 'Private classes according to your needs',
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
        'hero-subtitle': 'Salsa, Bachata, Merengue et Salsa Choke pour tous les niveaux et âges',
        'hero-cta-primary': 'Demander des Informations',
        'hero-cta-secondary': 'Voir les Services',
        'stat-1-label': 'Styles',
        'stat-2-label': 'Niveaux',
        'stat-3-label': 'Commission',

        // Video Section
        'video-tag': 'Vidéo Promotionnelle',
        'video-title': '🎬 Découvrez Mes Cours',
        'video-subtitle': 'Regardez comment nous profitons en apprenant à danser',

        // Flexibilidad Section
        'flexibilidad-tag': 'Flexibilité',
        'flexibilidad-title': '🕐 Votre Première Classe est Quand Vous Voulez',
        'flexibilidad-subtitle': 'Adaptez les classes à votre horaire, pas l\'inverse',
        'flexibilidad-heading': 'Horaires Personnalisés',
        'flexibilidad-desc-1': 'Je comprends que chaque personne a des engagements différents. C\'est pourquoi j\'offre des horaires flexibles qui s\'adaptent à votre disponibilité.',
        'flexibilidad-desc-2': 'Que ce soit tôt le matin, tard le soir, ou le week-end, nous pouvons trouver le moment parfait pour votre première classe.',
        'flexibilidad-cta': 'Planifier Ma Première Classe',

        // Virtual Section
        'virtual-tag': 'Classes Virtuelles',
        'virtual-title': '💻 Classes en Ligne de N\'importe Où',
        'virtual-subtitle': 'Apprenez à danser depuis le confort de votre domicile',
        'virtual-heading': 'Danse Sans Limites',
        'virtual-desc-1': 'Mes classes virtuelles vous permettent d\'apprendre la salsa, la bachata, le merengue et la salsa choke de n\'importe où. Vous avez juste besoin d\'un appareil avec internet et l\'envie de danser.',
        'virtual-desc-2': 'Par appel vidéo, je vous guiderai pas à pas avec des instructions claires et personnalisées. C\'est comme être en classe en présentiel!',
        'virtual-feature-1': 'Instruction personnalisée en direct',
        'virtual-feature-2': 'Matériel de support inclus',
        'virtual-feature-3': 'Enregistrement de la classe disponible',
        'virtual-cta': 'Essayer Classe Virtuelle',

        // Services
        'services-tag': 'Nos Services',
        'services-title': '💃 Types de Cours 🕺',
        'services-subtitle': 'Privés, débutants et événements spéciaux pour tous les niveaux',
        'service-1-title': '🎓 Cours Débutants',
        'service-1-desc': 'Apprentissage à partir de zéro. Cours d\'introduction parfaits pour commencer votre voyage dans la danse.',
        'service-1-price': 'Cours Unique',
        'service-1b-title': '👥 Cours Collectifs Débutants',
        'service-1b-desc': 'Cours publics pour débutants. Apprenez en groupe et amusez-vous.',
        'service-1b-price': 'Cours Hebdomadaire',
        'service-2-title': '⭐ Cours Personnalisés',
        'service-2-desc': 'Cours individuels ou pour couples. Attention personnalisée selon vos besoins.',
        'service-2-price': 'Par Heure',
        'service-featured': 'Plus Populaire',
        'service-3-title': '🎉 Rumbaterapia',
        'service-3-desc': 'Amusez-vous et bougez! Cours pour libérer le stress et profiter.',
        'service-3-price': 'Par Heure',
        'service-4-title': '🎊 Événements Spéciaux',
        'service-4-desc': 'Cours pour mariages, anniversaires, fêtes et événements spéciaux.',
        'service-4-price': 'Par Événement',
        'service-5-title': '🏨 Commission Hôtels',
        'service-5-desc': 'Nous travaillons avec les hôtels et établissements avec modèle de commission.',
        'service-5-price': 'Commission',
        'service-cta': 'Devis',
        'discount-note': '20% de remise à partir de votre deuxième cours!',
        'discount-weekly': '60.000 COP si hebdomadaire',
        'price-per-hour': 'Par Heure',
        'price-weekly': 'Hebdomadaire',

        // Gallery
        'gallery-tag': 'Notre Portfolio',
        'gallery-title': '📸 Galerie d\'Expériences',
        'gallery-subtitle': 'Découvrez la magie de nos cours à travers les images et vidéos',
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
        'class-3-title': 'Cours Privé',
        'class-3-desc': 'Attention personnalisée',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': 'Amusez-vous et bougez!',

        // Dance Styles
        'styles-tag': 'Styles de Danse',
        'styles-title': '🎶 Styles que Nous Offrons',
        'styles-subtitle': 'Salsa, Bachata, Merengue et Salsa Choke pour tous les niveaux',
        'style-1': 'Salsa',
        'style-1-desc': 'Énergie et mouvement',
        'style-2': 'Bachata',
        'style-2-desc': 'Sensualité et connexion',
        'style-3': 'Merengue',
        'style-3-desc': 'Divertissement',
        'style-4': 'Salsa Choke',
        'style-4-desc': 'Joie et saveur',

        // Instructor
        'instructor-tag': 'Votre Instructeur',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Licencié en Éducation Physique, Récréation et Sports',
        'instructor-cta': 'Réservez Votre Cours!',
        'instructor-desc-1': 'Avec des années d\'expérience enseignant la salsa, la bachata, le merengue et la salsa choke, je me consacre à partager ma passion pour la danse avec des personnes de tous âges et niveaux.',
        'instructor-desc-2': 'Mon objectif est que chaque cours soit une expérience amusante où vous pouvez libérer le stress, améliorer votre coordination et, surtout, profiter au maximum.',

        // Why Choose Us
        'why-tag': 'Pourquoi Nous Choisir?',
        'why-title': '⭐ Différenciateurs Uniques',
        'why-1-title': 'Formation Professionnelle',
        'why-1-desc': 'Licencié en Éducation Physique, Récréation et Sports',
        'why-2-title': 'Pour Tous les Niveaux',
        'why-2-desc': 'Cours adaptés des débutants aux avancés',
        'why-3-title': 'Personnalisation Totale',
        'why-3-desc': 'Cours privés selon vos besoins',
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
        'hero-subtitle': 'Salsa, Bachata, Merengue und Salsa Choke für alle Level und Altersgruppen',
        'hero-cta-primary': 'Informationen Anfordern',
        'hero-cta-secondary': 'Dienstleistungen Ansehen',
        'stat-1-label': 'Stile',
        'stat-2-label': 'Level',
        'stat-3-label': 'Kommission',

        // Video Section
        'video-tag': 'Werbevideo',
        'video-title': '🎬 Entdecken Sie Meine Kurse',
        'video-subtitle': 'Sehen Sie, wie wir beim Tanzenlernen Spaß haben',

        // Flexibilidad Section
        'flexibilidad-tag': 'Flexibilität',
        'flexibilidad-title': '🕐 Ihr Erster Kurs ist Wann Sie Wollen',
        'flexibilidad-subtitle': 'Passen Sie die Kurse Ihrem Zeitplan an, nicht umgekehrt',
        'flexibilidad-heading': 'Personalisierte Zeitpläne',
        'flexibilidad-desc-1': 'Ich verstehe, dass jede Person unterschiedliche Verpflichtungen hat. Deshalb biete ich flexible Zeitpläne an, die sich an Ihre Verfügbarkeit anpassen.',
        'flexibilidad-desc-2': 'Egal ob früh am Morgen, spät am Abend oder am Wochenende, wir können den perfekten Zeitpunkt für Ihren ersten Kurs finden.',
        'flexibilidad-cta': 'Meinen Ersten Kurs Planen',

        // Virtual Section
        'virtual-tag': 'Virtuelle Kurse',
        'virtual-title': '💻 Online-Kurse von Überall',
        'virtual-subtitle': 'Lernen Sie Tanzen aus dem Komfort Ihres Zuhauses',
        'virtual-heading': 'Tanzen Ohne Grenzen',
        'virtual-desc-1': 'Meine virtuellen Kurse ermöglichen es Ihnen, Salsa, Bachata, Merengue und Salsa Choke von überall zu lernen. Sie benötigen nur ein Gerät mit Internet und den Wunsch zu tanzen.',
        'virtual-desc-2': 'Per Videoanrufe führe ich Sie Schritt für Schritt mit klaren und personalisierten Anweisungen. Es ist wie ein Präsenzkurs!',
        'virtual-feature-1': 'Live personalisierte Anweisung',
        'virtual-feature-2': 'Unterstützungsmaterial enthalten',
        'virtual-feature-3': 'Aufzeichnung des Kurses verfügbar',
        'virtual-cta': 'Virtuellen Kurs Probieren',

        // Services
        'services-tag': 'Unsere Dienstleistungen',
        'services-title': '💃 Arten von Kursen 🕺',
        'services-subtitle': 'Privat-, Anfänger- und Sonderveranstaltungen für alle Level',
        'service-1-title': '🎓 Anfängerkurse',
        'service-1-desc': 'Lernen von Grund auf. Einführungskurse perfekt, um Ihre Tanzreise zu beginnen.',
        'service-1-price': 'Einzelkurs',
        'service-1b-title': '👥 Anfängergemeinschaftskurse',
        'service-1b-desc': 'Öffentliche Kurse für Anfänger. Lernen Sie in einer Gruppe und haben Sie Spaß.',
        'service-1b-price': 'Wöchentlicher Kurs',
        'service-2-title': '⭐ Private Kurse',
        'service-2-desc': 'Einzel- oder Paarkurse. Personalisierte Aufmerksamkeit nach Ihren Bedürfnissen.',
        'service-2-price': 'Pro Stunde',
        'service-featured': 'Am Beliebtesten',
        'service-3-title': '🎉 Rumbaterapia',
        'service-3-desc': 'Haben Sie Spaß und bewegen Sie sich! Kurse zum Stressabbau und Genuss.',
        'service-3-price': 'Pro Stunde',
        'service-4-title': '🎊 Sonderveranstaltungen',
        'service-4-desc': 'Kurse für Hochzeiten, Jubiläen, Partys und Sonderveranstaltungen.',
        'service-4-price': 'Pro Veranstaltung',
        'service-5-title': '🏨 Hotelkommission',
        'service-5-desc': 'Wir arbeiten mit Hotels und Einrichtungen mit Kommissionsmodell.',
        'service-5-price': 'Kommission',
        'service-cta': 'Angebot',
        'discount-note': '20% Rabatt ab Ihrem zweiten Kurs!',
        'discount-weekly': '60.000 COP wenn wöchentlich',

        // Gallery
        'gallery-tag': 'Unser Portfolio',
        'gallery-title': '📸 Erlebnisgalerie',
        'gallery-subtitle': 'Entdecken Sie die Magie unserer Kurse durch Bilder und Videos',
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
        'class-3-title': 'Privatkurs',
        'class-3-desc': 'Personalisierte Aufmerksamkeit',
        'class-4-title': 'Rumbaterapia',
        'class-4-desc': 'Haben Sie Spaß und bewegen Sie sich!',

        // Dance Styles
        'styles-tag': 'Tanzstile',
        'styles-title': '🎶 Stile, die Wir Anbieten',
        'styles-subtitle': 'Salsa, Bachata, Merengue und Salsa Choke für alle Level',
        'style-1': 'Salsa',
        'style-1-desc': 'Energie und Bewegung',
        'style-2': 'Bachata',
        'style-2-desc': 'Sinnlichkeit und Verbindung',
        'style-3': 'Merengue',
        'style-3-desc': 'Spaß',
        'style-4': 'Salsa Choke',
        'style-4-desc': 'Freude und Geschmack',

        // Instructor
        'instructor-tag': 'Ihr Lehrer',
        'instructor-title': '👨‍🏫 Nicolás Garzón Mesa',
        'instructor-subtitle': 'Lizenzierter in Sporterziehung, Erholung und Sport',
        'instructor-cta': 'Buchen Sie Ihren Kurs!',
        'instructor-desc-1': 'Mit Jahren Erfahrung im Unterrichten von Salsa, Bachata, Merengue und Salsa Choke widme ich mich dem Teilen meiner Leidenschaft für Tanz mit Menschen aller Altersgruppen und Level.',
        'instructor-desc-2': 'Mein Ziel ist es, dass jeder Kurs eine lustige Erfahrung ist, in der Sie Stress abbauen, Ihre Koordination verbessern und vor allem最大限度地 genießen können.',

        // Why Choose Us
        'why-tag': 'Warum Uns Wählen?',
        'why-title': '⭐ Einzigartige Unterschiede',
        'why-1-title': 'Professionelle Ausbildung',
        'why-1-desc': 'Lizenzierter in Sporterziehung, Erholung und Sport',
        'why-2-title': 'Für Alle Level',
        'why-2-desc': 'Kurse angepasst von Anfängern bis Fortgeschrittene',
        'why-3-title': 'Totale Personalisierung',
        'why-3-desc': 'Privatkurse nach Ihren Bedürfnissen',
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

    // Update placeholders
    const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.setAttribute('placeholder', translations[lang][key]);
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
        // Update dropdown
        const select = document.getElementById('languageSelect');
        if (select) {
            select.value = savedLang;
        }
    } else {
        // Detect browser language
        const browserLang = navigator.language.substring(0, 2);
        if (translations[browserLang]) {
            changeLanguage(browserLang);
            const select = document.getElementById('languageSelect');
            if (select) {
                select.value = browserLang;
            }
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

// Video gallery hover effect
const videoItems = document.querySelectorAll('.video-item');
videoItems.forEach(item => {
    const video = item.querySelector('video');

    item.addEventListener('mouseenter', () => {
        if (video) {
            video.play().catch(err => console.log('Video play error:', err));
        }
    });

    item.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
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
    
    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 1500);
        });
    }
    
    // Enhanced 3D Tilt Effect for Service Cards
    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // Scroll-Triggered Animations
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
    
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth Scroll with Parallax
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

console.log('Portfolio loaded successfully! 🎭💃');