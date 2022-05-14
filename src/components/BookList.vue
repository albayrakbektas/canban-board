<template>
  <div class="book-list">
    <div class="header">
      <span>1965</span>
      <span>askQuestion</span>
    </div>
    <div v-for="(item, index) in bookList" :key="item.key" class="books">
      <BookCard :book="item" :id="`book-${index}`" />
    </div>
  </div>
</template>

<script>
import BookCard from "@/components/BookCard";
// import getData from "@/methods/getData";
import axios from "axios";
export default {
  name: "BookList",
  components: { BookCard },
  data() {
    return {
      bookList: [],
      book: {},
    };
  },
  mounted() {
    axios
      .get("http://openlibrary.org/search.json?author=OL26320A")
      .then((res) => {
        this.bookList = res.data.docs;
        console.log(this.book);
      })
      .catch((error) => console.log(error));
  },
  methods: {
    // updateList: async () => {
    //   this.book = await getData();
    // },
  },
};
</script>

<style scoped></style>
