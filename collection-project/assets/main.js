import data from "./data.json" assert { type: "json" };
console.log(data);

const createNode = (element, className) => {
  const cardMovie = document.createElement(element);
  cardMovie.className = `${className}`;
  return cardMovie;
};

const creatStar = (parent, starNumber) => {
  for (let i = 0; i < 5; i++) {
    const star = createNode(
      "i",
      `fa-solid fa-star ${i < starNumber ? "movie-star-color" : ""}`
    );
    parent.appendChild(star);
  }
};

const createImage = (parent, image) => {
  const imgMovie = createNode("div", "movie-img");
  parent.appendChild(imgMovie);
  const img = createNode("img", "");
  img.src = `assets/img/${image}`;
  imgMovie.appendChild(img);
};

const createMovieTags = (parent, movie) => {
  const movieTag = createNode("div", "movie-tag");
  const classification = createNode("p", "tag-classification");
  classification.innerHTML = movie.classification;
  movieTag.appendChild(classification);
  const movieDuration = createNode("p", "tag-duration");
  movieDuration.innerHTML = movie.duration;
  movieTag.appendChild(movieDuration);
  const movieGender = createNode("p", "tag-gender");
  movieGender.innerHTML = movie.gender;
  movieTag.appendChild(movieGender);
  const movieYear = createNode("p", "tag-year");
  movieYear.innerHTML = movie.year;
  movieTag.appendChild(movieYear);
  parent.appendChild(movieTag);
};

const createMovieInfo = (parent, movie) => {
  const movieInformation = createNode("div", "movie-information");
  parent.appendChild(movieInformation);
  const titleMovie = createNode("p", "movie-title");
  titleMovie.innerHTML = movie.title;
  movieInformation.appendChild(titleMovie);
  createMovieTags(movieInformation, movie);
  const movieOverview = createNode("p", "tag-year");
  movieOverview.innerHTML = movie.overview;
  movieInformation.appendChild(movieOverview);
  const movieStar = createNode("div", "movie-star");
  movieInformation.appendChild(movieStar);
  creatStar(movieStar, movie.movieStar);
};

addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  data.forEach((movie) => {
    const cardMovie = createNode("div", "card-movie");
    container.appendChild(cardMovie);
    createImage(cardMovie, movie.img);
    createMovieInfo(cardMovie, movie);
  });
});
