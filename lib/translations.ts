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
      about: {
        title: "About YouTube Profile Picture Downloader",
        description:
          "Looking to download YouTube profile pictures (also known as channel logos or avatars)? Our YouTube Profile Picture aka PFP Downloader allows you to view and download high-resolution profile images from any YouTube channel.",
        howToUse: "How to Use the YouTube Profile Picture Downloader:",
        steps: [
          "Step 1: Paste the YouTube video URL.",
          "Step 2: Select your desired resolution from the available options.",
          'Step 3: Click "Download".',
        ],
        sizes: {
          title: "Available Profile Picture Sizes:",
          list: [
            "1920x1920 (Ultra High Quality)",
            "1280x1280 (High Quality)",
            "800x800 (Recommended by YouTube)",
            "400x400 (Standard)",
            "240x240 (Small)",
            "176x176 (Mobile)",
            "88x88 (Tiny)",
          ],
        },
        whyUse: {
          title: "Why Use Our YouTube Profile Picture Downloader?",
          multipleSizes: {
            title: "Multiple Size Options:",
            description:
              "Get the exact size you need for your project, from tiny 88x88 icons to high-resolution 1920x1920 images.",
          },
          highQuality: {
            title: "High-Resolution Image Quality:",
            description:
              "Download the profile pictures in the same resolution as they appear on YouTube. Perfect for use in websites, presentations, or personal projects.",
          },
          engagement: {
            title: "Engagement Boost:",
            description:
              "A high-quality, memorable profile picture can enhance your online identity and attract more subscribers to your YouTube channel.",
          },
        },
        legal: {
          title: "Legal and Privacy Considerations:",
          description:
            "Our tool respects privacy and adheres to YouTube's Terms of Service. It is important to download and use profile pictures in compliance with copyright laws. You are solely responsible for how you use the images, ensuring they are used ethically and legally.",
        },
        faq: {
          title: "Frequently Asked Questions (FAQ):",
          questions: [
            {
              question: "Is this tool free to use?",
              answer: "Yes! The YouTube Profile Picture Downloader is completely free to use.",
            },
            {
              question: "Can I download images anonymously?",
              answer: "You don't need to provide any personal information.",
            },
            {
              question: "What image resolution can I download?",
              answer:
                "The tool offers various resolutions, including HD quality (1280x1280) and standard resolutions like 800x800 and 400x400.",
            },
            {
              question: "Is there a limit on how many images I can download?",
              answer: "No! You can download as many YouTube profile pictures as you need.",
            },
            {
              question: "Is the tool compatible with all devices?",
              answer: "Yes, it works perfectly on Windows, Mac, Android, and iOS devices with an updated browser.",
            },
          ],
        },
      },
    },
    banner: {
      description: "Download banner images from YouTube videos in high resolution.",
      about: {
        title: "About YouTube Channel Banner Downloader",
        description:
          "A great banner can establish your channel's identity and engage viewers right away. With the YouTube Channel Banner Downloader, you can quickly download banners from any YouTube channel. This simple tool allows you to retrieve banners. No need to be tech-savvy, this tool is designed for everyone. Just copy any YouTube URL, paste it into the tool, and within seconds, your banner is ready to download.",
        howToUse: {
          title: "How to Use the YouTube Channel Banner Downloader",
          steps: ["Copy the YouTube Video URL", "Paste the URL", "Click Download"],
        },
        whatIs: {
          title: "What is a YouTube Channel Banner?",
          description:
            "A YouTube channel banner, also known as channel art, is the large image displayed at the top of a YouTube channel page. It helps convey your channel's brand, identity, and content type. A well-designed banner grabs attention and sets the tone for your videos. It's the perfect place to showcase your logo, images, and even some text.",
        },
        benefits: {
          title: "Benefits of a YouTube Channel Banner",
          list: [
            {
              title: "Brand Representation:",
              description:
                "Your banner is a reflection of your channel's identity. It should align with the tone, style, and content of your videos.",
            },
            {
              title: "First Impressions Matter:",
              description:
                "As the first thing viewers see, your banner plays a key role in attracting potential subscribers.",
            },
            {
              title: "Building Trust:",
              description:
                "Consistency in design helps create a professional look, reinforcing your brand image across all platforms.",
            },
          ],
        },
        recommendedSize: {
          title: "Recommended Banner Size for YouTube",
          description:
            "For the best display on all devices, the ideal size for a YouTube channel banner is 2560 x 1440 pixels. This ensures that your banner looks crisp on desktops, laptops, tablets, and mobile devices. Always aim for high-resolution images and ensure that key elements are within the safe area (1546 x 423 pixels) to avoid cropping on different screen sizes.",
        },
        availableSizes: {
          title: "Available Banner Sizes",
          list: [
            "2560 x 1440 pixels – Full HD",
            "1920 x 1080 pixels – Ideal for desktop screens",
            "1280 x 720 pixels – Perfect for tablets and smartphones",
            "Various Other Sizes – For mobile devices and other screen types",
          ],
        },
        download: {
          title: "Download YouTube Channel Banners",
          description:
            "Want to download a YouTube channel banner? With our YouTube Channel Banner Downloader, it's simple. Paste the URL of any YouTube video, and our tool will retrieve the banner in different sizes, ready for you to save and use.",
        },
        legal: {
          title: "Downloading YouTube Channel Banners – Legal Considerations",
          description:
            "While downloading YouTube banners for inspiration or personal use is generally acceptable, please respect copyright and intellectual property rights. Avoid using downloaded banners for commercial purposes unless you have obtained the necessary permissions from the original creators.",
        },
        faq: {
          title: "Frequently Asked Questions (FAQ)",
          questions: [
            {
              question: "What is a YouTube Channel Banner?",
              answer:
                "A YouTube channel banner is a large, customizable image displayed at the top of your channel's page. It serves as a visual representation of your brand.",
            },
            {
              question: "How do I download a YouTube channel banner?",
              answer:
                'To download a banner, simply paste the video URL into our tool, click "Download," and save the banner image to your device.',
            },
            {
              question: "Can I download banners from any video?",
              answer: "Yes, our tool allows you to download banners from any publicly available YouTube video.",
            },
            {
              question: "What is the recommended size for a YouTube channel banner?",
              answer: "The ideal size is 2560 x 1440 pixels, with a file size under 6 MB for faster loading times.",
            },
            {
              question: "Is it legal to use downloaded banners?",
              answer:
                "Downloading banners for personal use is fine, but you must respect copyright laws when using them commercially.",
            },
          ],
        },
      },
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
      copyright: "© 2025 YT Tools. All rights reserved.",
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
      about: {
        title: "Acerca del Descargador de Fotos de Perfil de YouTube",
        description:
          "¿Buscas descargar fotos de perfil de YouTube (también conocidas como logos de canal o avatares)? Nuestro Descargador de Fotos de Perfil de YouTube te permite ver y descargar imágenes de perfil de alta resolución de cualquier canal de YouTube.",
        howToUse: "Cómo Usar el Descargador de Fotos de Perfil de YouTube:",
        steps: [
          "Paso 1: Pega la URL del video de YouTube.",
          "Paso 2: Selecciona tu resolución deseada de las opciones disponibles.",
          'Paso 3: Haz clic en "Descargar".',
        ],
        sizes: {
          title: "Tamaños de Foto de Perfil Disponibles:",
          list: [
            "1920x1920 (Ultra Alta Calidad)",
            "1280x1280 (Alta Calidad)",
            "800x800 (Recomendado por YouTube)",
            "400x400 (Estándar)",
            "240x240 (Pequeño)",
            "176x176 (Móvil)",
            "88x88 (Diminuto)",
          ],
        },
        whyUse: {
          title: "¿Por Qué Usar Nuestro Descargador de Fotos de Perfil de YouTube?",
          multipleSizes: {
            title: "Múltiples Opciones de Tamaño:",
            description:
              "Obtén el tamaño exacto que necesitas para tu proyecto, desde íconos diminutos de 88x88 hasta imágenes de alta resolución de 1920x1920.",
          },
          highQuality: {
            title: "Calidad de Imagen de Alta Resolución:",
            description:
              "Descarga las fotos de perfil en la misma resolución que aparecen en YouTube. Perfecto para usar en sitios web, presentaciones o proyectos personales.",
          },
          engagement: {
            title: "Impulso de Participación:",
            description:
              "Una foto de perfil memorable y de alta calidad puede mejorar tu identidad en línea y atraer más suscriptores a tu canal de YouTube.",
          },
        },
        legal: {
          title: "Consideraciones Legales y de Privacidad:",
          description:
            "Nuestra herramienta respeta la privacidad y se adhiere a los Términos de Servicio de YouTube. Es importante descargar y usar fotos de perfil cumpliendo con las leyes de derechos de autor. Eres el único responsable de cómo uses las imágenes, asegurándote de que se usen de manera ética y legal.",
        },
        faq: {
          title: "Preguntas Frecuentes (FAQ):",
          questions: [
            {
              question: "¿Es gratuita esta herramienta?",
              answer: "¡Sí! El Descargador de Fotos de Perfil de YouTube es completamente gratuito.",
            },
            {
              question: "¿Puedo descargar imágenes de forma anónima?",
              answer: "No necesitas proporcionar información personal.",
            },
            {
              question: "¿Qué resolución de imagen puedo descargar?",
              answer:
                "La herramienta ofrece varias resoluciones, incluyendo calidad HD (1280x1280) y resoluciones estándar como 800x800 y 400x400.",
            },
            {
              question: "¿Hay un límite en cuántas imágenes puedo descargar?",
              answer: "¡No! Puedes descargar tantas fotos de perfil de YouTube como necesites.",
            },
            {
              question: "¿Es compatible la herramienta con todos los dispositivos?",
              answer:
                "Sí, funciona perfectamente en dispositivos Windows, Mac, Android e iOS con un navegador actualizado.",
            },
          ],
        },
      },
    },
    banner: {
      description: "Descarga imágenes de banner de videos de YouTube en alta resolución.",
      about: {
        title: "Acerca del Descargador de Banner de Canal de YouTube",
        description:
          "Un gran banner puede establecer la identidad de tu canal y atraer a los espectadores de inmediato. Con el Descargador de Banner de Canal de YouTube, puedes descargar rápidamente banners de cualquier canal de YouTube. Esta herramienta simple te permite recuperar banners. No necesitas ser experto en tecnología, esta herramienta está diseñada para todos. Solo copia cualquier URL de YouTube, pégala en la herramienta, y en segundos, tu banner estará listo para descargar.",
        howToUse: {
          title: "Cómo Usar el Descargador de Banner de Canal de YouTube",
          steps: ["Copia la URL del Video de YouTube", "Pega la URL", "Haz clic en Descargar"],
        },
        whatIs: {
          title: "¿Qué es un Banner de Canal de YouTube?",
          description:
            "Un banner de canal de YouTube, también conocido como arte de canal, es la imagen grande que se muestra en la parte superior de una página de canal de YouTube. Ayuda a transmitir la marca, identidad y tipo de contenido de tu canal. Un banner bien diseñado llama la atención y establece el tono para tus videos. Es el lugar perfecto para mostrar tu logo, imágenes e incluso algo de texto.",
        },
        benefits: {
          title: "Beneficios de un Banner de Canal de YouTube",
          list: [
            {
              title: "Representación de Marca:",
              description:
                "Tu banner es un reflejo de la identidad de tu canal. Debe alinearse con el tono, estilo y contenido de tus videos.",
            },
            {
              title: "Las Primeras Impresiones Importan:",
              description:
                "Como lo primero que ven los espectadores, tu banner juega un papel clave en atraer suscriptores potenciales.",
            },
            {
              title: "Construir Confianza:",
              description:
                "La consistencia en el diseño ayuda a crear una apariencia profesional, reforzando tu imagen de marca en todas las plataformas.",
            },
          ],
        },
        recommendedSize: {
          title: "Tamaño de Banner Recomendado para YouTube",
          description:
            "Para la mejor visualización en todos los dispositivos, el tamaño ideal para un banner de canal de YouTube es 2560 x 1440 píxeles. Esto asegura que tu banner se vea nítido en escritorios, laptops, tabletas y dispositivos móviles. Siempre apunta a imágenes de alta resolución y asegúrate de que los elementos clave estén dentro del área segura (1546 x 423 píxeles) para evitar recortes en diferentes tamaños de pantalla.",
        },
        availableSizes: {
          title: "Tamaños de Banner Disponibles",
          list: [
            "2560 x 1440 píxeles – Full HD",
            "1920 x 1080 píxeles – Ideal para pantallas de escritorio",
            "1280 x 720 píxeles – Perfecto para tabletas y smartphones",
            "Varios Otros Tamaños – Para dispositivos móviles y otros tipos de pantalla",
          ],
        },
        download: {
          title: "Descargar Banners de Canal de YouTube",
          description:
            "¿Quieres descargar un banner de canal de YouTube? Con nuestro Descargador de Banner de Canal de YouTube, es simple. Pega la URL de cualquier video de YouTube, y nuestra herramienta recuperará el banner en diferentes tamaños, listo para que lo guardes y uses.",
        },
        legal: {
          title: "Descarga de Banners de Canal de YouTube – Consideraciones Legales",
          description:
            "Aunque descargar banners de YouTube para inspiración o uso personal es generalmente aceptable, por favor respeta los derechos de autor y propiedad intelectual. Evita usar banners descargados para propósitos comerciales a menos que hayas obtenido los permisos necesarios de los creadores originales.",
        },
        faq: {
          title: "Preguntas Frecuentes (FAQ)",
          questions: [
            {
              question: "¿Qué es un Banner de Canal de YouTube?",
              answer:
                "Un banner de canal de YouTube es una imagen grande y personalizable que se muestra en la parte superior de la página de tu canal. Sirve como una representación visual de tu marca.",
            },
            {
              question: "¿Cómo descargo un banner de canal de YouTube?",
              answer:
                'Para descargar un banner, simplemente pega la URL del video en nuestra herramienta, haz clic en "Descargar" y guarda la imagen del banner en tu dispositivo.',
            },
            {
              question: "¿Puedo descargar banners de cualquier video?",
              answer:
                "Sí, nuestra herramienta te permite descargar banners de cualquier video de YouTube disponible públicamente.",
            },
            {
              question: "¿Cuál es el tamaño recomendado para un banner de canal de YouTube?",
              answer:
                "El tamaño ideal es 2560 x 1440 píxeles, con un tamaño de archivo menor a 6 MB para tiempos de carga más rápidos.",
            },
            {
              question: "¿Es legal usar banners descargados?",
              answer:
                "Descargar banners para uso personal está bien, pero debes respetar las leyes de derechos de autor al usarlos comercialmente.",
            },
          ],
        },
      },
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
      copyright: "© 2025 YT Tools. Todos los derechos reservados.",
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
      about: {
        title: "À Propos du Téléchargeur de Photos de Profil YouTube",
        description:
          "Vous cherchez à télécharger des photos de profil YouTube (également connues sous le nom de logos de chaîne ou avatars) ? Notre Téléchargeur de Photos de Profil YouTube vous permet de visualiser et télécharger des images de profil haute résolution de n'importe quelle chaîne YouTube.",
        howToUse: "Comment Utiliser le Téléchargeur de Photos de Profil YouTube :",
        steps: [
          "Étape 1 : Collez l'URL de la vidéo YouTube.",
          "Étape 2 : Sélectionnez votre résolution désirée parmi les options disponibles.",
          'Étape 3 : Cliquez sur "Télécharger".',
        ],
        sizes: {
          title: "Tailles de Photos de Profil Disponibles :",
          list: [
            "1920x1920 (Ultra Haute Qualité)",
            "1280x1280 (Haute Qualité)",
            "800x800 (Recommandé par YouTube)",
            "400x400 (Standard)",
            "240x240 (Petit)",
            "176x176 (Mobile)",
            "88x88 (Minuscule)",
          ],
        },
        whyUse: {
          title: "Pourquoi Utiliser Notre Téléchargeur de Photos de Profil YouTube ?",
          multipleSizes: {
            title: "Options de Tailles Multiples :",
            description:
              "Obtenez la taille exacte dont vous avez besoin pour votre projet, des icônes minuscules de 88x88 aux images haute résolution de 1920x1920.",
          },
          highQuality: {
            title: "Qualité d'Image Haute Résolution :",
            description:
              "Téléchargez les photos de profil dans la même résolution qu'elles apparaissent sur YouTube. Parfait pour une utilisation dans des sites web, présentations ou projets personnels.",
          },
          engagement: {
            title: "Boost d'Engagement :",
            description:
              "Une photo de profil mémorable et de haute qualité peut améliorer votre identité en ligne et attirer plus d'abonnés à votre chaîne YouTube.",
          },
        },
        legal: {
          title: "Considérations Légales et de Confidentialité :",
          description:
            "Notre outil respecte la confidentialité et adhère aux Conditions de Service de YouTube. Il est important de télécharger et utiliser les photos de profil en conformité avec les lois sur les droits d'auteur. Vous êtes seul responsable de la façon dont vous utilisez les images, en vous assurant qu'elles sont utilisées de manière éthique et légale.",
        },
        faq: {
          title: "Questions Fréquemment Posées (FAQ) :",
          questions: [
            {
              question: "Cet outil est-il gratuit à utiliser ?",
              answer: "Oui ! Le Téléchargeur de Photos de Profil YouTube est complètement gratuit à utiliser.",
            },
            {
              question: "Puis-je télécharger des images de manière anonyme ?",
              answer: "Vous n'avez pas besoin de fournir d'informations personnelles.",
            },
            {
              question: "Quelle résolution d'image puis-je télécharger ?",
              answer:
                "L'outil offre diverses résolutions, y compris la qualité HD (1280x1280) et les résolutions standard comme 800x800 et 400x400.",
            },
            {
              question: "Y a-t-il une limite sur le nombre d'images que je peux télécharger ?",
              answer: "Non ! Vous pouvez télécharger autant de photos de profil YouTube que vous en avez besoin.",
            },
            {
              question: "L'outil est-il compatible avec tous les appareils ?",
              answer:
                "Oui, il fonctionne parfaitement sur les appareils Windows, Mac, Android et iOS avec un navigateur mis à jour.",
            },
          ],
        },
      },
    },
    banner: {
      description: "Téléchargez des images de bannière de vidéos YouTube en haute résolution.",
      about: {
        title: "À Propos du Téléchargeur de Bannière de Chaîne YouTube",
        description:
          "Une grande bannière peut établir l'identité de votre chaîne et engager les spectateurs immédiatement. Avec le Téléchargeur de Bannière de Chaîne YouTube, vous pouvez rapidement télécharger des bannières de n'importe quelle chaîne YouTube. Cet outil simple vous permet de récupérer des bannières. Pas besoin d'être expert en technologie, cet outil est conçu pour tout le monde. Copiez simplement n'importe quelle URL YouTube, collez-la dans l'outil, et en quelques secondes, votre bannière est prête à télécharger.",
        howToUse: {
          title: "Comment Utiliser le Téléchargeur de Bannière de Chaîne YouTube",
          steps: ["Copiez l'URL de la Vidéo YouTube", "Collez l'URL", "Cliquez sur Télécharger"],
        },
        whatIs: {
          title: "Qu'est-ce qu'une Bannière de Chaîne YouTube ?",
          description:
            "Une bannière de chaîne YouTube, également connue sous le nom d'art de chaîne, est la grande image affichée en haut d'une page de chaîne YouTube. Elle aide à transmettre la marque, l'identité et le type de contenu de votre chaîne. Une bannière bien conçue attire l'attention et donne le ton pour vos vidéos. C'est l'endroit parfait pour présenter votre logo, images et même du texte.",
        },
        benefits: {
          title: "Avantages d'une Bannière de Chaîne YouTube",
          list: [
            {
              title: "Représentation de Marque :",
              description:
                "Votre bannière est un reflet de l'identité de votre chaîne. Elle doit s'aligner avec le ton, le style et le contenu de vos vidéos.",
            },
            {
              title: "Les Premières Impressions Comptent :",
              description:
                "Comme la première chose que voient les spectateurs, votre bannière joue un rôle clé dans l'attraction d'abonnés potentiels.",
            },
            {
              title: "Construire la Confiance :",
              description:
                "La cohérence dans le design aide à créer un look professionnel, renforçant votre image de marque sur toutes les plateformes.",
            },
          ],
        },
        recommendedSize: {
          title: "Taille de Bannière Recommandée pour YouTube",
          description:
            "Pour le meilleur affichage sur tous les appareils, la taille idéale pour une bannière de chaîne YouTube est 2560 x 1440 pixels. Cela garantit que votre bannière soit nette sur les ordinateurs de bureau, laptops, tablettes et appareils mobiles. Visez toujours des images haute résolution et assurez-vous que les éléments clés sont dans la zone sûre (1546 x 423 pixels) pour éviter le recadrage sur différentes tailles d'écran.",
        },
        availableSizes: {
          title: "Tailles de Bannière Disponibles",
          list: [
            "2560 x 1440 pixels – Full HD",
            "1920 x 1080 pixels – Idéal pour les écrans de bureau",
            "1280 x 720 pixels – Parfait pour les tablettes et smartphones",
            "Diverses Autres Tailles – Pour les appareils mobiles et autres types d'écran",
          ],
        },
        download: {
          title: "Télécharger des Bannières de Chaîne YouTube",
          description:
            "Vous voulez télécharger une bannière de chaîne YouTube ? Avec notre Téléchargeur de Bannière de Chaîne YouTube, c'est simple. Collez l'URL de n'importe quelle vidéo YouTube, et notre outil récupérera la bannière en différentes tailles, prête pour que vous la sauvegardiez et l'utilisiez.",
        },
        legal: {
          title: "Téléchargement de Bannières de Chaîne YouTube – Considérations Légales",
          description:
            "Bien que télécharger des bannières YouTube pour l'inspiration ou l'usage personnel soit généralement acceptable, veuillez respecter les droits d'auteur et de propriété intellectuelle. Évitez d'utiliser des bannières téléchargées à des fins commerciales à moins d'avoir obtenu les permissions nécessaires des créateurs originaux.",
        },
        faq: {
          title: "Questions Fréquemment Posées (FAQ)",
          questions: [
            {
              question: "Qu'est-ce qu'une Bannière de Chaîne YouTube ?",
              answer:
                "Une bannière de chaîne YouTube est une grande image personnalisable affichée en haut de la page de votre chaîne. Elle sert de représentation visuelle de votre marque.",
            },
            {
              question: "Comment télécharger une bannière de chaîne YouTube ?",
              answer:
                "Pour télécharger une bannière, collez simplement l'URL de la vidéo dans notre outil, cliquez sur \"Télécharger\" et sauvegardez l'image de la bannière sur votre appareil.",
            },
            {
              question: "Puis-je télécharger des bannières de n'importe quelle vidéo ?",
              answer:
                "Oui, notre outil vous permet de télécharger des bannières de n'importe quelle vidéo YouTube disponible publiquement.",
            },
            {
              question: "Quelle est la taille recommandée pour une bannière de chaîne YouTube ?",
              answer:
                "La taille idéale est 2560 x 1440 pixels, avec une taille de fichier inférieure à 6 MB pour des temps de chargement plus rapides.",
            },
            {
              question: "Est-il légal d'utiliser des bannières téléchargées ?",
              answer:
                "Télécharger des bannières pour un usage personnel va bien, mais vous devez respecter les lois sur les droits d'auteur lors de leur utilisation commerciale.",
            },
          ],
        },
      },
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
      copyright: "© 2025 YT Tools. Tous droits réservés.",
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
      about: {
        title: "Über den YouTube Profilbild Downloader",
        description:
          "Möchten Sie YouTube-Profilbilder (auch bekannt als Kanal-Logos oder Avatare) herunterladen? Unser YouTube Profilbild Downloader ermöglicht es Ihnen, hochauflösende Profilbilder von jedem YouTube-Kanal anzuzeigen und herunterzuladen.",
        howToUse: "Wie man den YouTube Profilbild Downloader verwendet:",
        steps: [
          "Schritt 1: Fügen Sie die YouTube-Video-URL ein.",
          "Schritt 2: Wählen Sie Ihre gewünschte Auflösung aus den verfügbaren Optionen.",
          'Schritt 3: Klicken Sie auf "Herunterladen".',
        ],
        sizes: {
          title: "Verfügbare Profilbild-Größen:",
          list: [
            "1920x1920 (Ultra Hohe Qualität)",
            "1280x1280 (Hohe Qualität)",
            "800x800 (Von YouTube empfohlen)",
            "400x400 (Standard)",
            "240x240 (Klein)",
            "176x176 (Mobil)",
            "88x88 (Winzig)",
          ],
        },
        whyUse: {
          title: "Warum unseren YouTube Profilbild Downloader verwenden?",
          multipleSizes: {
            title: "Mehrere Größenoptionen:",
            description:
              "Erhalten Sie die exakte Größe, die Sie für Ihr Projekt benötigen, von winzigen 88x88 Icons bis zu hochauflösenden 1920x1920 Bildern.",
          },
          highQuality: {
            title: "Hochauflösende Bildqualität:",
            description:
              "Laden Sie die Profilbilder in derselben Auflösung herunter, wie sie auf YouTube erscheinen. Perfekt für die Verwendung in Websites, Präsentationen oder persönlichen Projekten.",
          },
          engagement: {
            title: "Engagement-Boost:",
            description:
              "Ein hochwertiges, einprägsames Profilbild kann Ihre Online-Identität verbessern und mehr Abonnenten zu Ihrem YouTube-Kanal anziehen.",
          },
        },
        legal: {
          title: "Rechtliche und Datenschutz-Überlegungen:",
          description:
            "Unser Tool respektiert die Privatsphäre und hält sich an YouTubes Nutzungsbedingungen. Es ist wichtig, Profilbilder in Übereinstimmung mit Urheberrechtsgesetzen herunterzuladen und zu verwenden. Sie sind allein verantwortlich dafür, wie Sie die Bilder verwenden, und stellen sicher, dass sie ethisch und legal verwendet werden.",
        },
        faq: {
          title: "Häufig gestellte Fragen (FAQ):",
          questions: [
            {
              question: "Ist dieses Tool kostenlos zu verwenden?",
              answer: "Ja! Der YouTube Profilbild Downloader ist völlig kostenlos zu verwenden.",
            },
            {
              question: "Kann ich Bilder anonym herunterladen?",
              answer: "Sie müssen keine persönlichen Informationen angeben.",
            },
            {
              question: "Welche Bildauflösung kann ich herunterladen?",
              answer:
                "Das Tool bietet verschiedene Auflösungen, einschließlich HD-Qualität (1280x1280) und Standardauflösungen wie 800x800 und 400x400.",
            },
            {
              question: "Gibt es ein Limit, wie viele Bilder ich herunterladen kann?",
              answer: "Nein! Sie können so viele YouTube-Profilbilder herunterladen, wie Sie benötigen.",
            },
            {
              question: "Ist das Tool mit allen Geräten kompatibel?",
              answer:
                "Ja, es funktioniert perfekt auf Windows-, Mac-, Android- und iOS-Geräten mit einem aktualisierten Browser.",
            },
          ],
        },
      },
    },
    banner: {
      description: "Laden Sie Banner-Bilder von YouTube-Videos in hoher Auflösung herunter.",
      about: {
        title: "Über den YouTube Kanal Banner Downloader",
        description:
          "Ein großartiger Banner kann die Identität Ihres Kanals etablieren und Zuschauer sofort ansprechen. Mit dem YouTube Kanal Banner Downloader können Sie schnell Banner von jedem YouTube-Kanal herunterladen. Dieses einfache Tool ermöglicht es Ihnen, Banner abzurufen. Sie müssen kein Technik-Experte sein, dieses Tool ist für jeden konzipiert. Kopieren Sie einfach eine beliebige YouTube-URL, fügen Sie sie in das Tool ein, und innerhalb von Sekunden ist Ihr Banner zum Download bereit.",
        howToUse: {
          title: "Wie man den YouTube Kanal Banner Downloader verwendet",
          steps: ["Kopieren Sie die YouTube-Video-URL", "Fügen Sie die URL ein", "Klicken Sie auf Herunterladen"],
        },
        whatIs: {
          title: "Was ist ein YouTube Kanal Banner?",
          description:
            "Ein YouTube-Kanal-Banner, auch bekannt als Kanal-Art, ist das große Bild, das oben auf einer YouTube-Kanal-Seite angezeigt wird. Es hilft dabei, die Marke, Identität und den Inhaltstyp Ihres Kanals zu vermitteln. Ein gut gestalteter Banner zieht Aufmerksamkeit auf sich und gibt den Ton für Ihre Videos vor. Es ist der perfekte Ort, um Ihr Logo, Bilder und sogar etwas Text zu präsentieren.",
        },
        benefits: {
          title: "Vorteile eines YouTube Kanal Banners",
          list: [
            {
              title: "Markenrepräsentation:",
              description:
                "Ihr Banner ist ein Spiegelbild der Identität Ihres Kanals. Er sollte mit dem Ton, Stil und Inhalt Ihrer Videos übereinstimmen.",
            },
            {
              title: "Erste Eindrücke zählen:",
              description:
                "Als das erste, was Zuschauer sehen, spielt Ihr Banner eine Schlüsselrolle bei der Anziehung potenzieller Abonnenten.",
            },
            {
              title: "Vertrauen aufbauen:",
              description:
                "Konsistenz im Design hilft dabei, ein professionelles Aussehen zu schaffen und Ihr Markenimage auf allen Plattformen zu verstärken.",
            },
          ],
        },
        recommendedSize: {
          title: "Empfohlene Banner-Größe für YouTube",
          description:
            "Für die beste Anzeige auf allen Geräten ist die ideale Größe für einen YouTube-Kanal-Banner 2560 x 1440 Pixel. Dies stellt sicher, dass Ihr Banner auf Desktops, Laptops, Tablets und mobilen Geräten scharf aussieht. Streben Sie immer nach hochauflösenden Bildern und stellen Sie sicher, dass wichtige Elemente innerhalb des sicheren Bereichs (1546 x 423 Pixel) liegen, um Beschneidungen bei verschiedenen Bildschirmgrößen zu vermeiden.",
        },
        availableSizes: {
          title: "Verfügbare Banner-Größen",
          list: [
            "2560 x 1440 Pixel – Full HD",
            "1920 x 1080 Pixel – Ideal für Desktop-Bildschirme",
            "1280 x 720 Pixel – Perfekt für Tablets und Smartphones",
            "Verschiedene andere Größen – Für mobile Geräte und andere Bildschirmtypen",
          ],
        },
        download: {
          title: "YouTube Kanal Banner herunterladen",
          description:
            "Möchten Sie einen YouTube-Kanal-Banner herunterladen? Mit unserem YouTube Kanal Banner Downloader ist es einfach. Fügen Sie die URL eines beliebigen YouTube-Videos ein, und unser Tool ruft den Banner in verschiedenen Größen ab, bereit zum Speichern und Verwenden.",
        },
        legal: {
          title: "Herunterladen von YouTube Kanal Bannern – Rechtliche Überlegungen",
          description:
            "Während das Herunterladen von YouTube-Bannern zur Inspiration oder für den persönlichen Gebrauch im Allgemeinen akzeptabel ist, respektieren Sie bitte Urheberrechte und geistige Eigentumsrechte. Vermeiden Sie die Verwendung heruntergeladener Banner für kommerzielle Zwecke, es sei denn, Sie haben die notwendigen Genehmigungen von den ursprünglichen Erstellern erhalten.",
        },
        faq: {
          title: "Häufig gestellte Fragen (FAQ)",
          questions: [
            {
              question: "Was ist ein YouTube Kanal Banner?",
              answer:
                "Ein YouTube-Kanal-Banner ist ein großes, anpassbares Bild, das oben auf der Seite Ihres Kanals angezeigt wird. Es dient als visuelle Darstellung Ihrer Marke.",
            },
            {
              question: "Wie lade ich einen YouTube-Kanal-Banner herunter?",
              answer:
                'Um einen Banner herunterzuladen, fügen Sie einfach die Video-URL in unser Tool ein, klicken Sie auf "Herunterladen" und speichern Sie das Banner-Bild auf Ihrem Gerät.',
            },
            {
              question: "Kann ich Banner von jedem Video herunterladen?",
              answer:
                "Ja, unser Tool ermöglicht es Ihnen, Banner von jedem öffentlich verfügbaren YouTube-Video herunterzuladen.",
            },
            {
              question: "Was ist die empfohlene Größe für einen YouTube-Kanal-Banner?",
              answer:
                "Die ideale Größe ist 2560 x 1440 Pixel, mit einer Dateigröße unter 6 MB für schnellere Ladezeiten.",
            },
            {
              question: "Ist es legal, heruntergeladene Banner zu verwenden?",
              answer:
                "Das Herunterladen von Bannern für den persönlichen Gebrauch ist in Ordnung, aber Sie müssen Urheberrechtsgesetze respektieren, wenn Sie sie kommerziell verwenden.",
            },
          ],
        },
      },
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
      copyright: "© 2025 YT Tools. Alle Rechte vorbehalten.",
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
      about: {
        title: "Sobre o Baixador de Fotos de Perfil do YouTube",
        description:
          "Procurando baixar fotos de perfil do YouTube (também conhecidas como logos de canal ou avatares)? Nosso Baixador de Fotos de Perfil do YouTube permite que você visualize e baixe imagens de perfil de alta resolução de qualquer canal do YouTube.",
        howToUse: "Como Usar o Baixador de Fotos de Perfil do YouTube:",
        steps: [
          "Passo 1: Cole a URL do vídeo do YouTube.",
          "Passo 2: Selecione sua resolução desejada das opções disponíveis.",
          'Passo 3: Clique em "Baixar".',
        ],
        sizes: {
          title: "Tamanhos de Foto de Perfil Disponíveis:",
          list: [
            "1920x1920 (Ultra Alta Qualidade)",
            "1280x1280 (Alta Qualidade)",
            "800x800 (Recomendado pelo YouTube)",
            "400x400 (Padrão)",
            "240x240 (Pequeno)",
            "176x176 (Móvel)",
            "88x88 (Minúsculo)",
          ],
        },
        whyUse: {
          title: "Por Que Usar Nosso Baixador de Fotos de Perfil do YouTube?",
          multipleSizes: {
            title: "Múltiplas Opções de Tamanho:",
            description:
              "Obtenha o tamanho exato que você precisa para seu projeto, desde ícones minúsculos de 88x88 até imagens de alta resolução de 1920x1920.",
          },
          highQuality: {
            title: "Qualidade de Imagem de Alta Resolução:",
            description:
              "Baixe as fotos de perfil na mesma resolução que aparecem no YouTube. Perfeito para usar em sites, apresentações ou projetos pessoais.",
          },
          engagement: {
            title: "Impulso de Engajamento:",
            description:
              "Uma foto de perfil memorável e de alta qualidade pode melhorar sua identidade online e atrair mais inscritos para seu canal do YouTube.",
          },
        },
        legal: {
          title: "Considerações Legais e de Privacidade:",
          description:
            "Nossa ferramenta respeita a privacidade e adere aos Termos de Serviço do YouTube. É importante baixar e usar fotos de perfil em conformidade com as leis de direitos autorais. Você é o único responsável por como usa as imagens, garantindo que sejam usadas de forma ética e legal.",
        },
        faq: {
          title: "Perguntas Frequentes (FAQ):",
          questions: [
            {
              question: "Esta ferramenta é gratuita?",
              answer: "Sim! O Baixador de Fotos de Perfil do YouTube é totalmente gratuito.",
            },
            {
              question: "Posso baixar imagens anonimamente?",
              answer: "Você não precisa fornecer nenhuma informação pessoal.",
            },
            {
              question: "Qual resolução de imagem posso baixar?",
              answer:
                "A ferramenta oferece várias resoluções, incluindo qualidade HD (1280x1280) e resoluções padrão como 800x800 e 400x400.",
            },
            {
              question: "Existe um limite para quantas imagens posso baixar?",
              answer: "Não! Você pode baixar quantas fotos de perfil do YouTube precisar.",
            },
            {
              question: "A ferramenta é compatível com todos os dispositivos?",
              answer:
                "Sim, funciona perfeitamente em dispositivos Windows, Mac, Android e iOS com um navegador atualizado.",
            },
          ],
        },
      },
    },
    banner: {
      description: "Baixe imagens de banner de vídeos do YouTube em alta resolução.",
      about: {
        title: "Sobre o Baixador de Banner de Canal do YouTube",
        description:
          "Um ótimo banner pode estabelecer a identidade do seu canal e engajar os espectadores imediatamente. Com o Baixador de Banner de Canal do YouTube, você pode baixar rapidamente banners de qualquer canal do YouTube. Esta ferramenta simples permite que você recupere banners. Não precisa ser um expert em tecnologia, esta ferramenta é projetada para todos. Basta copiar qualquer URL do YouTube, colá-la na ferramenta e, em segundos, seu banner estará pronto para download.",
        howToUse: {
          title: "Como Usar o Baixador de Banner de Canal do YouTube",
          steps: ["Copie a URL do Vídeo do YouTube", "Cole a URL", "Clique em Baixar"],
        },
        whatIs: {
          title: "O que é um Banner de Canal do YouTube?",
          description:
            "Um banner de canal do YouTube, também conhecido como arte do canal, é a imagem grande exibida na parte superior da página de um canal do YouTube. Ele ajuda a transmitir a marca, identidade e tipo de conteúdo do seu canal. Um banner bem projetado chama a atenção e define o tom para seus vídeos. É o lugar perfeito para exibir seu logotipo, imagens e até mesmo algum texto.",
        },
        benefits: {
          title: "Benefícios de um Banner de Canal do YouTube",
          list: [
            {
              title: "Representação da Marca:",
              description:
                "Seu banner é um reflexo da identidade do seu canal. Ele deve estar alinhado com o tom, estilo e conteúdo dos seus vídeos.",
            },
            {
              title: "Primeiras Impressões Importam:",
              description:
                "Como a primeira coisa que os espectadores veem, seu banner desempenha um papel fundamental na atração de potenciais inscritos.",
            },
            {
              title: "Construindo Confiança:",
              description:
                "A consistência no design ajuda a criar uma aparência profissional, reforçando a imagem da sua marca em todas as plataformas.",
            },
          ],
        },
        recommendedSize: {
          title: "Tamanho de Banner Recomendado para o YouTube",
          description:
            "Para a melhor exibição em todos os dispositivos, o tamanho ideal para um banner de canal do YouTube é 2560 x 1440 pixels. Isso garante que seu banner pareça nítido em desktops, laptops, tablets e dispositivos móveis. Sempre procure imagens de alta resolução e certifique-se de que os elementos-chave estejam dentro da área segura (1546 x 423 pixels) para evitar cortes em diferentes tamanhos de tela.",
        },
        availableSizes: {
          title: "Tamanhos de Banner Disponíveis",
          list: [
            "2560 x 1440 pixels – Full HD",
            "1920 x 1080 pixels – Ideal para telas de desktop",
            "1280 x 720 pixels – Perfeito para tablets e smartphones",
            "Vários Outros Tamanhos – Para dispositivos móveis e outros tipos de tela",
          ],
        },
        download: {
          title: "Baixar Banners de Canal do YouTube",
          description:
            "Quer baixar um banner de canal do YouTube? Com nosso Baixador de Banner de Canal do YouTube, é simples. Cole a URL de qualquer vídeo do YouTube, e nossa ferramenta recuperará o banner em diferentes tamanhos, pronto para você salvar e usar.",
        },
        legal: {
          title: "Baixando Banners de Canal do YouTube – Considerações Legais",
          description:
            "Embora o download de banners do YouTube para inspiração ou uso pessoal seja geralmente aceitável, por favor, respeite os direitos autorais e de propriedade intelectual. Evite usar banners baixados para fins comerciais, a menos que você tenha obtido as permissões necessárias dos criadores originais.",
        },
        faq: {
          title: "Perguntas Frequentes (FAQ)",
          questions: [
            {
              question: "O que é um Banner de Canal do YouTube?",
              answer:
                "Um banner de canal do YouTube é uma imagem grande e personalizável exibida na parte superior da página do seu canal. Ele serve como uma representação visual da sua marca.",
            },
            {
              question: "Como faço para baixar um banner de canal do YouTube?",
              answer:
                'Para baixar um banner, basta colar a URL do vídeo em nossa ferramenta, clicar em "Baixar" e salvar a imagem do banner no seu dispositivo.',
            },
            {
              question: "Posso baixar banners de qualquer vídeo?",
              answer:
                "Sim, nossa ferramenta permite que você baixe banners de qualquer vídeo do YouTube disponível publicamente.",
            },
            {
              question: "Qual é o tamanho recomendado para um banner de canal do YouTube?",
              answer:
                "O tamanho ideal é 2560 x 1440 pixels, com um tamanho de arquivo inferior a 6 MB para tempos de carregamento mais rápidos.",
            },
            {
              question: "É legal usar banners baixados?",
              answer:
                "Baixar banners para uso pessoal é permitido, mas você deve respeitar as leis de direitos autorais ao usá-los comercialmente.",
            },
          ],
        },
      },
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
      copyright: "© 2025 YT Tools. Todos os direitos reservados.",
      disclaimer: "Esta ferramenta não é afiliada ao YouTube. YouTube é uma marca registrada do Google Inc.",
    },
  },
}
