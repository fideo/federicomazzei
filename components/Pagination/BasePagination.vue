<template>
  <div class="base-pagination">
    <BaseButton
      :disabled="isPreviousButtonDisabled"
      @click.native="previousPage"
    >
      ←
    </BaseButton>

    <BasePaginationTrigger
      v-for="paginationTrigger in paginationTriggers"
      :class="{
        'base-pagination__description--current':
          paginationTrigger === currentPage
      }"
      :key="paginationTrigger"
      :pageNumber="paginationTrigger"
      class="base-pagination__description"
      @loadPage="onLoadPage"
    />

    <BaseButton :disabled="isNextButtonDisabled" @click.native="nextPage">
      →
    </BaseButton>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BasePaginationTrigger from "./BasePaginationTrigger.vue";

export default {
  components: {
    BaseButton,
    BasePaginationTrigger
  },

  props: {
    currentPage: {
      type: Number,
      required: true
    },

    pageCount: {
      type: Number,
      required: true
    },

    visiblePagesCount: {
      type: Number,
      default: 5
    }
  },

  computed: {
    isPreviousButtonDisabled() {
      return this.currentPage === 1;
    },

    isNextButtonDisabled() {
      return this.currentPage === this.pageCount;
    },

    paginationTriggers() {
      const currentPage = this.currentPage;
      const pageCount = this.pageCount;
      const visiblePagesCount = this.visiblePagesCount;
      const visiblePagesThreshold = (visiblePagesCount - 1) / 2;
      const pagintationTriggersArray = Array(this.visiblePagesCount - 1).fill(
        0
      );

      if (currentPage <= visiblePagesThreshold + 1) {
        pagintationTriggersArray[0] = 1;
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pagintationTriggersArray[0] + index;
          }
        );

        pagintationTriggers.push(pageCount);

        return pagintationTriggers;
      }

      if (currentPage >= pageCount - visiblePagesThreshold + 1) {
        const pagintationTriggers = pagintationTriggersArray.map(
          (paginationTrigger, index) => {
            return pageCount - index;
          }
        );

        pagintationTriggers.reverse().unshift(1);

        return pagintationTriggers;
      }

      pagintationTriggersArray[0] = currentPage - visiblePagesThreshold + 1;
      const pagintationTriggers = pagintationTriggersArray.map(
        (paginationTrigger, index) => {
          return pagintationTriggersArray[0] + index;
        }
      );

      pagintationTriggers.unshift(1);
      pagintationTriggers[pagintationTriggers.length - 1] = pageCount;

      return pagintationTriggers;
    }
  },

  methods: {
    nextPage() {
      this.$emit("nextPage");
    },

    onLoadPage(value) {
      this.$emit("loadPage", value);
    },

    previousPage() {
      this.$emit("previousPage");
    }
  }
};
</script>

<style lang="scss" scoped>
$c-primary-accent: #ff9a57;

.base-pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  &__description {
    display: flex;
    margin: 0 17px;
    font-size: 16px;
    font-weight: 600;

    &--current {
      color: $c-primary-accent;
    }
  }

  .arrow-left {
    transform: rotateZ(180deg);
  }
}
</style>
