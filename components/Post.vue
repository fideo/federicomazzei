<template>
  <div>
    <h1>{{ post.title }}</h1>
    <h3>{{ post.subtitle }}</h3>
    <h3>{{ post.datePublish }}</h3>
    <img v-if="url" :src="url" :alt="post.name">
    <div v-html="post.body"></div>
    <div v-html="post.cuerpo"></div>
  </div>
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
