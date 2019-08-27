const builtAt = new Date().toISOString()
const path = require('path')
console.log(path)
const { I18N } = require('./locales/i18n-nuxt-config')
import blogsEn from './contents/en/blogsEn.js'
import blogsEs from './contents/es/blogsEs.js'

const productionUrl = {
  en: '/en',
  es: '/es'
}
const baseUrl = 'https://federicomazzei.com.ar'

const works = ['vr-player']

module.exports = {
  mode: 'production',
  env: {
    baseUrl,
    productionUrl,
    works
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'Federico Mazzei Desarrollador de sitios Web',
    meta: [
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
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3CB371', height: '5px' },
  /*
   ** Agrego el CSS para Vuetify
   */
  css: [
    {
      src: '~/assets/css/app.styl',
      lang: 'styl'
    }
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     * vendor: ['vuetify'], // Lo comento porque me tira un Warning quiero ver si se va luego de comentarlo.
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
      const rule = config.module.rules.find(
        r => r.test.toString() === '/\\.(png|jpe?g|gif|svg|webp)$/'
      )
      config.module.rules.splice(config.module.rules.indexOf(rule), 1)

      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            vue: {
              root: 'dynamicMarkdown'
            }
          }
        },
        {
          test: /\.(jpe?g|png)$/i,
          loader: 'responsive-loader',
          options: {
            placeholder: true,
            quality: 60,
            size: 1400,
            adapter: require('responsive-loader/sharp')
          }
        },
        {
          test: /\.(gif|svg)$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      )
    }
  },
  /*
   ** Agrego Vuetify
   */
  plugins: [
    '~/plugins/flamelink',
    '~/plugins/lazyload',
    '~/plugins/globalComponents',
    '~/plugins/vuetify.js',
    { src: '~plugins/ga.js', ssr: false }
  ],
  modules: ['nuxt-fontawesome', ['nuxt-i18n', I18N]],
  generate: {
    routes: ['/es', '404']
      .concat(blogsEn.map(w => `/blog/${w}`))
      .concat(blogsEs.map(w => `es/blog/${w}`))
  }
}
