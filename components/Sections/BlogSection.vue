<template>
  <v-item-group>
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
  </v-item-group>

</template>
<script>
import Card from "~/components/Card.1.vue";
export default {
  components: { Card },
  props: {
    blogs: {
      type: Array
    }
  }
};
</script>

