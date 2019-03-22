<template>
  <v-app>
    <h1>Este es el blog</h1>
  </v-app>
</template>

<script>
//import fm from "content/es/blog/primer-post.md";

export default {
  test: /\.md$/,
  loader: "frontmatter-markdown-loader",
  options: {
    markdown: body => {
      return md.render(body);
    }
  }
};
</script>

<style>
</style>
