<template>
  <div class="book-list" :style="borderStyle">
    <div class="header">
      <span>{{ firstPublishedYear || "Date Unknown" }}</span>
      <div class="tooltip">
        <span class="material-symbols-outlined"> help_center </span>
        <div class="tooltip-text" :style="borderStyle">
          <span>{{ tooltipText.title }}</span>
          <span>was written by</span>
          <span>{{ tooltipText.authorName }}</span>
          <span>in</span>
          <span>{{ tooltipText.firstPublishYear }}</span>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in bookList" :key="item.key" class="books">
      <BookCard :book="item" :id="`book-${index}`" />
    </div>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard";
export default {
  name: "BookList",
  components: { BookCard },
  props: {
    firstPublishedYear: Number,
    bookList: Array,
    borderStyle: String,
    tooltipText: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.book-list {
  position: relative;
  overflow-y: scroll;
  max-height: 60vh;
  padding: 1rem;
  margin: 0.5rem;
  background-color: $backgroundColor-primary-alpha;
  border-radius: 0.2rem;
  box-shadow: $box-shadow-primary;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: $screen-mobile) {
    padding: 1rem 0.2rem;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.25rem;
  span {
    font-size: $fontSize-l;
    line-height: $lineHeight-l;
    color: $color-primary;
    padding-left: 1rem;
  }
  .tooltip {
    position: relative;
    cursor: pointer;
    padding-right: 1.25rem;
    span:first-child {
      opacity: 50%;
      color: $color-help-icon;
    }
    .tooltip-text {
      visibility: hidden;
      position: absolute;
      z-index: 1;
      top: 0;
      right: 105%;
      width: 240px;
      background-color: $backgroundColor-empty-rows;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px;
      display: grid;
      span {
        color: $color-primary;
        font-size: $fontSize-xs;
        line-height: $lineHeight-xs;
        opacity: 1;
        padding: 0 1rem;
      }
    }
    &:hover .tooltip-text {
      visibility: visible;
    }
  }
}
</style>
