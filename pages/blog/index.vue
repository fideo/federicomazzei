<template>
  <v-app>
    <v-container
      fluid
      grid-list-md
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          class="margenTop"
        >
        <h1>Este es el blog</h1>
        <div v-html="fm"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  import fm from "~/content/es/blog/primer-post.md"
 
  export default {
    /*async asyncData ({params, app}) {
      const fileContent = await import(fm)
      const attr = fileContent.attributes
      return {
        date: attr.date,
        description: attr.description,
        title: attr.title,
      }
    },
    props: {
        blogs: {
          type: Array
        }
    },*/
    computed: {
      fm() {
        return fm
      }
    }
  }
/*import fm from "~/content/es/blog/primer-post.md";

export default {
  test: /\.md$/,
  loader: 'frontmatter-markdown-loader',
  options: {
    vue: {
      root: 'dynamicContent'
    }
  }
};*/
</script>

<style>
</style>
