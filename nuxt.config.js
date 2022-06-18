export default {
  server: {
    host: '0.0.0.0'
  },
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IstaLearning',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/modern-css-reset.css',
    '@/assets/sass/ui-kit/global.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/api.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'vue-ssr-carousel/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    ['nuxt-vue-material', {
      theme: 'default',
      // theme: 'default-dark',
      components: [
        'MdDrawer',
        'MdRadio',
        'MdMenu',
        'MdContent',
        'MdList',
        'MdButton',
        'MdToolbar',
        'MdCard',
        'MdTabs',
        'MdDialog',
        'MdChips',
        'MdField',
        'MdSnackbar',
        'MdProgress',
      ]
    }],
    ['nuxt-mail', {
      message: {
        to: 'shabbaykina@mail.ru',
      },
      smtp: {
        host: "smtp-relay.sendinblue.com",
        port: 587,
        auth: {
          type: "login",
          user: 'shabbaykina99@gmail.com',
          pass: '2EjM7wpUZdQWLqNK',
        },
      },
    }],

  ],

  // i18n settings
  i18n: {
    vueI18nLoader: true,
    locales: ['en', 'fr', 'ru'],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        "ru": {
          // 1. MAIN PAGE START
          // header
          "catalog": "Каталог",
          "excursions": "Экскурсии",
          "parents": "Родительский клуб",
          "lang": "Языковые клубы",
          "about": "О нас",
          "blog": "Блог",
          "contact": "Контакты",
          "signIn": "Войти",
          "main": "Главная",
          // event card
          "more": "подробнее",
          "buy": "купить",
          // main footer
          "partners": "Партнерам",
          "paragraph": "Пункт",
          "menu": "Меню",
          "sub": "Подпишитесь на нас в соц. сетях",
          // advantages screen
          "why": "Почему мы?",
          "ad1": "Высокая <br> экспертность",
          "ad2": "Большой <br> опыт работы",
          "ad3": "Гибкая <br> ценовая политика",
          "ad4": "Профессионалы из <br> разных стран",
          // catalog screen
          "excursionsOnline": "Экскурсии-онлайн",
          // certificates screen
          "cer": "Наши сертификаты",
          "watchMore": "Смотреть еще...",
          // consultation screen
          "cons1": "Записаться на консультацию",
          "cons": "Пройдите анкетирование и запишитесь на 15-минутную консультацию с преподавателем",
          "recording": "Записаться",
          // reviews screen
          "reviews": "Отзывы наших клиентов",
          "rePhoto": "Фото-отзывы",
          "reMore": "Посмотрите, какие отзывы о нас в социальных сетях :)",
          // events screen
          "popular": "Популярные мероприятия",
          // 1. MAIN PAGE END
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
          "": "",
        },
        "en": {
          // 1. MAIN PAGE START
          "catalog": "Catalog",
          "excursions": "Excursions",
          "parents": "Parent club",
          "lang": "Language clubs",
          "about": "About Us",
          "blog": "Blog",
          "contact": "Contacts",
          "signIn": "Sign In",
          "main": "Home",
          // event card
          "more": "more",
          "buy": "buy",
          // main footer
          "partners": "Partners",
          "paragraph": "Paragraph",
          "menu": "Menu",
          "sub": "Follow us on social networks",
          // advantages screen
          "why": "Why us?",
          "ad1": "High <br> expertise",
          "ad2": "Great <br> work experience",
          "ad3": "Flexible <br> pricing policy",
          "ad4": "Professionals from <br> different countries",
          // catalog screen
          "excursionsOnline": "Excursions-online",
          // certificates screen
          "cer": "Our certificates",
          "watchMore": "See more...",
          // consultation screen
          "cons1": "Sign up for a consultation",
          "cons": "Complete the survey and sign up for a 15-minute consultation with a teacher",
          "recording": "Sign up",
          // reviews screen
          "reviews": "Feedback from our clients",
          "rePhoto": "Photo reviews",
          "reMore": "See what reviews about us in social networks :)",
          // events screen
          "popular": "Popular events",
          // 1. MAIN PAGE END

        },
        "fr": {
          // 1. MAIN PAGE START
          "catalog": "Catalogue",
          "excursions": "Excursions",
          "parents": "Club des parents",
          "lang": "Clubs linguistiques",
          "about": "À propos de nous",
          "blog": "Blog",
          "contact": "Contacts",
          "signIn": "Connexion",
          "main": "Domicile",
          // event card
          "more": "Suite",
          "buy": "acheter",
          // main footer
          "partners": "Partenaires",
          "paragraph": "Paragraphe",
          "menu": "Menu",
          "sub": "Suivez-nous sur les réseaux sociaux",
          // advantages screen
          "why": "Pourquoi nous ?",
          "ad1": "Haute <br> expertise ",
          "ad2": "Excellente <br> expérience de travail",
          "ad3": "Politique de <br> tarification flexible",
          "ad4": "Professionnels de <br> différents pays",
          // catalog screen
          "excursionsOnline": "Excursions en ligne",
          // certificates screen
          "cer": "Nos certificats",
          "watchMore": "Voir plus...",
          // consultation screen
          "cons1": "Inscrivez-vous pour une consultation",
          "cons": "Répondez au sondage et inscrivez-vous pour une consultation de 15 minutes avec un enseignant",
          "recording": "S'inscrire",
          // reviews screen
          "reviews": "Les retours de nos clients",
          "rePhoto": "Critiques de photos",
          "reMore": "Voir les avis sur nous sur les réseaux sociaux :)",
          // events screen
          "popular": "Événements populaires",
          // 1. MAIN PAGE END

        },
      }
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
