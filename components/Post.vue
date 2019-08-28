<template>
  <v-app>
    <v-layout>
    <v-flex md4>
      <v-card>
        <img v-if="url" :src="url" :alt="post.name" aspect-ratio="1" width="100%">
          <v-card-title>
            <h2><strong>{{ post.title }}</strong></h2>
            <h6 class="text-right">{{ post.datePublish }}</h6>
          </v-card-title>
          <v-card-text>
            <h4>{{ post.subtitle }}</h4>
          </v-card-text>
      </v-card>
    </v-flex>
    </v-layout>
  </v-app>
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
