<template>
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
      <h2><strong>{{ post.title }}</strong></h2>    
    </v-card-title>
    <v-card-text><h4 class="text-truncate">{{ post.subtitle }}</h4></v-card-text>
    <v-card-actions><v-btn color="info" flat>Ir a nota</v-btn></v-card-actions>
  </v-card>
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
