export const personalInfo = {
  name: "Mahmoud Samy Heikal",
  title: {
    en: "Software Engineer | Backend Developer (PHP/Laravel) | Full Stack Developer",
    ar: "مهندس برمجيات | مطور خلفي (PHP/Laravel) | مطور متكامل"
  },
  location: {
    en: "Alexandria, Egypt",
    ar: "الإسكندرية، مصر"
  },
  email: "m.samy1011997@gmail.com",
  phone: "01017011391",
  linkedin: "https://www.linkedin.com/in/mahmoud-heikal/",
  github: "https://github.com/MSH38",
  hackerrank: "https://www.hackerrank.com/profile/Mahmoud_Heikal",
  bio: {
    en: "Passionate Software Engineer with expertise in Backend Development using PHP and Laravel. I build scalable, efficient systems and love solving complex problems. With experience across full-stack development, I bring ideas to life through clean, maintainable code.",
    ar: "مهندس برمجيات شغوف بخبرة في تطوير الواجهة الخلفية باستخدام PHP و Laravel. أقوم ببناء أنظمة قابلة للتطوير وفعالة وأحب حل المشكلات المعقدة. مع خبرة في التطوير الكامل، أقوم بتحويل الأفكار إلى واقع من خلال كود نظيف وقابل للصيانة."
  }
};

export const skills = [
  "PHP", "Laravel", "WordPress", "MySQL", "PostgreSQL", "SQLite",
  "RESTful API", "ERD", "JavaScript", "JQuers", "Alpine.js", "DataTables", "HTML", "CSS", "Bootstrap",
  "Git", "GitHub", "Linux", "Clean Architecture", "Go", "Python", "C++"
];

export const experiences = [
  {
    company: "Shahbandr",
    position: {
      en: "Backend Developer",
      ar: "مطور خلفي"
    },
    period: {
      en: "May 2024 - Present",
      ar: "مايو 2024 - حتى الآن"
    },
    // description: {
    //   en: "Developing and maintaining backend systems for white-label API solutions, implementing scalable architecture and RESTful APIs.",
    //   ar: "تطوير وصيانة أنظمة الواجهة الخلفية لحلول API المخصصة، وتنفيذ بنية قابلة للتطوير وواجهات برمجية RESTful."
    // }
    description: {
      en: `
          Since May 2024, I have been working as a Backend Developer at Shahbandr.<br>
          - Focused on Laravel, PHP Native, WordPress, MySQL, and SQLite.<br>
          - Built and customized WordPress and WooCommerce plugins to extend platform functionality.<br>
          - Worked on Laravel-based projects using PHP, Laravel, HTML, CSS, JavaScript, jQuery, Alpine.js, DataTables, and MySQL.<br>
          - Developed high-quality backend solutions, integrated new features, and implemented APIs and webhook functionalities.<br>
          - Rebranded multiple WooCommerce payment plugins including Amazon Pay, Moyasar, Tappy, Tamara, Kashier, Paylink, ClickPay, Stripe, and Paymob to enhance the Shahbandr payment ecosystem.<br>
          - Rebranded and enhanced WooCommerce plugins such as Order Import/Export, WooCommerce Memberships, Weight-Based Shipping, and Facebook for WooCommerce.<br>
          - Created internal documentation for the complete Shahbandr Framework to improve maintainability and onboarding efficiency.
            `,
      ar: `
        منذ مايو 2024، أعمل كمطور خلفي في شركة شهبندر (Shahbandr).<br>
        - أركز على Laravel وPHP وWordPress وMySQL وSQLite.<br>
        - قمت ببناء وتخصيص إضافات ووكومرس ووردبريس لتوسيع وظائف المنصة.<br>
        - عملت على مشاريع Laravel باستخدام PHP وLaravel وHTML وCSS وJavaScript وjQuery وAlpine.js وDataTables وMySQL.<br>
        - طورت حلولًا قوية للواجهة الخلفية ودمجت ميزات جديدة وطبقت واجهات API وWebhook.<br>
        - أعدت تصميم (Rebranding) العديد من إضافات الدفع لووكومرس مثل Amazon Pay وMoyasar وTappy وTamara وKashier وPaylink وClickPay وStripe وPaymob لتحسين نظام الدفع في منظومة شهبندر.<br>
        - أعدت تصميم إضافات أخرى مثل Order Import/Export وWooCommerce Memberships وWeight-Based Shipping وFacebook for WooCommerce.<br>
        - أنشأت توثيقًا داخليًا شاملاً لإطار عمل شهبندر (Shahbandr Framework) لتحسين قابلية الصيانة وكفاءة الانضمام للفريق.
          `
    }

  },
  //   {
  //     company: "Blue Worldwide",
  //     position: {
  //       en: "Full Stack Developer",
  //       ar: "مطور متكامل"
  //     },
  //     period: {
  //       en: "January 2024 - April 2024",
  //       ar: "يناير 2024 - أبريل 2024"
  //     },
  //     // description: {
  //     //   en: "Built multi-vendor e-commerce platform with complete frontend and backend integration, payment gateways, and inventory management.",
  //     //   ar: "بناء منصة تجارة إلكترونية متعددة البائعين مع تكامل كامل للواجهة الأمامية والخلفية وبوابات الدفع وإدارة المخزون."
  //     // }
  //     description: {
  //       en: `
  // From July to September 2025, I worked as a part-time full stack developer at Blue Worldwide.
  // - Developing the internal “Affiliate dashboard” with a focus on performance, scalability, and clean architecture.
  // - Built and maintained backend features using PHP, Laravel, and PostgreSQL following the Repository Pattern.
  // - Delivered modern, responsive UIs using Filament, Tailwind CSS, HTML, CSS, jQuery, and AJAX.
  // - Collaborated through Jira and GitHub with proper branching, reviews, and CI-friendly practices.
  // - Stack used: Laravel, PHP, PostgreSQL, Filament, Tailwind CSS, jQuery, AJAX, GitHub, Jira.
  //       `,
  //       ar: `
  // من يوليو إلى سبتمبر 2025، عملت كمطور متكامل بدوام جزئي لدى Blue Worldwide.
  // - تطوير “لوحة تحكم الشركاء – Affiliate dashboard” مع التركيز على الأداء والقابلية للتوسّع والهيكلية النظيفة.
  // - بناء وصيانة ميزات الواجهة الخلفية باستخدام PHP وLaravel وPostgreSQL وفق نمط Repository.
  // - تنفيذ واجهات عصرية ومتجاوبة باستخدام Filament وTailwind CSS وHTML وCSS وjQuery وAJAX.
  // - تعاون عبر Jira وGitHub مع الالتزام بعمليات المراجعة وإدارة الفروع وأفضل الممارسات.
  // - التقنيات المستخدمة: Laravel وPHP وPostgreSQL وFilament وTailwind CSS وjQuery وAJAX وGitHub وJira.
  //       `
  //     }
  //   },

  {
    company: "Blue Worldwide",
    position: {
      en: "Full Stack Developer (Part-Time, Remote)",
      ar: "مطور متكامل (دوام جزئي – عن بُعد)"
    },
    period: {
      en: "Jul 2025 - Sep 2025",
      ar: "يوليو 2025 - سبتمبر 2025"
    },
    description: {
      en: `
From July to September 2025, I worked as a part-time full stack developer at Blue Worldwide.
- Developing the internal “Affiliate dashboard” with a focus on performance, scalability, and clean architecture.
- Built and maintained backend features using PHP, Laravel, and PostgreSQL following the Repository Pattern.
- Delivered modern, responsive UIs using Filament, Tailwind CSS, HTML, CSS, jQuery, and AJAX.
- Collaborated through Jira and GitHub with proper branching, reviews, and CI-friendly practices.
- Stack used: Laravel, PHP, PostgreSQL, Filament, Tailwind CSS, jQuery, AJAX, GitHub, Jira.
      `,
      ar: `
من يوليو إلى سبتمبر 2025، عملت كمطور متكامل بدوام جزئي لدى Blue Worldwide.
- تطوير “لوحة تحكم الشركاء – Affiliate dashboard” مع التركيز على الأداء والقابلية للتوسّع والهيكلية النظيفة.
- بناء وصيانة ميزات الواجهة الخلفية باستخدام PHP وLaravel وPostgreSQL وفق نمط Repository.
- تنفيذ واجهات عصرية ومتجاوبة باستخدام Filament وTailwind CSS وHTML وCSS وjQuery وAJAX.
- تعاون عبر Jira وGitHub مع الالتزام بعمليات المراجعة وإدارة الفروع وأفضل الممارسات.
- التقنيات المستخدمة: Laravel وPHP وPostgreSQL وFilament وTailwind CSS وjQuery وAJAX وGitHub وJira.
      `
    }
  },

  {
    company: "Blue Worldwide",
    position: {
      en: "Full Stack Developer (Part-Time, Remote)",
      ar: "مطور متكامل (دوام جزئي – عن بُعد)"
    },
    period: {
      en: "Jan 2024 - Apr 2024",
      ar: "يناير 2024 - أبريل 2024"
    },
    description: {
      en: `
From January to April 2024, I worked as a part-time full stack developer at Blue Worldwide.
- Developing backend solutions and applying Clean Architecture principles.
- Writing maintainable code to ensure scalability and long-term reliability.
- Built features using Laravel, PHP, MySQL, jQuery, AJAX, Bootstrap, HTML, CSS.
- Used GitHub for version control and Mailtrap for email testing.
      `,
      ar: `
من يناير إلى أبريل 2024، عملت كمطور متكامل بدوام جزئي لدى Blue Worldwide.
- تطوير حلول الواجهة الخلفية وتطبيق مبادئ الهيكلية النظيفة (Clean Architecture).
- كتابة كود قابل للصيانة لضمان القابلية للتوسّع والاعتمادية على المدى الطويل.
- بناء ميزات باستخدام Laravel وPHP وMySQL وjQuery وAJAX وBootstrap وHTML وCSS.
- استخدام GitHub لإدارة الإصدارات وMailtrap لاختبار البريد.
      `
    }
  },
  {
    company: "Semicolon",
    position: {
      en: "Backend Developer",
      ar: "مطور خلفي"
    },
    period: {
      en: "February 2024",
      ar: "فبراير 2024"
    },
    // description: {
    //   en: "Developed backend solutions and APIs for various client projects using Laravel and modern PHP practices.",
    //   ar: "تطوير حلول الواجهة الخلفية وواجهات برمجة التطبيقات لمشاريع العملاء المختلفة باستخدام Laravel وممارسات PHP الحديثة."
    // }
    description: {
      en: `
In February 2024, I worked as a freelance backend developer at Semicolon.
- Developing backend solutions remotely and contributing to project success.
- Created and updated features in MVC and API projects using PHP, Laravel, MySQL, HTML, CSS, Bootstrap, and jQuery.
      `,
      ar: `
في فبراير 2024، عملت كمطور خلفي مستقل لدى Semicolon.
- تطوير حلول الواجهة الخلفية عن بُعد والمساهمة في نجاح المشروع.
- إنشاء وتحديث ميزات في مشاريع MVC وواجهات API باستخدام PHP وLaravel وMySQL وHTML وCSS وBootstrap وjQuery.
      `
    }
  },
  {
    company: "POSLIX",
    position: {
      en: "Backend Developer",
      ar: "مطور خلفي"
    },
    period: {
      en: "September 2023 - February 2024",
      ar: "سبتمبر 2023 - فبراير 2024"
    },
    // description: {
    //   en: "Worked on Point of Sale system backend, implementing inventory tracking, sales reporting, and payment processing features.",
    //   ar: "العمل على الواجهة الخلفية لنظام نقاط البيع، وتنفيذ ميزات تتبع المخزون وتقارير المبيعات ومعالجة المدفوعات."
    // }
    description: {
      en: `
- Fixed bugs in existing POS systems to improve stability and functionality.
- Developed and enhanced features in new POS systems based on user needs.
- Created and maintained API/MVC solutions using Laravel, MySQL, jQuery, AJAX, HTML, and CSS.
- Used version control and delivered timely, effective backend solutions.
      `,
      ar: `
- إصلاح أعطال في أنظمة نقاط البيع الحالية لتحسين الاستقرار والوظائف.
- تطوير وتحسين ميزات في أنظمة نقاط بيع جديدة بناءً على احتياجات المستخدمين.
- إنشاء وصيانة حلول API/MVC باستخدام Laravel وMySQL وjQuery وAJAX وHTML وCSS.
- استخدام التحكم بالإصدارات وتقديم حلول خلفية فعّالة في الوقت المناسب.
      `
    }
  },
  // {
  //   company: "Folder Group",
  //   position: {
  //     en: "Technical Support",
  //     ar: "الدعم الفني"
  //   },
  //   period: {
  //     en: "August 2021 - January 2023",
  //     ar: "أغسطس 2021 - يناير 2023"
  //   },
  //   description: {
  //     en: "Provided technical support and troubleshooting for clients, maintaining system uptime and resolving technical issues.",
  //     ar: "تقديم الدعم الفني واستكشاف الأخطاء وإصلاحها للعملاء، والحفاظ على وقت تشغيل النظام وحل المشكلات الفنية."
  //   }
  // }
];

export const projects = [
  {
    title: "Shahbandr White-label API",
    description: {
      en: "Comprehensive white-label API solution for restaurants and delivery services with multi-tenant architecture.",
      ar: "حل API شامل قابل للتخصيص للمطاعم وخدمات التوصيل مع بنية متعددة المستأجرين."
    },
    tech: ["Laravel", "PHP", "MySQL", "RESTful API"],
    github: null,
    live: null
  },
  {
    title: "BWW Multi-vendor Store",
    description: {
      en: "Full-featured e-commerce platform supporting multiple vendors, payment integrations, and real-time inventory.",
      ar: "منصة تجارة إلكترونية متكاملة تدعم العديد من البائعين، وتكاملات الدفع، والمخزون في الوقت الفعلي."
    },
    tech: ["Laravel", "Vue.js", "MySQL", "Stripe"],
    github: null,
    live: 'https://bww-store.com/en'
  },
  {
    title: "POSLIX POS System",
    description: {
      en: "Modern Point of Sale system with inventory management, sales analytics, and multi-payment support.",
      ar: "نظام نقاط بيع حديث مع إدارة المخزون وتحليلات المبيعات ودعم متعدد للدفع."
    },
    tech: ["Laravel", "PostgreSQL", "Alpine.js"],
    github: null,
    live: "https://poslix.com/"
  },
  {
    title: "Dacktra Medical Platform",
    description: {
      en: "Healthcare management system with patient records, appointment scheduling, and prescription management.",
      ar: "نظام إدارة الرعاية الصحية مع سجلات المرضى وجدولة المواعيد وإدارة الوصفات الطبية."
    },
    tech: ["Laravel", "MySQL", "JavaScript", "HTML", "CSS", "jQuery"],
    github: null,
    live: "https://dackatra.com/"
  },
  {
    title: "ITI Graduation Project",
    description: {
      en: "Full-stack web application developed as graduation project, showcasing modern development practices.",
      ar: "تطبيق ويب متكامل تم تطويره كمشروع تخرج، يعرض ممارسات التطوير الحديثة."
    },
    tech: ["PHP", "JavaScript", "MySQL", "Laravel"],
    github: "https://github.com/MSH38/E-learning-backend-project.git",
    live: null
  },
  {
    title: "Shahbandr Dashboard Enhancements",
    description: {
      en: "Enhanced admin dashboard with real-time analytics, reporting tools, and improved UX.",
      ar: "لوحة تحكم إدارية محسّنة مع تحليلات في الوقت الفعلي، وأدوات إعداد التقارير، وتجربة مستخدم محسّنة."
    },
    tech: ["Html", "CSS", "JavaScript", "JQuery", "PHP", "MySQL", "SQLite", "WordPress", "Alpine.js", "WooCommerce"],
    github: null,
    live: "https://shahbandr.com/en/"
  }
];

export const testimonials = [
  {
    name: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    position: {
      en: "CTO at Tech Solutions",
      ar: "المدير التقني في حلول التكنولوجيا"
    },
    text: {
      en: "Mahmoud is an exceptional developer with deep knowledge of Laravel and backend architecture. His solutions are always elegant and scalable.",
      ar: "محمود مطور استثنائي ذو معرفة عميقة في Laravel وبنية الواجهة الخلفية. حلوله دائماً أنيقة وقابلة للتطوير."
    },
    avatar: "man"
  },
  {
    name: "Sara Mohammed",
    nameAr: "سارة محمد",
    position: {
      en: "Project Manager",
      ar: "مديرة مشاريع"
    },
    text: {
      en: "Working with Mahmoud was a pleasure. He delivered high-quality code on time and communicated effectively throughout the project.",
      ar: "كان العمل مع محمود ممتعاً. قدم كوداً عالي الجودة في الوقت المحدد وتواصل بفعالية طوال المشروع."
    },
    avatar: "woman"
  },
  {
    name: "Omar Ali",
    nameAr: "عمر علي",
    position: {
      en: "Lead Developer",
      ar: "المطور الرئيسي"
    },
    text: {
      en: "Mahmoud's expertise in PHP and database design is remarkable. He consistently produces clean, maintainable code that follows best practices.",
      ar: "خبرة محمود في PHP وتصميم قواعد البيانات ملفتة للنظر. ينتج باستمرار كوداً نظيفاً وقابلاً للصيانة يتبع أفضل الممارسات."
    },
    avatar: "man"
  }
];

export const certificates = [
  {
    title: "ITI Certificate",
    issuer: "Information Technology Institute",
    url: "https://media.licdn.com/dms/image/v2/C4D22AQGZ4YL3RzX5uQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1661810351522?e=1763596800&v=beta&t=bvSEJu_arZIGDmsQl7SqyRWeSyZt-MKuoyP8BwaDiPk"
  },
  {
    title: "Programming for Everybody",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/Q67CHF5WUM48"
  },
  {
    title: "Python Data Structures",
    issuer: "Coursera",
    url: "https://www.coursera.org/account/accomplishments/verify/CFG8DHR3F4EM"
  },
  {
    title: "PHP Fundamentals",
    issuer: "Mahara Tech",
    url: "https://www.linkedin.com/in/mahmoud-heikal/details/featured/1635500905784/single-media-viewer/?profileId=ACoAACfBNMUBuNHlk1T0NNk1VaT5HHYRCBoG8NE"
  },
  {
    title: "Database Fundamentals",
    issuer: "Mahara Tech",
    url: "https://www.linkedin.com/in/mahmoud-heikal/details/featured/1635500909294/single-media-viewer/?profileId=ACoAACfBNMUBuNHlk1T0NNk1VaT5HHYRCBoG8NE"
  },
  {
    title: "Web Development",
    issuer: "Udacity",
    url: null
  }
];

export const plugins = [
  "Amazon Pay", "Stripe", "Paymob", "PayPal", "Fawry", "Tap Payment", "Opay",
  "WooCommerce",
  "Facebook Pixel", "Mailgun", "Twilio",
  "Laravel Sanctum", "Laravel Passport", "JWT Auth",
  "Redis Cache", "Queue Management", "Email Services"
];
