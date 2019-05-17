<template>
  <v-app>
    <v-container
      bg
      fill-height
      grid-list-md
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex x12>
          <v-card>
            <v-container
              grid-list-sm
              fluid
              text-xs-center
            >
              <h1 class="display-1">Algunas notas interesantes - Mi blog</h1>
              <BlogSection :blogs="blogs" />
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import BlogSection from "~/components/Sections/BlogSection.vue";
import blogsEn from "~/contents/en/blogsEn.js";
import blogsEs from "~/contents/es/blogsEs.js";

export default {
  async asyncData({ store }) {
    const blogs = store.state.i18n.locale === "en" ? blogsEn : blogsEs;

    async function asyncImport(blogName) {
      const wholeMD = await import(`~/contents/${
        store.state.i18n.locale
      }/blog/${blogName}.md`);
      return wholeMD.attributes;
    }

    return Promise.all(blogs.map(blog => asyncImport(blog))).then(res => {
      return {
        blogs: res
      };
    });
  },

  components: { BlogSection },

  head() {
    return {
      title: this.$t("indexPageHead.title"),
      htmlAttrs: {
        lang: this.$i18n.locale
      },
      meta: [
        { name: "author", content: "Federico Mazzei" },
        {
          name: "description",
          property: "og:description",
          content: this.$t("indexPageHead.description"),
          hid: "description"
        },
        { property: "og:title", content: this.$t("indexPageHead.title") },
        { property: "og:image", content: this.ogImage },
        {
          name: "twitter:description",
          content: this.$t("indexPageHead.description")
        },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  },
  computed: {
    ogUrl: function() {
      return process.env.baseUrl;
    },
    ogImage: function() {
      return `${process.env.baseUrl}/images/fb-banner.jpg`;
    },
    pageTitle: function() {
      return "title";
    },
    pageDescription: function() {
      return "description";
    }
  }
};
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
