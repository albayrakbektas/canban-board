<template>
  <div class="header-container">
    <h1>{{ isEmptyPage ? searchError : tableName }}</h1>
    <div class="search-container">
      <select v-model="selected">
        <option disabled>Select a filter</option>
        <option
          v-for="(option, index) in options"
          :value="option.value"
          :key="index"
        >
          {{ option.text }}
        </option>
      </select>
      <div class="input-container">
        <input
          v-model="inputValue"
          type="text"
          placeholder="Search..."
          @keyup.enter="search()"
        />
        <label :for="inputValue"></label>
        <span
          v-if="!isLoading"
          class="material-symbols-outlined search-button"
          @click="search"
        >
          search
        </span>
        <SpinLoader v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import SpinLoader from "@/components/SpinLoader";
import options from "../data/filter-options.json";

export default {
  name: "AppHeader",
  components: { SpinLoader },
  data() {
    return {
      selected: "author",
      duplicatedList: [],
      inputValue: "OL26320A",
      searchError: "Invalid search key..",
      options: options,
    };
  },
  created() {
    this.duplicatedList = this.bookList;
  },
  computed: {
    ...mapState([
      "bookList",
      "searchKey",
      "searchValue",
      "tableName",
      "isLoading",
      "isEmptyPage",
    ]),
    ...mapActions(["filterSearch"]),
  },
  methods: {
    search() {
      console.log(this.selected, this.inputValue);
      this.$store.dispatch("filterSearch", {
        type: this.selected,
        key: this.inputValue,
      });
      this.$store.commit("setSearchKey", this.selected);
      this.$store.commit("setSearchValue", this.inputValue);
    },
    // changeLanguage(language) {
    //   this.$store.dispatch("filterByLanguage", {
    //     language: language,
    //     list: this.duplicatedList,
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.header-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 1rem 2.25rem;
  align-items: center;
  height: 70px;
  @media screen and (max-width: $screen-mobile) {
    height: min-content;
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 1rem 2rem;
  }
  h1 {
    color: $color-primary;
    font-size: $fontSize-xl;
    line-height: $lineHeight-xl;
    @media screen and (max-width: $screen-mobile) {
      grid-row: 2;
    }
  }
  .search-container {
    display: flex;
    justify-content: center;
    border: 1px solid $color-help-icon;
    border-radius: 5rem;
    padding: 0.2rem 0.8rem;
    box-shadow: $box-shadow-secondary;
    @media screen and (max-width: $screen-mobile) {
      padding: 0.2rem;
      gap: 0.2rem;
    }
    select {
      cursor: pointer;
      background-color: transparent;
    }
    .input-container {
      display: flex;
      align-items: center;
      @media screen and (max-width: $screen-mobile) {
        gap: 0.2rem;
      }
      input {
        padding: 0.2rem 0.4rem;
        font-weight: $fontWeight-medium;
      }
      .search-button {
        cursor: pointer;
      }
    }
  }
}
input,
select {
  outline: none;
  border: none;
}
</style>
