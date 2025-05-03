import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        convert: 'Convert',
        contact: 'Contact'
      },
      home: {
        title: 'B2T Converter',
        subtitle: 'This app converts between binary, decimal, hexadecimal and text.',
        getStarted: 'Get Started'
      },
      convert: {
        inputPlaceholder: 'Enter your input here',
        outputPlaceholder: 'Output will appear here',
        convertButton: 'Convert →',
        copyButton: 'Copy',
        copied: 'Copied',
        options: {
          text: 'Text',
          binary: 'Binary',
          hex: 'Hexadecimal',
          decimal: 'Decimal'
        }
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Have questions? We\'re here to help!',
        form: {
          name: 'Full Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          send: 'Send Message',
          success: 'Message sent successfully!',
          error: 'Failed to send message. Please try again.',
          errors: {
            nameRequired: 'Name is required',
            nameLength: 'Name must be at least 2 characters',
            emailRequired: 'Email is required', 
            emailInvalid: 'Please enter a valid email',
            messageRequired: 'Message is required',
            messageLength: 'Message must be at least 10 characters'
          }
        },
        subjectOptions: {
          general: 'General Inquiry',
          support: 'Technical Support',
          feedback: 'Feedback'
        }
      },
      footer: {
        about: {
          title: 'B2T',
          description: 'B2T Converter is an online Binary, Hex, Deci, Text conversion tool'
        },
        help: {
          title: 'Help & Support',
          contact: 'Contact Us',
          privacy: 'Privacy Policy'
        },
        connect: {
          title: 'Connect With Us'
        },
        copyright: '© 2024 | B2T | All rights reserved.'
      },
      notFound: {
        title: '404 - Page Not Found',
        message: 'The page you are looking for doesn\'t exist or has been moved.',
        homeButton: 'Go Home',
      },
      privacy: {
        title: 'Privacy Policy',
        introduction: {
          title: 'Introduction',
          content: 'Welcome to B2T Converter\'s Privacy Policy. We respect your privacy and are committed to protecting your personal data.'
        },
        collect: {
          title: 'Information We Collect',
          items: [
            'Contact form submissions (name, email, and message content)',
            'Usage data for website optimization',
            'Local storage preferences (like theme settings)'
          ]
        },
        usage: {
          title: 'How We Use Your Information',
          items: [
            'To respond to your inquiries and support requests',
            'To improve our website and services',
            'To remember your preferences'
          ]
        },
        security: {
          title: 'Data Security',
          content: 'We implement appropriate security measures to protect your personal information. All conversions are performed locally in your browser, and we do not store any converted data.'
        },
        cookies: {
          title: 'Cookies and Local Storage',
          content: 'We use local storage to save your theme preferences. No tracking cookies are used on this website.'
        },
        thirdParty: {
          title: 'Third Party Services',
          content: 'We use Web3Forms for contact form submissions. Please review their privacy policy for more information.'
        },
        rights: {
          title: 'Your Rights',
          content: 'You have the right to access, correct, or delete your personal information. Contact us for any privacy-related requests.'
        },
        updates: {
          title: 'Policy Updates',
          content: 'We may update this privacy policy from time to time. Check this page regularly for changes.'
        },
        contact: {
          title: 'Contact Us',
          content: 'If you have any questions about this privacy policy, please contact us through our contact form.'
        }
      },
      errorBoundary: {
        title: 'Something went wrong',
        message: 'Please try refreshing the page or contact support if the problem persists.',
        refreshButton: 'Refresh Page'
      },
      infoSection: {
        numbersMeaning: {
          title: "What do these numbers mean?",
          binary: {
            title: "Binary (Base-2)",
            description: [
              "The computer's language - just 0s and 1s!",
              "Like a light switch: ON (1) or OFF (0)",
              "Quick example: Hello → 01001000 01100101 01101100 01101100 01101111"
            ]
          },
          hexadecimal: {
            title: "Hexadecimal (Base-16)",
            description: [
              "A shorter way to write binary numbers using 0-9 and A-F",
              "Makes long binary numbers easier to read",
              "Quick example: Hello → 48 65 6C 6C 6F"
            ]
          },
          decimal: {
            title: "Decimal (Base-10)",
            description: [
              "Our everyday numbers (0-9)",
              "What we use to count and do math",
              "Quick example: Hello → 72 101 108 108 111"
            ]
          }
        },
        whyChoose: {
          title: "Why Choose B2T?",
          simple: {
            title: "Simple & Intuitive",
            description: [
              "Clean, modern interface",
              "No complex setup needed",
              "Start converting instantly!"
            ]
          },
          learn: {
            title: "Learn As You Convert",
            description: [
              "Understanding different number systems",
              "See conversions in real-time",
              "Perfect for students and developers"
            ]
          },
          fast: {
            title: "Fast & Efficient",
            description: [
              "Instant conversions",
              "No server requests needed",
              "Works offline"
            ]
          }
        },
        additionalFeatures: {
          title: "Additional Features",
          darkMode: {
            title: "Dark Mode",
            description: [
              "Easy on the eyes",
              "Toggle between light and dark themes",
              "Saves your preference"
            ]
          },
          responsiveDesign: {
            title: "Responsive Design",
            description: [
              "Works on all devices",
              "Adapts to any screen size",
              "Mobile-friendly interface"
            ]
          },
          copyToClipboard: {
            title: "Copy to Clipboard",
            description: [
              "One-click copying",
              "Quick and convenient",
              "Copy results instantly"
            ]
          }
        }
      }
    }
  },
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        convert: 'Convertir',
        contact: 'Contact'
      },
      home: {
        title: 'Convertisseur B2T',
        subtitle: 'Cette application convertit entre binaire, décimal, hexadécimal et texte.',
        getStarted: 'Commencer'
      },
      convert: {
        inputPlaceholder: 'Entrez votre texte ici',
        outputPlaceholder: 'Le résultat apparaîtra ici',
        convertButton: 'Convertir →',
        copyButton: 'Copier',
        copied: 'Copié',
        options: {
          text: 'Texte',
          binary: 'Binaire',
          hex: 'Hexadécimal',
          decimal: 'Décimal'
        }
      },
      contact: {
        title: 'Contactez-nous',
        subtitle: 'Des questions ? Nous sommes là pour vous aider !',
        form: {
          name: 'Nom complet',
          email: 'Email',
          subject: 'Sujet',
          message: 'Message',
          send: 'Envoyer le message',
          success: 'Message envoyé avec succès !',
          error: 'Échec de l\'envoi du message. Veuillez réessayer.',
          errors: {
            nameRequired: 'Le nom est requis',
            nameLength: 'Le nom doit contenir au moins 2 caractères',
            emailRequired: 'L\'email est requis',
            emailInvalid: 'Veuillez entrer un email valide',
            messageRequired: 'Le message est requis',
            messageLength: 'Le message doit contenir au moins 10 caractères'
          }
        },
        subjectOptions: {
          general: 'Demande Générale',
          support: 'Support Technique',
          feedback: 'Retour d\'Expérience'
        }
      },
      footer: {
        about: {
          title: 'B2T',
          description: 'B2T Convertisseur est un outil de conversion en ligne pour Binaire, Hex, Déci, Texte'
        },
        help: {
          title: 'Aide & Support',
          contact: 'Nous contacter',
          privacy: 'Politique de confidentialité'
        },
        connect: {
          title: 'Suivez-nous'
        },
        copyright: '© 2024 | B2T | Tous droits réservés.'
      },
      notFound: {
        title: '404 - Page Non Trouvée',
        message: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
        homeButton: 'Retour à l\'Accueil'
      },
      privacy: {
        title: 'Politique de Confidentialité',
        introduction: {
          title: 'Introduction',
          content: 'Bienvenue sur la politique de confidentialité de B2T Converter. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles.'
        },
        collect: {
          title: 'Informations Collectées',
          items: [
            'Soumissions de formulaire de contact (nom, email et contenu du message)',
            'Données d\'utilisation pour l\'optimisation du site',
            'Préférences de stockage local (comme les paramètres de thème)'
          ]
        },
        usage: {
          title: 'Utilisation de Vos Informations',
          items: [
            'Pour répondre à vos demandes et demandes de support',
            'Pour améliorer notre site web et nos services',
            'Pour mémoriser vos préférences'
          ]
        },
        security: {
          title: 'Sécurité des Données',
          content: 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles. Toutes les conversions sont effectuées localement dans votre navigateur et nous ne stockons aucune donnée convertie.'
        },
        cookies: {
          title: 'Cookies et Stockage Local',
          content: 'Nous utilisons le stockage local pour sauvegarder vos préférences de thème. Aucun cookie de suivi n\'est utilisé sur ce site.'
        },
        thirdParty: {
          title: 'Services Tiers',
          content: 'Nous utilisons Web3Forms pour les soumissions de formulaires de contact. Veuillez consulter leur politique de confidentialité pour plus d\'informations.'
        },
        rights: {
          title: 'Vos Droits',
          content: 'Vous avez le droit d\'accéder, de corriger ou de supprimer vos informations personnelles. Contactez-nous pour toute demande liée à la confidentialité.'
        },
        updates: {
          title: 'Mises à Jour de la Politique',
          content: 'Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Consultez régulièrement cette page pour les changements.'
        },
        contact: {
          title: 'Nous Contacter',
          content: 'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter via notre formulaire de contact.'
        }
      },
      errorBoundary: {
        title: 'Une erreur est survenue',
        message: 'Veuillez rafraîchir la page ou contacter le support si le problème persiste.',
        refreshButton: 'Rafraîchir la page'
      },
      infoSection: {
        numbersMeaning: {
          title: "Que signifient ces nombres ?",
          binary: {
            title: "Binaire (Base-2)",
            description: [
              "Le langage de l'ordinateur - juste des 0 et des 1 !",
              "Comme un interrupteur : MARCHE (1) ou ARRÊT (0)",
              "Exemple rapide : Hello → 01001000 01100101 01101100 01101100 01101111"
            ]
          },
          hexadecimal: {
            title: "Hexadécimal (Base-16)",
            description: [
              "Une façon plus courte d'écrire les nombres binaires en utilisant 0-9 et A-F",
              "Rend les longs nombres binaires plus faciles à lire",
              "Exemple rapide : Hello → 48 65 6C 6C 6F"
            ]
          },
          decimal: {
            title: "Décimal (Base-10)",
            description: [
              "Nos nombres quotidiens (0-9)",
              "Ce que nous utilisons pour compter et faire des mathématiques",
              "Exemple rapide : Hello → 72 101 108 108 111"
            ]
          }
        },
        whyChoose: {
          title: "Pourquoi choisir B2T ?",
          simple: {
            title: "Simple & Intuitif",
            description: [
              "Interface claire et moderne",
              "Pas de configuration complexe",
              "Commencez à convertir instantanément !"
            ]
          },
          learn: {
            title: "Apprenez en Convertissant",
            description: [
              "Comprendre différents systèmes numériques",
              "Voir les conversions en temps réel",
              "Parfait pour les étudiants et les développeurs"
            ]
          },
          fast: {
            title: "Rapide & Efficace",
            description: [
              "Conversions instantanées",
              "Aucune requête serveur nécessaire",
              "Fonctionne hors ligne"
            ]
          }
        },
        additionalFeatures: {
          title: "Fonctionnalités Supplémentaires",
          darkMode: {
            title: "Mode Sombre",
            description: [
              "Agréable pour les yeux",
              "Basculez entre les thèmes clair et sombre",
              "Sauvegarde vos préférences"
            ]
          },
          responsiveDesign: {
            title: "Design Responsive",
            description: [
              "Fonctionne sur tous les appareils",
              "S'adapte à toutes les tailles d'écran",
              "Interface adaptée aux mobiles"
            ]
          },
          copyToClipboard: {
            title: "Copier dans le Presse-papiers",
            description: [
              "Copie en un clic",
              "Rapide et pratique",
              "Copiez les résultats instantanément"
            ]
          }
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        home: 'الرئيسية',
        convert: 'تحويل',
        contact: 'اتصل بنا'
      },
      home: {
        title: 'محول B2T',
        subtitle: 'يقوم هذا التطبيق بالتحويل بين الثنائي والعشري والسداسي عشر والنص ',
        getStarted: 'ابدأ الآن'
      },
      convert: {
        inputPlaceholder: 'أدخل النص هنا',
        outputPlaceholder: 'سيظهر الناتج هنا',
        convertButton: 'تحويل ←',
        copyButton: 'نسخ',
        copied: 'تم النسخ',
        options: {
          text: 'نص',
          binary: 'ثنائي',
          hex: 'سداسي عشري',
          decimal: 'عشري'
        }
      },
      contact: {
        title: 'اتصل بنا',
        subtitle: 'لديك أسئلة ؟ نحن هنا للمساعدة !',
        form: {
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          subject: 'الموضوع',
          message: 'الرسالة',
          send: 'إرسال الرسالة',
          success: 'تم إرسال الرسالة بنجاح!',
          error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
          errors: {
            nameRequired: 'الاسم مطلوب',
            nameLength: 'يجب أن يكون الاسم حرفين على الأقل',
            emailRequired: 'البريد الإلكتروني مطلوب',
            emailInvalid: 'يرجى إدخال بريد إلكتروني صحيح',
            messageRequired: 'الرسالة مطلوبة',
            messageLength: 'يجب أن تكون الرسالة 10 أحرف على الأقل'
          }
        },
        subjectOptions: {
          general: 'استفسار عام',
          support: 'الدعم التقني',
          feedback: 'تعليقات وملاحظات'
        }
      },
      footer: {
        about: {
          title: 'B2T',
          description: 'B2T محول هو أداة تحويل عبر الإنترنت للثنائي والسداسي عشري والعشري والنص'
        },
        help: {
          title: 'المساعدة والدعم',
          contact: 'اتصل بنا',
          privacy: 'سياسة الخصوصية'
        },
        connect: {
          title: 'تواصل معنا'
        },
        copyright: '© 2024 | B2T | جميع الحقوق محفوظة.'
      },
      notFound: {
        title: '404 - الصفحة غير موجودة',
        message: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
        homeButton: 'العودة للرئيسية'
      },
      privacy: {
        title: 'سياسة الخصوصية',
        introduction: {
          title: 'مقدمة',
          content: 'مرحباً بكم في سياسة الخصوصية الخاصة بـ B2T. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية.'
        },
        collect: {
          title: 'المعلومات التي نجمعها',
          items: [
            'إرسال نماذج الاتصال (الاسم والبريد الإلكتروني ومحتوى الرسالة)',
            'بيانات الاستخدام لتحسين الموقع',
            'تفضيلات التخزين المحلي (مثل إعدادات السمة)'
          ]
        },
        usage: {
          title: 'كيفية استخدام معلوماتك',
          items: [
            'للرد على استفساراتك وطلبات الدعم',
            'لتحسين موقعنا وخدماتنا',
            'لتذكر تفضيلاتك'
          ]
        },
        security: {
          title: 'أمن البيانات',
          content: 'نقوم بتنفيذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية. يتم إجراء جميع التحويلات محليًا في متصفحك ، ولا نقوم بتخزين أي بيانات محولة.'
        },
        cookies: {
          title: 'ملفات تعريف الارتباط والتخزين المحلي',
          content: 'نستخدم التخزين المحلي لحفظ تفضيلات السمة الخاصة بك. لا يتم استخدام ملفات تعريف ارتباط التتبع على هذا الموقع.'
        },
        thirdParty: {
          title: 'خدمات الطرف الثالث',
          content: 'نحن نستخدم Web3Forms لتقديم نماذج الاتصال. يرجى مراجعة سياسة الخصوصية الخاصة بهم لمزيد من المعلومات.'
        },
        rights: {
          title: 'حقوقك',
          content: 'لديك الحق في الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها. اتصل بنا لأي طلبات متعلقة بالخصوصية.'
        },
        updates: {
          title: 'تحديثات السياسة',
          content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. تحقق من هذه الصفحة بانتظام للتغييرات.'
        },
        contact: {
          title: 'اتصل بنا',
          content: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا من خلال نموذج الاتصال.'
        }
      },
      errorBoundary: {
        title: 'حدث خطأ ما',
        message: 'يرجى تحديث الصفحة أو الاتصال بالدعم إذا استمرت المشكلة.',
        refreshButton: 'تحديث الصفحة'
      },
      infoSection: {
        numbersMeaning: {
          title: "ماذا تعني هذه الأرقام؟",
          binary: {
            title: "ثنائي (قاعدة-2)",
            description: [
              "لغة الكمبيوتر - فقط 0 و 1",
              "مثل مفتاح الإضاءة: مضاء (1) أو مطفأ (0)",
              "مثال سريع: Hello → 01001000 01100101 01101100 01101100 01101111"
            ]
          },
          hexadecimal: {
            title: "سداسي عشري (قاعدة-16)",
            description: [
              "طريقة أقصر لكتابة الأرقام الثنائية باستخدام 0-9 و A-F",
              "يجعل الأرقام الثنائية الطويلة أسهل للقراءة",
              "مثال سريع: Hello → 48 65 6C 6C 6F"
            ]
          },
          decimal: {
            title: "عشري (قاعدة-10)",
            description: [
              "أرقامنا اليومية (0-9)",
              "ما نستخدمه للعد والحساب",
              "مثال سريع: Hello → 72 101 108 108 111"
            ]
          }
        },
        whyChoose: {
          title: "لماذا تختار B2T؟",
          simple: {
            title: "بسيط وبديهي",
            description: [
              "واجهة نظيفة وحديثة",
              "لا يحتاج إلى إعداد معقد",
              "ابدأ التحويل فورًا"
            ]
          },
          learn: {
            title: "تعلم أثناء التحويل",
            description: [
              "فهم أنظمة الأعداد المختلفة",
              "رؤية التحويلات في الوقت الفعلي",
              "مثالي للطلاب والمطورين"
            ]
          },
          fast: {
            title: "سريع وفعال",
            description: [
              "تحويلات فورية",
              "لا حاجة لطلبات الخادم",
              "يعمل دون اتصال بالإنترنت"
            ]
          }
        },
        additionalFeatures: {
          title: "ميزات إضافية",
          darkMode: {
            title: "الوضع الداكن",
            description: [
              "مريح للعين",
              "التبديل بين السمات الفاتحة والداكنة",
              "يحفظ تفضيلاتك"
            ]
          },
          responsiveDesign: {
            title: "تصميم متجاوب",
            description: [
              "يعمل على جميع الأجهزة",
              "يتكيف مع أي حجم شاشة",
              "واجهة مناسبة للجوال"
            ]
          },
          copyToClipboard: {
            title: "نسخ إلى الحافظة",
            description: [
              "نسخ بنقرة واحدة",
              "سريع ومريح",
              "نسخ النتائج فورًا"
            ]
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;