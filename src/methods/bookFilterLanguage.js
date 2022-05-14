const axios = require("axios");
let newList = [];
const bookFilterLanguage = async (language) => {
  await axios
    .get("https://openlibrary.org/search.json?author=OL26320A")
    .then((res) => {
      for (let book of res.data.docs) {
        if (book.language && !Object.values(book.language).includes(language)) {
          newList.push(book);
          // newList.push(book.first_publish_year, book.language);
        }
      }
    })
    .then(() => {
      console.log(newList.length);
    })
    .catch((error) => console.log(error));
};
bookFilterLanguage("eng");
module.exports = bookFilterLanguage;
