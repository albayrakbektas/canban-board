<template>
  <div>
    <div v-for="(item, index) in bookList" :key="index">
      <h1>{{ item[0].first_publish_year }}</h1>
      <div v-for="(check, index) in item" :key="index">
        <div>
          <div>{{ check.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firstPublish from "@/methods/firstPublish";
import { mapActions, mapState } from "vuex";

export default {
  name: "DenemeC",
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapActions(["initApp"]),
    ...mapState(["bookList"]),
  },
};
</script>

<style scoped></style>
