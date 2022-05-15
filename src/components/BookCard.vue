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
          <span>{{ book.edition_count }}</span>
          <span>{{ book.edition_count === 1 ? "edition" : "editions" }}</span>
        </div>
        <div class="published">
          <span>First Published: </span>
          <span>{{
            book.first_publish_year ? book.first_publish_year : "Unknown"
          }}</span>
        </div>
      </div>
      <div class="footer">
        <div class="pages-container flex-row">
          <div class="pages-icon">
            <span class="material-symbols-outlined"> layers </span>
          </div>
          <div class="pages-count">
            <span>{{
              book.number_of_pages_median
                ? book.number_of_pages_median
                : "Unknown"
            }}</span>
            <span>pages</span>
          </div>
        </div>
        <div class="read-time-container flex-row">
          <div class="pages-icon">
            <span class="material-symbols-outlined"> local_library </span>
          </div>
          <span v-if="book.ebook_count_i !== 0">{{ book.ebook_count_i }}</span>
          <span>{{
            book.ebook_count_i === 0
              ? "Not yet read."
              : book.ebook_count_i > 1
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

<style lang="scss" scoped>
@import "/src/assets/sass/variables";
.material-symbols-outlined {
  color: unset;
}
.main span,
.pages-count span,
.pages-container span,
.read-time-container span {
  color: $color-secondary;
  white-space: nowrap;
}
.book-card {
  width: 20vw;
  padding: 1rem;
  border-radius: 1rem;
  &:hover {
    background-color: $backgroundColor-primary-hover;
  }
  @media screen and (max-width: $screen-mobile) {
    width: 80vw;
  }
}
.header,
.main,
.footer {
  display: grid;
  justify-items: start;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
}
.header {
  cursor: pointer;
  grid-template-columns: 1fr auto;
  padding: 0.5rem 0;
  border-radius: 1rem;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: $fontSize-m;
  line-height: $lineHeight-m;
  padding: 0.25rem;
  color: $color-primary;
}
.title-not-detail {
  -webkit-line-clamp: 1;
  line-clamp: 1;
}
.expand-icon {
  display: flex;
  align-items: center;
}
.published {
  span {
    font-size: $fontSize-s;
    line-height: $lineHeight-s;
    color: $color-secondary;
    white-space: nowrap;
  }
}
.pages-icon {
  span {
    font-size: $fontSize-m;
    color: $color-secondary;
  }
}
.pages-count,
.read-time-container {
  span {
    font-size: $fontSize-xs;
    line-height: $lineHeight-xs;
    color: $color-secondary;
  }
}
.main,
.footer {
  grid-template-columns: 125px 1fr;
}
.editions {
  background-color: rgba(130, 199, 134, 1);
  padding: 0.1rem 1rem;
  border-radius: 0.3rem;
  span {
    font-size: $fontSize-s;
    line-height: $lineHeight-s;
    color: $color-button;
  }
}
.flex-row,
.editions,
.pages-count {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}
.read-time-container {
  padding: 0;
}
</style>
