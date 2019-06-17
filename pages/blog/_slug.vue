<template>
<v-app>
  <v-container
    grid-list-md
    align-center
  >
    <v-layout
      row
      wrap
      align-center
    >
      <v-flex xs12>
        <v-card>
          <v-card-text class="px-0">
            <div class="pt-1 pl-3 pr-3" style="float: left">
              <!-- 
                :imageURL="imageBig" 
                :imageURL="'blog/' + id + '/_main.jpg'"
              -->
            <ImageResponsive
              :imageURL="imageBig"
              class="elevate-cover__img dynamicMarkdown"
              :width="400"
              :alt="name"
            />
            </div>
            <h1 class="display-2 pb-2 pl-5">{{ title }}</h1>
            <p class="pt-2 pb-0 pl-5 pr-5">{{description}} - Creado por {{owner}} publicado el {{year}}</p>
            <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          class="pa-5"
        />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</v-app>
</template>

<script lang="js">
  
  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"
  import Card from "~/components/Card.vue"


  export default {

    async asyncData ({params, store}) {
      const fileContent = await import(`~/contents/${store.state.i18n.locale}/blog/${params.slug}.md`)
      const attr = fileContent.attributes
      //console.log(attr.id)
      return {
        name: params.slug,
        title: attr.title,
        trans: attr.trans,
        year: attr.created,
        id: attr.id,
        owner: attr.author,
        colors: attr.colors,
        role: attr.role,
        cardAlt: attr.cardAlt,
        description: attr.description,
        related: attr.related,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        },
        
      }
    },
    
    nuxtI18n: {
      seo: false
    },

    components: { DynamicMarkdown, Card },

    head () {
      return {
        title: this.pageTitle,
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          { name: "author", content: "Federico A Mazzei" },
          { name: "description", property: "og:description", content: this.description, hid: "description" },
          { property: "og:title", content: this.pageTitle },
          { property: "og:image", content: this.ogImage },
          { name: "twitter:description", content: this.description },
          { name: "twitter:image", content: this.ogImage }
        ],
        link: [
          this.hreflang
        ]
      };
    },

    computed: {
      ogImage: function () {
        return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`;
      },
      pageTitle: function () {
        return this.title + ' – Federico Mazzei';
      },
      showLocales () {
        return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
      },
      hreflang () {
        if (!this.trans) {
          return ''
        }
        return {
          hid: 'alternate-hreflang-' + this.showLocales[0].iso,
          rel: 'alternate',
          href: (this.showLocales[0].code === 'en' ? '' : this.showLocales[0].code) + '/blog/' + this.trans,
          hreflang: this.showLocales[0].code
        }
      },
      imageBig: function () {
        if(this.id){
          return 'blog/' + this.id + '/_main.jpg'
        }else{
          return ''
        }
      }
    },
    
  }
</script>

<style lang="stylus" scoped>
.overflowhidden
  overflow hidden

.blogSelected-horizontalImage
  height 56rem
  background-size contain
  transition all ease 0.35s
  opacity 0

  &[lazy='loading']
    filter blur(15px)
    background-repeat no-repeat !important
    background-size contain !important

  &[lazy='loaded']
    opacity 1
    background-repeat no-repeat !important
    background-size contain !important

  .intro
    display flex

.elevate-cover
  display flex
  flex-direction column

  @media (min-width: $screen-md)
    flex-direction row

  &__img, &__textOffset
    width 100%

  &__text
    max-width 700px
    width 100%
    padding 2.4rem

    @media (min-width: $screen-md)
      margin-left auto
      padding 2.4rem 4rem 2.4rem 2.4rem

  &__textOffset
    display flex
    flex-direction column
    align-items center
    justify-content center

  &__title
    font-size 3rem
    font-family 'Tiempos Headline', Arial, sans-serif
    color $secondary

    @media (min-width: $screen-sm)
      font-size 4rem

  &__description
    margin 0

.dynamicMarkdown
  padding 3.2rem 3.2rem
  font-size 16px
  line-height 1.7
  display block
  max-width 98%
  /*margin-left auto
  margin-right auto*/
  color $secondary


  @media (min-width: $screen-sm)
    padding 7.2rem 0
    font-size 19px

  h2
    padding-bottom 3.2rem
    padding-bottom 2rem

    @media (max-width: $screen-sm)
      font-size 2rem

  h3
    font-size 2.2rem
    padding-bottom 2rem

  li
    list-style-type initial

  pre
    box-shadow 0 4px 12px 0 rgba(0, 0, 0, 0.05)
    padding 2.4rem
    border-radius 4px
    background-color #f6f8fa
    overflow-x scroll
    display block
    margin-bottom 5rem

    code
      background-color #f6f8fa

  code
    background #f3f4f4
    border-radius 4px
    display inline
    color $secondary
    font-size 14px
    padding 0.2em 0.4em

    @media (min-width: $screen-sm)
      font-size 16px
</style>
