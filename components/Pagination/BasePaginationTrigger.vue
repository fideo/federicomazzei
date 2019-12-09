<template>
  <span class="base-pagination-trigger" @click="onClick">
    {{ pageNumber }}
  </span>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: Number,
      required: true
    }
  },

  methods: {
    onClick() {
      this.$emit("loadPage", this.pageNumber);
    }
  }
};
</script>

<style lang="scss" scoped>
$c-primary-accent--dark: #dd8346;

.base-pagination-trigger {
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    color: $c-primary-accent--dark;
  }
}
</style>
