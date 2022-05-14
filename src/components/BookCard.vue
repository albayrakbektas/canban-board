<template>
  <div class="book-card">
    <div class="header" @click="isDetail = !isDetail">
      <div class="title" :class="isDetail ? null : 'title-not-detail'">
        {{ book.title }}
      </div>
      <div class="expand-icon">
        <span v-if="!isDetail" class="material-symbols-outlined">
          keyboard_arrow_right
        </span>
        <span v-else class="material-symbols-outlined">
          keyboard_arrow_up
        </span>
      </div>
    </div>
    <div v-if="isDetail" class="detail">
      <div class="main">
        <div class="editions">
          <span>{{ book.edition_count }} </span>
          <span>{{ book.edition_count === 1 ? "edition" : "editions" }}</span>
        </div>
        <div class="published">
          <span>First Published: </span>
          <span>{{ book.first_publish_year }}</span>
        </div>
      </div>
      <div class="footer">
        <div class="pages-container flex-row">
          <div class="pages-icon">
            <span class="material-symbols-outlined"> layers </span>
          </div>
          <div class="pages-count">
            <span>{{ book.number_of_pages_median }}</span>
            <span>pages</span>
          </div>
        </div>
        <div class="read-time-container flex-row">
          <div class="read-time-icon">
            <span class="material-symbols-outlined"> local_library </span>
          </div>
          <span v-if="book.readingTime !== 0">{{ book.readingTime }}</span>
          <span>{{
            book.readingTime === 0
              ? "Not yet read."
              : book.readingTime > 1
              ? "hours read time"
              : "hour read time"
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  data() {
    return {
      isDetail: false,
    };
  },
  props: {
    book: Object,
  },
};
</script>

<style scoped>
.title-not-detail {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
}
.book-card {
  width: 300px;
}
.header,
.main,
.footer {
  display: grid;
  justify-items: start;
  align-items: center;
  gap: 1rem;
}
.header {
  cursor: pointer;
  grid-template-columns: 1fr auto;
}
.expand-icon {
  display: flex;
  align-items: center;
  /*align-self: center;*/
}
.main,
.footer {
  grid-template-columns: 1fr auto;
}
.header:hover {
  background: rgba(119, 136, 153, 0.5);
}
.editions {
  background: #32cd32;
  padding: 0.1rem 1rem;
  border-radius: 0.5rem;
}
.editions span {
  color: white;
}
.flex-row,
.editions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
</style>
