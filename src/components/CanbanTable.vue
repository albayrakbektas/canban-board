<template>
  <div class="canban-container">
    <div class="flex-row result-container">
      <div
        v-if="searchKey && searchValue && !isLoading"
        class="search-container"
      >
        <h3>{{ isEmptyPage ? "No Result for" : "Results for" }}</h3>
        <div class="filters">
          <span>{{ searchKey }}:</span>
          <span>"{{ searchValue }}"</span>
        </div>
      </div>
      <div v-if="isLoading" class="flex-row spin-container">
        <SpinLoader />
        <span>Loading..</span>
      </div>
      <div class="select-container">
        <select
          v-if="!isLoading"
          v-model="selectedLanguage"
          @change="changeLanguage(selectedLanguage)"
          @click="duplicatedList = bookList"
        >
          <option disabled>Language</option>
          <option
            v-for="(option, index) in languageOptions"
            :value="option.value"
            :key="index"
          >
            {{ option["text"] }}
          </option>
        </select>
      </div>
    </div>
    <div class="canban-flex">
      <div class="canban-column" v-for="(item, index) in bookList" :key="index">
        <BookList
          :border-style="`border-top: 4px solid rgba(${
            (item[0].first_publish_year * index) % 265
          }, ${(item[0].first_publish_year * index) % 275}, ${
            (item[0].first_publish_year * index) % 255
          }, 1)`"
          :first-published-year="
            item[0].first_publish_year
              ? item[0].first_publish_year
              : item.first_publish_year
          "
          :book-list="item"
        />
      </div>
    </div>
    <EmptyPage v-if="isEmptyPage" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import BookList from "@/components/BookList";
import SpinLoader from "@/components/SpinLoader";
import EmptyPage from "@/components/EmptyPage";
import languages from "@/data/language.json";
export default {
  name: "CanbanTable",
  components: { EmptyPage, SpinLoader, BookList },
  data() {
    return {
      hash: {},
      isl: false,
      selectedLanguage: "Language",
      languageOptions: languages,
      options: [
        { text: "Title", value: "title" },
        { text: "Author", value: "author" },
        { text: "Subject", value: "subject" },
      ],
    };
  },
  computed: {
    ...mapState([
      "bookList",
      "searchKey",
      "searchValue",
      "isLoading",
      "isEmptyPage",
    ]),
  },
  created() {
    this.$store.dispatch("filterSearch", { type: "author", key: "OL26320A" });
  },
  methods: {
    random() {
      return Math.random();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";

.canban-container {
  max-width: 100vw;
}
.result-container {
  padding: 0 1rem 1rem 1rem;
}
.search-container {
  display: flex;
  align-items: end;
  gap: 0.5rem;
  margin-left: 0.5rem;
  width: max-content;
  border-bottom: 1px solid #a9a9a9;
}
.flex-row {
  display: flex;
  align-items: center;
}
.spin-container {
  padding: 1rem;
  gap: 0.5rem;

  span:first-child {
    color: $color-loading;
    font-weight: $fontWeight-medium;
  }
}
.filters {
  display: flex;
  gap: 0.5rem;
}
.select-container {
  padding-left: 1rem;
  align-self: center;
}
select {
  cursor: pointer;
  outline: none;
  border: none;
  background: none;

  &:hover {
    background: rgba(128, 128, 128, 0.1);
  }
}
.canban-flex {
  display: flex;
  position: relative;
  overflow: scroll;
  padding-left: 1rem;
  gap: 0.5rem;
}
.canban-flex::-webkit-scrollbar {
  display: none;
}
.canban-column {
  height: min-content;
}
</style>
