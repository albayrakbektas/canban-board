<template>
  <div class="header-container">
    <h1>{{ isEmptyPage ? searchError : tableName }}</h1>
    <div class="header-container-right">
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
          v-model="inputModel"
          type="text"
          placeholder="Search..."
          @keyup.enter="search()"
        />
        <label :for="inputModel"></label>
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
      inputModel: "OL26320A",
      searchError: "Invalid search key..",
      newList: [],
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
      console.log(this.selected, this.inputModel);
      this.$store.dispatch("filterSearch", {
        type: this.selected,
        key: this.inputModel,
      });
      this.$store.commit("setSearchKey", this.selected);
      this.$store.commit("setSearchValue", this.inputModel);
    },
    changeLanguage(language) {
      this.$store.dispatch("filterByLanguage", {
        language: language,
        list: this.duplicatedList,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/sass/_variables.scss";
.header-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
  height: 70px;
  @media screen and (max-width: $screen-mobile) {
    height: min-content;
    gap: 2rem;
  }
}
h1 {
  font-size: $fontSize-xl;
  line-height: $lineHeight-xl;
  @media screen and (max-width: $screen-mobile) {
    grid-row: 2;
  }
}
.header-container-right {
  display: flex;
  border: 1px solid $color-help-icon;
  border-radius: 5rem;
  box-shadow: $box-shadow-secondary;
}
.input-container {
  display: flex;
  align-items: center;
  padding: 0.2rem 0.4rem;

  input {
    padding: 0.2rem 0.8rem;
    font-weight: $fontWeight-medium;
  }
  .search-button {
    cursor: pointer;
  }
}
input,
select {
  outline: none;
  border: none;
}
select {
  cursor: pointer;
  background-color: transparent;
}
</style>
