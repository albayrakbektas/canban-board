const axios = require("axios");

const bookFilterLanguage = async (language) => {
  await axios
    .get("http://openlibrary.org/search.json?author=OL26320A")
    .then((res) => {
      for (let book of res.data.docs) {
        if (book.language && Object.values(book.language).includes(language)) {
          return book;
        }
      }
    })
    .catch((error) => console.log(error));
};
bookFilterLanguage("ger");
module.exports = bookFilterLanguage;
