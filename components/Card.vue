<template>
  <v-layout>
    <v-flex
      xs12
      sm12
      offset-sm1
    >
    <nuxt-link
          :to="localePath({ name: nuxtLink, params: { slug: work.name }})"
          class="linkSinSubrrayar"
        >
      <v-card class="pa-3">
        
          <ImageResponsive
            :imageURL="cardImage"
            :classes="'cardThumbnail'"
            :width="'400'"
            :height="'200'"
            :alt="work.cardAlt"
          />
          <v-container
            fill-height
            fluid
          >


            <div>
                <h3 class="headline mb-0">{{ work.title }}</h3>
            </div>

          </v-container>
          <v-card-title primary-title>
            <div>
              <span>{{ work.description }}</span>
            </div>
          </v-card-title>
        </v-card>
        </nuxt-link>
    </v-flex>
  </v-layout>

</template>

<script lang="js">
  export default {
    props: {
      work: {
        type: Object
      },
      article: {
        type: Object
      },
      isWork: {
        type: Boolean
      }
    },

    computed: {      
      cardImage() {
        if(this.work.id){
          return this.isWork ?
            `work/${this.work.name}/_thumbnail.jpg` :
            `blog/${this.work.id}/_thumbnail.jpg`;
        }else{
          return `none.jpg`;
        }
        
      },
      nuxtLink () {
        return this.isWork ?
          'work-slug':
          'blog-slug';
      },
      backgroundColor () {
        return `background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${this.work.color} 70%)`
      }
    }
  }
</script>

<style lang="stylus">
.linkSinSubrrayar
  text-decoration none
  color black

.cardThumbnail
  transition all ease 0.75s
  opacity 0.7

  &[lazy='loaded']
    opacity 1

.portfolio
  width 100%
  position relative

  &__item
    padding-bottom 2.4rem

    &:last-child
      padding-bottom 0

    @media (min-width: $screen-sm)
      padding-bottom 4.8rem

  &__title
    &--coming
      color $secondary-lighter

  &__content
    vertical-align middle
    padding-left 0
    padding-right 0

  &__client
    @media (min-width: $screen-sm)
      display none

  &__description
    color $secondary
    padding-top 1rem

    @media (min-width: $screen-sm)
      display none

  &__thumb-inner
    position relative
    font-size 0
    display block

    &:hover
      .portfolio__thumb-hover
        opacity 1

  &__thumb-hover
    opacity 0
    position absolute
    width 100%
    height 100%
    transition all 0.3s ease
    -moz-transition all 0.3s ease
    -webkit-transition all 0.3s ease
    -o-transition all 0.3s ease

    @media (max-width: $screen-sm)
      display none

  &__thumb-text
    position absolute
    bottom 3rem
    left 4rem
    padding-right 4rem

  &__thumb-description
    line-height initial
    text-align left
    color white

    &--dark
      @extend .portfolio__thumb-description
      color $secondary

  &__thumb-client
    text-align left
    color white
    font-weight 200

    &--dark
      @extend .portfolio__thumb-client
      color $secondary
</style>
