module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'federicomazzeisitenuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Sitio Web de Federico Mazzei'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    // routerMode: '',
    baseUrl: '/federicomazzei/'
  },

  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
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
