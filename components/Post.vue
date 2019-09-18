<template>
  <nuxt-link :to="`${post.id}`" :title="`${post.title}`">
    <v-card>
      <v-img 
        v-if="url" :src="url" :alt="post.name" 
        aspect-ratio="1" 
        width="100%" 
        height="210"
        contain
        max-width="500"
        max-height="300" />
      <v-card-title>
        <h2 class="text-truncate"><strong>{{ post.title }}</strong></h2>    
      </v-card-title>
      <v-card-text><h4 class="text-truncate">{{ post.subtitle }}</h4></v-card-text>
    </v-card>
  </nuxt-link>
</template>

<script>
import get from 'lodash.get';

export default {
  props: ['post'],

  data() {
    return {
      url: get(this.post, 'image[0].url', '')
    }
  }
}
</script>

<style scoped>

</style>
