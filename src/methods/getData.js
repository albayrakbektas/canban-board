const axios = require("axios");

// class Book {
//   constructor(
//     key,
//     type,
//     seed,
//     title,
//     edition_count,
//     first_publish_year,
//     number_of_pages_median,
//     language,
//     author_key,
//     author_name
//   ) {
//     this.key = key;
//     this.type = type;
//     this.seed = seed;
//     this.title = title;
//     this.editionCount = edition_count;
//     this.firstPublishedYear = first_publish_year;
//     this.numberOfPages = number_of_pages_median;
//     this.language = language;
//     this.authorKey = author_key;
//     this.authorName = author_name;
//   }
// }

const getData = async () => {
  const response = await axios
    .get("http://openlibrary.org/search.json?author=OL26320A")
    .then((res) => {
      console.log(res.data.docs[0]);
      return res.data.docs[0];
    })
    .catch((error) => console.log(error));
  const book = {
    key: response["key"],
    type: response["type"],
    seed: response["seed"],
    title: response["title"],
    editionCount: response["edition_count"],
    firstPublishYear: response["first_publish_year"],
    numberOfPages: response["number_of_pages_median"],
    language: response["language"],
    authorKey: response["author_key"],
    authorName: response["author_name"],
  };
  // console.log(book);
  return book;
};
getData();
module.exports = getData;
