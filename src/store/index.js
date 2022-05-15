import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookList: [],
    tableName: "Author",
    isLoading: false,
    isEmptyPage: false,
    searchKey: "author",
    searchValue: "OL26320A",
  },
  mutations: {
    setList(state, bookList) {
      state.bookList = bookList;
    },
    setSearchKey(state, key) {
      state.searchKey = key;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setTableName(state, value) {
      state.tableName = value;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
    setEmptyPage(state, value) {
      state.isEmptyPage = value;
    },
  },
  actions: {
    async filterSearch(context, { type, key }) {
      context.commit("setLoading", true);
      axios
        .get(`https://openlibrary.org/search.json?${type}=${key}`)
        .then((res) => {
          let hash = {};
          for (let i = 0; i < res.data.docs.length; i++) {
            if (!hash[res.data.docs[i]["first_publish_year"]]) {
              hash[res.data.docs[i]["first_publish_year"]] = [];
            }
            hash[res.data.docs[i]["first_publish_year"]].push(res.data.docs[i]);
          }
          if (Object.keys(hash).length === 0) {
            context.commit("setEmptyPage", true);
          } else {
            context.commit("setEmptyPage", false);
          }
          if (type === "author") {
            let index = res.data.docs[0].author_key.findIndex(
              (id) => id === key
            );
            type = `${res.data.docs[0].author_name[index]} Books`;
          } else {
            key = key.charAt(0).toUpperCase() + key.slice(1);
            type = `${key} Books`;
          }
          context.commit("setTableName", type);
          context.commit("setList", hash);
        })
        .then(() => {
          context.commit("setLoading", false);
        })
        .catch((error) => {
          context.commit("setLoading", false);
          console.log(error);
        });
    },
  },
  modules: {},
});
