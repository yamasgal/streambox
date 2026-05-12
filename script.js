// js/script.js

const movies = [
  {
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    watched: true,
  },
  {
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    watched: true,
  },
  {
    title: "Parasite",
    year: 2019,
    genre: "Drama",
    rating: 8.6,
    watched: false,
  },
  {
    title: "Knives Out",
    year: 2019,
    genre: "Comedy",
    rating: 7.9,
    watched: true,
  },
  {
    title: "Get Out",
    year: 2017,
    genre: "Thriller",
    rating: 7.7,
    watched: false,
  },
  {
    title: "La La Land",
    year: 2016,
    genre: "Drama",
    rating: 8.0,
    watched: true,
  },
];

console.log("StreamBox catalog loaded:", movies.length, "movies");

// 1. Log every title
movies.forEach((m) => console.log(m.title));

// 2. All Drama movies
const dramas = movies.filter((m) => m.genre === "Drama");
console.log(dramas);

// 3. Highest-rated movie
const topRating = Math.max(...movies.map((m) => m.rating));

const best = movies.find((m) => m.rating === topRating);

console.log("Top pick:", best.title);
