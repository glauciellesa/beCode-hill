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

addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  data.forEach((movie) => {
    const cardMovie = createNode("div", "card-movie");
    container.appendChild(cardMovie);
    const imgMovie = createNode("div", "movie-img");
    cardMovie.appendChild(imgMovie);
    const img = createNode("img", "");
    img.src = `assets/img/${movie.img}`;
    imgMovie.appendChild(img);
    const movieInformation = createNode("div", "movie-information");
    cardMovie.appendChild(movieInformation);
    const titleMovie = createNode("p", "movie-title");
    titleMovie.innerHTML = movie.title;
    movieInformation.appendChild(titleMovie);
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
    movieInformation.appendChild(movieTag);
    const movieOverview = createNode("p", "tag-year");
    movieOverview.innerHTML = movie.overview;
    movieInformation.appendChild(movieOverview);
    const movieStar = createNode("div", "movie-star");
    movieInformation.appendChild(movieStar);
    creatStar(movieStar, movie.movieStar);
  });
});
