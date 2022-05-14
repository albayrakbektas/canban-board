const axios = require("axios");

const bookFilterAuthorId = async (authorId) => {
  await axios
    .get(`https://openlibrary.org/search.json?author=${authorId}`)
    .then((res) => {
      console.log(res.data.docs);
      return res.data.docs;
    })
    .catch((error) => console.log(error));
};
bookFilterAuthorId("OL4327048A");
module.exports = bookFilterAuthorId;
