const axios = require("axios");

const getData = async () => {
  axios
    .get("https://openlibrary.org/search.json?author=OL26320A")
    .then((res) => {
      console.log(res.data.docs);
      return res.data.docs;
    })
    .catch((error) => console.log(error));
};
getData();
module.exports = getData;
