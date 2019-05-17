<template>
  <v-container grid-list-md>
    <h2>{{ $t('posts') }}</h2>
    <v-layout wrap>
      <v-flex
        v-for="blog in blogs"
        :key="blog.name"
        xs12
        md4
      >
        <card
          :work="blog"
          :isWork="false"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Card from "~/components/Card.vue";
export default {
  components: { Card },
  props: {
    blogs: {
      type: Array
    }
  }
};
</script>

