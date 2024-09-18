const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*
// Destructuring

const book = getBook(2); // acting like this is an API call and we are getting the book with id 2 and asynchronusly we are getting the data and then we are destructuring it
book;

// const title = book.title;
// const author = book.author;

// destructuring the object and assigning the values to the variables
const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book; // important to use the same name as the property in the object, taking the value of the property and assigning it to the variable with the same name

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // destructuring the array, taking the first two elements and the rest of the array using the rest operator (rest of the elements)

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "epic fantasy"]; // spread takes each element of the array and puts it in the new array, adding a new element to the array
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overriding the value of a property
  pages: 1210,
}; // spread is really useful for updating objects, it takes all the properties of the object and adds a new property to it and we can also use spread to update the value of a property. Spread needs to be first so that the new value in 'pages' can override the old value
updatedBook;

// function getYear(str) { // function declaration
//   return str.split("-")[0]; // split is a string method that splits the string into an array of strings, we are splitting the string by the hyphen and taking the first element of the array
// }

// const getYear = (str) => {
//   // arrow function with multiple lines
//   return str.split("-")[0];
// };
const getYear = (str) => str.split("-")[0]; // function expression, arrow function, very useful for one-liners callback functions

const summary = `${title}, a ${pages}-page long book, was written by ${author} and was published on ${getYear(
  publicationDate
)}. It belongs to the genres of ${genres.join(", ")}. The book has ${
  hasMovieAdaptation ? "" : "not" // we could not use an if statement here because it does not return a value, so it's perfect time to use a ternary operator. And we do this all the time in React
} been adapted as a movie.`;
summary;

const pagesRange = pages > 1000 ? "long" : "short"; // ternary operator, if the number of pages is greater than 1000 then it is a long book otherwise it is a short book
pagesRange;
console.log(`This is a ${pagesRange} book.`);

const [a, b, c] = publicationDate.split("-");
console.log(a, b, c);

// Short-circuiting
console.log(true && "Hello"); // if the first value is true then the second value is returned
console.log(false && "Hello"); // if the first value is false then the first value is returned it doesn't even look at the second value
console.log(hasMovieAdaptation && "This book has a movie adaptation."); // if the first value is true then the second value is returned

// falsy values: false, 0, "", null, undefined, NaN
console.log("jonas" && "Hello"); // truthy value is any value that is not falsy, so random string is a truthy value
console.log("" && "Hello"); // falsy value, short-circuiting in action

console.log(true || "Hello"); // if the first value is true then the first value is returned, so it doesn't even look at the second value because it is true
console.log(false || "Hello");

console.log(book.translations.spanish);
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"; // we are using the falsy value to our advantage, "NOT TRANSLATED" is returned
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || "no data";
countWrong; // this is wrong because it returns 'no data' because the value is 0, 0 is a falsy value to fix this we can use the nullish coalescing operator '??'

const count = book.reviews.librarything.reviewsCount ?? "no data"; // nullish coalescing operator, it only returns the second value if the first value is null or undefined
count;

// Optional chaining operator
function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // optional chaining operator, if the value for librarything is null or undefined then it will stop there and return undefined, so then we use the nullish coalescing operator to return 0
  return goodreads + librarything;
}
getTotalReviews(book);

 */

// Before bulding anything truly meaningful in React you need to be a true master of the 3 functional array methods: map, filter, reduce
// we call them functional array methods because they don't mutate the original array, they return a new array

function getTotalReviews(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; // optional chaining operator, if the value for librarything is null or undefined then it will stop there and return undefined, so then we use the nullish coalescing operator to return 0
  return goodreads + librarything;
}

const books = getBooks(); // fictional API call
// map method loops over the array and returns a new array with the same length, with some operations applied to each element of the original array
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviews(book),
})); // using () instead of {} to return an object, this is a shorthand syntax for automatically returning an object
essentialData;

// filter method loops over the array and returns a new array with the elements that pass the condition
// return true to keep the element, return false to remove the element
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation); // doing an && is more efficient than chaining filter methods but this is just for demonstration purposes
longBooks;

const adventureBooks = books.filter((book) =>
  book.genres.includes("adventure").map((book) => book.title)
);
adventureBooks;
