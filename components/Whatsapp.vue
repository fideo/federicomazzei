<template>
    <div id="whatsapp">
      <a href="https://api.whatsapp.com/send?phone=541126301170&text=Hola%20te%20escribo%20desde%20tu%20página%20web" target="_blank">
        <v-btn
              absolute
              fixed
              dark
              fab
              bottom
              right
              color="green"
              >
              <v-icon class="fab fa-whatsapp fa-3x"></v-icon>
            </v-btn>
      </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
#whatsapp .v-btn--floating {
    margin: 0 16px 32px 0px;
  }
</style>
