const axios = require("axios");

const bookFilterAuthorId = async (authorId) => {
  let bookList = [];
  await axios
    .get("http://openlibrary.org/search.json?author=OL26320A")
    .then((res) => {
      for (let book of res.data.docs) {
        if (Object.values(book.author_key).includes(authorId)) {
          console.log(book.title, book.author_key);
        }
      }
    })
    .catch((error) => console.log(error));
};
bookFilterAuthorId("OL26320A");
module.exports = bookFilterAuthorId;
