<script lang="js">
/* eslint-disable */
  import InlineCode from './InlineCode.vue'
  import hljs from 'highlight.js/lib/highlight'
  
  import javascript from 'highlight.js/lib/languages/javascript'
  hljs.registerLanguage('javascript', javascript)
  
  import bash from 'highlight.js/lib/languages/bash'
  hljs.registerLanguage('bash', bash)
  
  import 'highlight.js/styles/hybrid.css'

  export default {
    props: ["renderFunc", "staticRenderFuncs"],

    components: {
      InlineCode
    },

    computed: {
      initHighlightJs () {
        let targets = document.querySelectorAll('code')
        targets.forEach((target) => {
          hljs.highlightBlock(target)
        })
      }
    },

    mounted() {
      this.initHighlightJs
    },

    render: function (createElement) {
    return this.templateRender ? this.templateRender() : createElement("div", "Rendering");
    },

    created: function () {
      this.templateRender = new Function(this.renderFunc)();
      this.$options.staticRenderFns = new Function(this.staticRenderFuncs)();
    }
  }
</script>