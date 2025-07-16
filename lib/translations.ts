export type Language = "en" | "es" | "fr" | "de" | "pt"

export const supportedLanguages = [
  { code: "en" as Language, name: "English", shortName: "EN", flag: "🇺🇸" },
  { code: "es" as Language, name: "Español", shortName: "ES", flag: "🇪🇸" },
  { code: "fr" as Language, name: "Français", shortName: "FR", flag: "🇫🇷" },
  { code: "de" as Language, name: "Deutsch", shortName: "DE", flag: "🇩🇪" },
  { code: "pt" as Language, name: "Português", shortName: "PT", flag: "🇵🇹" },
]

export const translations = {
  en: {
    nav: {
      home: "Home",
      thumbnailDownloader: "YT Thumbnail Downloader",
      profilePicDownloader: "Profile Pic Downloader",
      bannerDownloader: "Banner Downloader",
    },
    description: "Get thumbnails from any YouTube video in high resolution. Free, fast and no registration required.",
    profilePic: {
      description: "Download profile pictures from YouTube videos in various sizes.",
    },
    banner: {
      description: "Download banner images from YouTube videos in high resolution.",
    },
    home: {
      heroTitle: "YouTube Media",
      heroSubtitle: "Downloader",
      heroDescription:
        "Get thumbnails from any YouTube video in high resolution. Free, fast and no registration required.",
      chooseToolTitle: "Choose Your Tool",
      chooseToolDescription: "Select the perfect tool for your YouTube media downloading needs",
      whyChooseTitle: "Why Choose Our Tools?",
      readyTitle: "Ready to Get Started?",
      readyDescription: "Choose your preferred tool and start downloading high-quality YouTube media instantly.",
      downloadThumbnails: "Download Thumbnails",
      getProfilePics: "Get Profile Pics",
      features: {
        lightningFast: "Lightning Fast",
        lightningFastDesc: "Download thumbnails instantly with our optimized servers.",
        free: "Free",
        freeDesc: "Completely free to use with no hidden charges or subscriptions.",
        hdQuality: "HD Quality",
        hdQualityDesc: "Get high-resolution thumbnails up to 4K quality.",
        instantDownload: "Instant Download",
      },
      stats: {
        hdThumbnail: "HD Thumbnail",
        profileOptimized: "Profile Optimized",
        bannerReady: "Banner Ready",
      },
      footer: {
        description: "The ultimate toolkit for downloading YouTube media content in high quality.",
        tools: "Tools",
        languages: "Languages",
      },
    },
    thumbnails: {
      download: "Download",
      title: "YouTube Thumbnail Downloader",
      subtitle: "Download high-quality thumbnails from any YouTube video",
      placeholder: "Paste YouTube video URL here...",
      getImages: "Get Images",
      downloadAll: "Download All",
      selectQuality: "Select Quality",
      about: {
        title: "About Thumbnail Downloader",
        description:
          "The Thumbnail Downloader YouTube lets you save HD thumbnails from any YouTube video. You can get thumbnails from videos, playlists, and shorts. Download them in HD, 4K, and other high-quality resolutions. Paste the YouTube URL into the tool, and it will show you all the available resolutions of the thumbnails.",
        howToUse: "How to Use This Thumbnail Downloader YouTube Website?",
        steps: [
          "Copy the URL of the video.",
          "Paste the URL into the input text field at the top.",
          "The tool will display thumbnails in different sizes and formats. Choose the quality you need (HD, 4K, etc.).",
          "Click the download button.",
        ],
        standards: {
          title: "What Are YouTube's Thumbnail Standards?",
          description: "YouTube recommends the following thumbnail standards for optimal visibility and quality:",
          list: [
            "Resolution: 1280x720 pixels (minimum width: 640 pixels)",
            "Format: JPG, GIF, or PNG",
            "File Size: Under 2MB",
            "Aspect Ratio: 16:9 (ideal for YouTube players and previews)",
          ],
          note: "Create thumbnails that follow YouTube's rules to get more views and avoid any violations.",
        },
        compatibility: {
          title: "Compatibility of This YT Thumbnail Website",
          description:
            "This Thumbnail downloader YT website is compatible with a lot of devices and operating systems. It can be accessed on any computer, laptop, or mobile device to download thumbnails. iOS users may have some restrictions when saving images, but the tool functions smoothly on Android devices.",
        },
        seo: {
          title: "Does Using Another Video's Thumbnail Impact SEO?",
          description:
            "Yes, using a thumbnail of another video can impact your SEO if it's detected as duplicate content. Search engines, including YouTube and Google, favor unique and original content.",
        },
      },
    },
    footer: {
      copyright: "© 2025 YouTube Thumbnail Downloader. Developed by Muhammad Arsalan.",
      disclaimer: "This tool is not affiliated with YouTube. YouTube is a trademark of Google Inc.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      thumbnailDownloader: "Descargador de Miniaturas YT",
      profilePicDownloader: "Descargador de Foto de Perfil",
      bannerDownloader: "Descargador de Banner",
    },
    description:
      "Obtén miniaturas de cualquier video de YouTube en alta resolución. Gratis, rápido y sin registro requerido.",
    profilePic: {
      description: "Descarga fotos de perfil de videos de YouTube en varios tamaños.",
    },
    banner: {
      description: "Descarga imágenes de banner de videos de YouTube en alta resolución.",
    },
    home: {
      heroTitle: "Descargador de",
      heroSubtitle: "Medios de YouTube",
      heroDescription:
        "Obtén miniaturas de cualquier video de YouTube en alta resolución. Gratis, rápido y sin registro requerido.",
      chooseToolTitle: "Elige Tu Herramienta",
      chooseToolDescription: "Selecciona la herramienta perfecta para tus necesidades de descarga de medios de YouTube",
      whyChooseTitle: "¿Por Qué Elegir Nuestras Herramientas?",
      readyTitle: "¿Listo para Comenzar?",
      readyDescription:
        "Elige tu herramienta preferida y comienza a descargar medios de YouTube de alta calidad al instante.",
      downloadThumbnails: "Descargar Miniaturas",
      getProfilePics: "Obtener Fotos de Perfil",
      features: {
        lightningFast: "Súper Rápido",
        lightningFastDesc: "Descarga miniaturas al instante con nuestros servidores optimizados.",
        free: "Gratis",
        freeDesc: "Completamente gratis de usar sin cargos ocultos o suscripciones.",
        hdQuality: "Calidad HD",
        hdQualityDesc: "Obtén miniaturas de alta resolución hasta calidad 4K.",
        instantDownload: "Descarga Instantánea",
      },
      stats: {
        hdThumbnail: "Miniatura HD",
        profileOptimized: "Perfil Optimizado",
        bannerReady: "Banner Listo",
      },
      footer: {
        description:
          "El kit de herramientas definitivo para descargar contenido multimedia de YouTube en alta calidad.",
        tools: "Herramientas",
        languages: "Idiomas",
      },
    },
    thumbnails: {
      download: "Descargar",
      title: "Descargador de Miniaturas de YouTube",
      subtitle: "Descarga miniaturas de alta calidad de cualquier video de YouTube",
      placeholder: "Pega la URL del video de YouTube aquí...",
      getImages: "Obtener Imágenes",
      downloadAll: "Descargar Todo",
      selectQuality: "Seleccionar Calidad",
      about: {
        title: "Acerca del Descargador de Miniaturas",
        description:
          "El Descargador de Miniaturas de YouTube te permite guardar miniaturas HD de cualquier video de YouTube. Puedes obtener miniaturas de videos, listas de reproducción y shorts. Descárgalas en HD, 4K y otras resoluciones de alta calidad. Pega la URL de YouTube en la herramienta y te mostrará todas las resoluciones disponibles de las miniaturas.",
        howToUse: "¿Cómo Usar Este Sitio Web Descargador de Miniaturas de YouTube?",
        steps: [
          "Copia la URL del video.",
          "Pega la URL en el campo de texto de entrada en la parte superior.",
          "La herramienta mostrará miniaturas en diferentes tamaños y formatos. Elige la calidad que necesites (HD, 4K, etc.).",
          "Haz clic en el botón de descarga.",
        ],
        standards: {
          title: "¿Cuáles son los Estándares de Miniaturas de YouTube?",
          description:
            "YouTube recomienda los siguientes estándares de miniaturas para una visibilidad y calidad óptimas:",
          list: [
            "Resolución: 1280x720 píxeles (ancho mínimo: 640 píxeles)",
            "Formato: JPG, GIF o PNG",
            "Tamaño de archivo: Menos de 2MB",
            "Relación de aspecto: 16:9 (ideal para reproductores y vistas previas de YouTube)",
          ],
          note: "Crea miniaturas que sigan las reglas de YouTube para obtener más visualizaciones y evitar violaciones.",
        },
        compatibility: {
          title: "Compatibilidad de Este Sitio Web de Miniaturas YT",
          description:
            "Este sitio web descargador de miniaturas YT es compatible con muchos dispositivos y sistemas operativos. Se puede acceder desde cualquier computadora, laptop o dispositivo móvil para descargar miniaturas. Los usuarios de iOS pueden tener algunas restricciones al guardar imágenes, pero la herramienta funciona sin problemas en dispositivos Android.",
        },
        seo: {
          title: "¿Usar la Miniatura de Otro Video Impacta el SEO?",
          description:
            "Sí, usar una miniatura de otro video puede impactar tu SEO si se detecta como contenido duplicado. Los motores de búsqueda, incluyendo YouTube y Google, favorecen el contenido único y original.",
        },
      },
    },
    footer: {
      copyright: "© 2024 YT Tools. Todos los derechos reservados.",
      disclaimer: "Esta herramienta no está afiliada con YouTube. YouTube es una marca registrada de Google Inc.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      thumbnailDownloader: "Téléchargeur de Miniatures YT",
      profilePicDownloader: "Téléchargeur de Photo de Profil",
      bannerDownloader: "Téléchargeur de Bannière",
    },
    description:
      "Obtenez des miniatures de n'importe quelle vidéo YouTube en haute résolution. Gratuit, rapide et aucune inscription requise.",
    profilePic: {
      description: "Téléchargez des photos de profil de vidéos YouTube en différentes tailles.",
    },
    banner: {
      description: "Téléchargez des images de bannière de vidéos YouTube en haute résolution.",
    },
    home: {
      heroTitle: "Téléchargeur de",
      heroSubtitle: "Médias YouTube",
      heroDescription:
        "Obtenez des miniatures de n'importe quelle vidéo YouTube en haute résolution. Gratuit, rapide et aucune inscription requise.",
      chooseToolTitle: "Choisissez Votre Outil",
      chooseToolDescription: "Sélectionnez l'outil parfait pour vos besoins de téléchargement de médias YouTube",
      whyChooseTitle: "Pourquoi Choisir Nos Outils?",
      readyTitle: "Prêt à Commencer?",
      readyDescription:
        "Choisissez votre outil préféré et commencez à télécharger des médias YouTube de haute qualité instantanément.",
      downloadThumbnails: "Télécharger les Miniatures",
      getProfilePics: "Obtenir les Photos de Profil",
      features: {
        lightningFast: "Ultra Rapide",
        lightningFastDesc: "Téléchargez des miniatures instantanément avec nos serveurs optimisés.",
        free: "Gratuit",
        freeDesc: "Complètement gratuit à utiliser sans frais cachés ou abonnements.",
        hdQuality: "Qualité HD",
        hdQualityDesc: "Obtenez des miniatures haute résolution jusqu'à la qualité 4K.",
        instantDownload: "Téléchargement Instantané",
      },
      stats: {
        hdThumbnail: "Miniature HD",
        profileOptimized: "Profil Optimisé",
        bannerReady: "Bannière Prête",
      },
      footer: {
        description: "La boîte à outils ultime pour télécharger du contenu multimédia YouTube en haute qualité.",
        tools: "Outils",
        languages: "Langues",
      },
    },
    thumbnails: {
      download: "Télécharger",
      title: "Téléchargeur de Miniatures YouTube",
      subtitle: "Téléchargez des miniatures de haute qualité de n'importe quelle vidéo YouTube",
      placeholder: "Collez l'URL de la vidéo YouTube ici...",
      getImages: "Obtenir les Images",
      downloadAll: "Tout Télécharger",
      selectQuality: "Sélectionner la Qualité",
      about: {
        title: "À Propos du Téléchargeur de Miniatures",
        description:
          "Le Téléchargeur de Miniatures YouTube vous permet de sauvegarder des miniatures HD de n'importe quelle vidéo YouTube. Vous pouvez obtenir des miniatures de vidéos, playlists et shorts. Téléchargez-les en HD, 4K et autres résolutions haute qualité. Collez l'URL YouTube dans l'outil et il vous montrera toutes les résolutions disponibles des miniatures.",
        howToUse: "Comment Utiliser Ce Site Web Téléchargeur de Miniatures YouTube?",
        steps: [
          "Copiez l'URL de la vidéo.",
          "Collez l'URL dans le champ de texte d'entrée en haut.",
          "L'outil affichera les miniatures en différentes tailles et formats. Choisissez la qualité dont vous avez besoin (HD, 4K, etc.).",
          "Cliquez sur le bouton de téléchargement.",
        ],
        standards: {
          title: "Quels sont les Standards de Miniatures YouTube?",
          description:
            "YouTube recommande les standards de miniatures suivants pour une visibilité et qualité optimales:",
          list: [
            "Résolution: 1280x720 pixels (largeur minimum: 640 pixels)",
            "Format: JPG, GIF ou PNG",
            "Taille de fichier: Moins de 2MB",
            "Ratio d'aspect: 16:9 (idéal pour les lecteurs et aperçus YouTube)",
          ],
          note: "Créez des miniatures qui suivent les règles YouTube pour obtenir plus de vues et éviter les violations.",
        },
        compatibility: {
          title: "Compatibilité de Ce Site Web de Miniatures YT",
          description:
            "Ce site web téléchargeur de miniatures YT est compatible avec beaucoup d'appareils et systèmes d'exploitation. Il peut être accédé sur n'importe quel ordinateur, laptop ou appareil mobile pour télécharger des miniatures. Les utilisateurs iOS peuvent avoir quelques restrictions lors de la sauvegarde d'images, mais l'outil fonctionne parfaitement sur les appareils Android.",
        },
        seo: {
          title: "Utiliser la Miniature d'une Autre Vidéo Impacte-t-il le SEO?",
          description:
            "Oui, utiliser une miniature d'une autre vidéo peut impacter votre SEO si c'est détecté comme contenu dupliqué. Les moteurs de recherche, incluant YouTube et Google, favorisent le contenu unique et original.",
        },
      },
    },
    footer: {
      copyright: "© 2024 YT Tools. Tous droits réservés.",
      disclaimer: "Cet outil n'est pas affilié avec YouTube. YouTube est une marque de Google Inc.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      thumbnailDownloader: "YT Thumbnail Downloader",
      profilePicDownloader: "Profilbild Downloader",
      bannerDownloader: "Banner Downloader",
    },
    description:
      "Holen Sie sich Thumbnails von jedem YouTube-Video in hoher Auflösung. Kostenlos, schnell und keine Registrierung erforderlich.",
    profilePic: {
      description: "Laden Sie Profilbilder von YouTube-Videos in verschiedenen Größen herunter.",
    },
    banner: {
      description: "Laden Sie Banner-Bilder von YouTube-Videos in hoher Auflösung herunter.",
    },
    home: {
      heroTitle: "YouTube-Medien",
      heroSubtitle: "Downloader",
      heroDescription:
        "Holen Sie sich Thumbnails von jedem YouTube-Video in hoher Auflösung. Kostenlos, schnell und keine Registrierung erforderlich.",
      chooseToolTitle: "Wählen Sie Ihr Tool",
      chooseToolDescription: "Wählen Sie das perfekte Tool für Ihre YouTube-Medien-Download-Bedürfnisse",
      whyChooseTitle: "Warum Unsere Tools Wählen?",
      readyTitle: "Bereit Anzufangen?",
      readyDescription:
        "Wählen Sie Ihr bevorzugtes Tool und beginnen Sie sofort mit dem Herunterladen hochwertiger YouTube-Medien.",
      downloadThumbnails: "Thumbnails Herunterladen",
      getProfilePics: "Profilbilder Holen",
      features: {
        lightningFast: "Blitzschnell",
        lightningFastDesc: "Laden Sie Thumbnails sofort mit unseren optimierten Servern herunter.",
        free: "Kostenlos",
        freeDesc: "Völlig kostenlos zu verwenden ohne versteckte Gebühren oder Abonnements.",
        hdQuality: "HD-Qualität",
        hdQualityDesc: "Erhalten Sie hochauflösende Thumbnails bis zu 4K-Qualität.",
        instantDownload: "Sofortiger Download",
      },
      stats: {
        hdThumbnail: "HD Thumbnail",
        profileOptimized: "Profil Optimiert",
        bannerReady: "Banner Bereit",
      },
      footer: {
        description: "Das ultimative Toolkit zum Herunterladen von YouTube-Medieninhalten in hoher Qualität.",
        tools: "Tools",
        languages: "Sprachen",
      },
    },
    thumbnails: {
      download: "Herunterladen",
      title: "YouTube Thumbnail Downloader",
      subtitle: "Laden Sie hochwertige Thumbnails von jedem YouTube-Video herunter",
      placeholder: "YouTube-Video-URL hier einfügen...",
      getImages: "Bilder Holen",
      downloadAll: "Alle Herunterladen",
      selectQuality: "Qualität Auswählen",
      about: {
        title: "Über den Thumbnail Downloader",
        description:
          "Der Thumbnail Downloader YouTube ermöglicht es Ihnen, HD-Thumbnails von jedem YouTube-Video zu speichern. Sie können Thumbnails von Videos, Playlists und Shorts erhalten. Laden Sie sie in HD, 4K und anderen hochwertigen Auflösungen herunter. Fügen Sie die YouTube-URL in das Tool ein und es zeigt Ihnen alle verfügbaren Auflösungen der Thumbnails.",
        howToUse: "Wie Verwende Ich Diese Thumbnail Downloader YouTube Website?",
        steps: [
          "Kopieren Sie die URL des Videos.",
          "Fügen Sie die URL in das Eingabetextfeld oben ein.",
          "Das Tool zeigt Thumbnails in verschiedenen Größen und Formaten an. Wählen Sie die benötigte Qualität (HD, 4K, etc.).",
          "Klicken Sie auf den Download-Button.",
        ],
        standards: {
          title: "Was sind YouTubes Thumbnail-Standards?",
          description: "YouTube empfiehlt die folgenden Thumbnail-Standards für optimale Sichtbarkeit und Qualität:",
          list: [
            "Auflösung: 1280x720 Pixel (Mindestbreite: 640 Pixel)",
            "Format: JPG, GIF oder PNG",
            "Dateigröße: Unter 2MB",
            "Seitenverhältnis: 16:9 (ideal für YouTube-Player und Vorschauen)",
          ],
          note: "Erstellen Sie Thumbnails, die YouTubes Regeln folgen, um mehr Aufrufe zu erhalten und Verstöße zu vermeiden.",
        },
        compatibility: {
          title: "Kompatibilität Dieser YT Thumbnail Website",
          description:
            "Diese Thumbnail-Downloader YT-Website ist mit vielen Geräten und Betriebssystemen kompatibel. Sie kann auf jedem Computer, Laptop oder mobilem Gerät zum Herunterladen von Thumbnails aufgerufen werden. iOS-Benutzer können einige Einschränkungen beim Speichern von Bildern haben, aber das Tool funktioniert reibungslos auf Android-Geräten.",
        },
        seo: {
          title: "Beeinflusst die Verwendung des Thumbnails eines Anderen Videos das SEO?",
          description:
            "Ja, die Verwendung eines Thumbnails eines anderen Videos kann Ihr SEO beeinträchtigen, wenn es als doppelter Inhalt erkannt wird. Suchmaschinen, einschließlich YouTube und Google, bevorzugen einzigartigen und originalen Inhalt.",
        },
      },
    },
    footer: {
      copyright: "© 2024 YT Tools. Alle Rechte vorbehalten.",
      disclaimer: "Dieses Tool ist nicht mit YouTube verbunden. YouTube ist eine Marke von Google Inc.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      thumbnailDownloader: "Baixador de Miniaturas YT",
      profilePicDownloader: "Baixador de Foto de Perfil",
      bannerDownloader: "Baixador de Banner",
    },
    description:
      "Obtenha miniaturas de qualquer vídeo do YouTube em alta resolução. Grátis, rápido e sem necessidade de registro.",
    profilePic: {
      description: "Baixe fotos de perfil de vídeos do YouTube em vários tamanhos.",
    },
    banner: {
      description: "Baixe imagens de banner de vídeos do YouTube em alta resolução.",
    },
    home: {
      heroTitle: "Baixador de",
      heroSubtitle: "Mídia do YouTube",
      heroDescription:
        "Obtenha miniaturas de qualquer vídeo do YouTube em alta resolução. Grátis, rápido e sem necessidade de registro.",
      chooseToolTitle: "Escolha Sua Ferramenta",
      chooseToolDescription: "Selecione a ferramenta perfeita para suas necessidades de download de mídia do YouTube",
      whyChooseTitle: "Por Que Escolher Nossas Ferramentas?",
      readyTitle: "Pronto Para Começar?",
      readyDescription:
        "Escolha sua ferramenta preferida e comece a baixar mídia do YouTube de alta qualidade instantaneamente.",
      downloadThumbnails: "Baixar Miniaturas",
      getProfilePics: "Obter Fotos de Perfil",
      features: {
        lightningFast: "Super Rápido",
        lightningFastDesc: "Baixe miniaturas instantaneamente com nossos servidores otimizados.",
        free: "Grátis",
        freeDesc: "Completamente grátis para usar sem taxas ocultas ou assinaturas.",
        hdQuality: "Qualidade HD",
        hdQualityDesc: "Obtenha miniaturas de alta resolução até qualidade 4K.",
        instantDownload: "Download Instantâneo",
      },
      stats: {
        hdThumbnail: "Miniatura HD",
        profileOptimized: "Perfil Otimizado",
        bannerReady: "Banner Pronto",
      },
      footer: {
        description: "O kit de ferramentas definitivo para baixar conteúdo de mídia do YouTube em alta qualidade.",
        tools: "Ferramentas",
        languages: "Idiomas",
      },
    },
    thumbnails: {
      download: "Baixar",
      title: "Baixador de Miniaturas do YouTube",
      subtitle: "Baixe miniaturas de alta qualidade de qualquer vídeo do YouTube",
      placeholder: "Cole a URL do vídeo do YouTube aqui...",
      getImages: "Obter Imagens",
      downloadAll: "Baixar Tudo",
      selectQuality: "Selecionar Qualidade",
      about: {
        title: "Sobre o Baixador de Miniaturas",
        description:
          "O Baixador de Miniaturas do YouTube permite que você salve miniaturas HD de qualquer vídeo do YouTube. Você pode obter miniaturas de vídeos, playlists e shorts. Baixe-as em HD, 4K e outras resoluções de alta qualidade. Cole a URL do YouTube na ferramenta e ela mostrará todas as resoluções disponíveis das miniaturas.",
        howToUse: "Como Usar Este Site Baixador de Miniaturas do YouTube?",
        steps: [
          "Copie a URL do vídeo.",
          "Cole a URL no campo de texto de entrada no topo.",
          "A ferramenta exibirá miniaturas em diferentes tamanhos e formatos. Escolha a qualidade que você precisa (HD, 4K, etc.).",
          "Clique no botão de download.",
        ],
        standards: {
          title: "Quais são os Padrões de Miniaturas do YouTube?",
          description: "O YouTube recomenda os seguintes padrões de miniaturas para visibilidade e qualidade ideais:",
          list: [
            "Resolução: 1280x720 pixels (largura mínima: 640 pixels)",
            "Formato: JPG, GIF ou PNG",
            "Tamanho do arquivo: Menos de 2MB",
            "Proporção: 16:9 (ideal para players e visualizações do YouTube)",
          ],
          note: "Crie miniaturas que sigam as regras do YouTube para obter mais visualizações e evitar violações.",
        },
        compatibility: {
          title: "Compatibilidade Deste Site de Miniaturas YT",
          description:
            "Este site baixador de miniaturas YT é compatível com muitos dispositivos e sistemas operacionais. Pode ser acessado em qualquer computador, laptop ou dispositivo móvel para baixar miniaturas. Usuários do iOS podem ter algumas restrições ao salvar imagens, mas a ferramenta funciona perfeitamente em dispositivos Android.",
        },
        seo: {
          title: "Usar a Miniatura de Outro Vídeo Impacta o SEO?",
          description:
            "Sim, usar uma miniatura de outro vídeo pode impactar seu SEO se for detectado como conteúdo duplicado. Mecanismos de busca, incluindo YouTube e Google, favorecem conteúdo único e original.",
        },
      },
    },
    footer: {
      copyright: "© 2024 YT Tools. Todos os direitos reservados.",
      disclaimer: "Esta ferramenta não é afiliada ao YouTube. YouTube é uma marca registrada do Google Inc.",
    },
  },
}
