const builtAt = new Date().toISOString()

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'federicomazzeisitenuxt',
    meta: [
      { charset: 'utf-8' },
      /*{ name: 'viewport', content: 'width=device-width, initial-scale=1' },*/
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/icon-144x144.png'
      },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@fideox' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt },
      {
        hid: 'Federico Mazzei hid',
        name: 'Federico Mazzei',
        content: 'Sitio Web de Federico Mazzei'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-72x72.png',
        sizes: '72x72'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-128x128.png',
        sizes: '128x128'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-144x144.png',
        sizes: '144x144'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-152x152.png',
        sizes: '152x152'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-384x384.png',
        sizes: '384x384'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-512x512.png',
        sizes: '512x512'
      },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },
  ssr: true,
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3CB371' },
  /*
   ** Agrego Vuetify
   */
  plugins: ['~/plugins/vuetify.js'],
  /*
   ** Agrego el CSS para Vuetify
   */
  css: [
    {
      src: '~/assets/css/app.styl',
      lang: 'styl'
    }
  ],
  modules: ['nuxt-fontawesome'],
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vuetify'],
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
