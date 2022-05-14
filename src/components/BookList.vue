<template>
  <div class="book-list" :style="borderStyle">
    <div class="header">
      <span>{{ firstPublishedYear }}</span>
      <span class="material-symbols-outlined"> help_center </span>
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
  data() {
    return {
      // borderStyle: "",
    };
  },
  props: {
    firstPublishedYear: Number,
    bookList: Array,
    borderStyle: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.book-list {
  position: relative;
  overflow-y: scroll;
  max-height: 50vh;
  padding: 1rem;
  margin: 0.5rem;
  background-color: $backgroundColor-primary-alpha;
  border-radius: 0.2rem;
  box-shadow: $primary-box-shadow;
  @media screen and (max-width: $screen-mobile) {
    padding: 1rem 0;
  }
}
.book-list::-webkit-scrollbar {
  display: none;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0.25rem;
  span:last-child {
    opacity: 50%;
    color: $color-help-icon;
  }
}
.header span {
  font-size: $fontSize-l;
  color: $color-primary;
}
</style>
