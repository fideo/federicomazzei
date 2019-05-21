<template>
  <v-container grid-list-md>
    <h2 class="pl-3 pb-2"><u>{{ $t('posts') }}</u></h2>
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

