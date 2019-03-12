<template>
  <v-app>
    <v-container
      bg
      fill-height
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
        align-center
      >
        <v-flex>
          <h1 class="miEmpresa">
            Federico Mazzei
          </h1>
          <!-- <h2 class="subtitle">
            Sitio Web de Federico Mazzei
          </h2> -->
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.titulo
  font-family 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  /* 1 */
  display block
  font-weight 300
  font-size 100px
  color #35495e
  letter-spacing 1px

.subtitle
  font-weight 300
  font-size 42px
  color #526488
  word-spacing 5px
  padding-bottom 15px

.links
  padding-top 15px
</style>

