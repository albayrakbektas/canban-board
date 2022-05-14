const axios = require("axios");
const firstPublish = async () => {
  axios
    .get("https://openlibrary.org/search.json?author=OL26320A")
    .then((res) => {
      // let hash = {};
      // for (let i = 0; i < res.data.docs.length; i++) {
      //   if (!hash[res.data.docs[i]["first_publish_year"]])
      //     hash[res.data.docs[i]["first_publish_year"]] = [];
      //   hash[res.data.docs[i]["first_publish_year"]].push(res.data.docs[i]);
      let hash = {};
      for (let i = 0; i < res.data.docs.length; i++) {
        if (!hash[res.data.docs[i]["first_publish_year"]]) {
          hash[res.data.docs[i]["first_publish_year"]] = [];
        }
        hash[res.data.docs[i]["first_publish_year"]].push(res.data.docs[i]);
      }
      let index = Object.values(hash).indexOf("2021");
      console.log(hash[index]);
      // if (Object.values(hash)[index].includes("eng")) {
      //   console.log("var");
      // } else {
      //   console.log("yok");
      // }
      console.log(index);
      console.log(Object.values(hash)[1][0]["language"]);
      return hash;
    })
    .catch((error) => console.log(error));
};
firstPublish();
module.exports = firstPublish;
