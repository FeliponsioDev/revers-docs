export default {
  title: "Revers Studio",
  description: "Official Documentation",
  ignoreDeadLinks: true, 

  // Esta sección es la que carga el favicon en la pestaña del navegador
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  ],

  // Desactiva el sistema de rutas automático para evitar el icono de la "A"
  i18nRouting: false,

  themeConfig: {
    logo: '/favicon.png', 
    siteTitle: 'Revers Studio',

    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Tienda', link: 'https://builtbybit.com', target: '_blank' },
      {
        text: 'Versión',
        items: [
          { text: 'Español', link: '/es/' },
          { text: 'English', link: '/en/' }
        ]
      }
    ],

    // 3. Sidebar 
    sidebar: {
      '/es/': [
        {
          text: 'Documentación Español',
          items: [
            { text: 'ReversBot Premium', link: '/es/reversbot-premium/' },
            { text: 'ReversBot Free', link: '/es/reversbot-free/' },
            { text: 'Web McServer Morada', link: '/es/landing-mcserver-morda/' },
            { text: 'Web McServer Verde', link: '/es/landing-mcserver-verde/' },
            { text: 'Web Chatbot', link: '/es/landing-chatbot/' },
            { text: 'Config Portfolio', link: '/es/config-portfolio/' },
            { text: 'Fullstack Portfolio', link: '/es/fullstack-portfolio/' },
            { text: 'Designer Portfolio', link: '/es/portfolio-designer/' },
            { text: 'Autosell Plugin', link: '/es/autosell-minecraft-plugin/' },
            { text: 'Wiki Simple', link: '/es/wiki-simple/' }
          ]
        }
      ],
      '/en/': [
        {
          text: 'English Documentation',
          items: [
            { text: 'ReversBot Premium', link: '/en/reversbot-premium/' },
            { text: 'ReversBot Free', link: '/en/reversbot-free/' },
            { text: 'Purple McServer Web ', link: '/en/landing-mcserver-morda/' },
            { text: 'Green McServer Web', link: '/en/landing-mcserver-verde/' },
            { text: 'Chatbot Web', link: '/en/landing-chatbot/' },
            { text: 'Config Portfolio', link: '/en/config-portfolio/' },
            { text: 'Fullstack Portfolio', link: '/en/fullstack-portfolio/' },
            { text: 'Designer Portfolio', link: '/en/portfolio-designer/' },
            { text: 'Autosell Plugin', link: '/en/autosell-minecraft-plugin/' },
            { text: 'Wiki Simple', link: '/en/wiki-simple/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/9CgqtyKUkf' }
    ]
  }
}