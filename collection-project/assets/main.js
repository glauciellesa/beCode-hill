import data from "./data.json" assert { type: "json" };
console.log(data);

const createNode = (element, className) => {
  const cardMovie = document.createElement(element);
  cardMovie.className = `${className}`;
  return cardMovie;
};
//createElement('div', {class: "movie-img"}, [
// createElement('img')
// ])
const createElement = (element, attributes, children) => {
  const e = document.createElement(element);
  if (attributes != null) {
    for (const [key, value] of Object.entries(attributes)) {
      e.setAttribute(key, value);
    }
  }
  if (children != null) {
    for (const child of children) {
      e.appendChild(child);
    }
  }
  return e;
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

const createImage = (image) => {
  //   const imgMovie = createNode("div", "movie-img");
  //   parent.appendChild(imgMovie);
  //   const img = createNode("img", "");
  //   img.src = `assets/img/${image}`;
  //   imgMovie.appendChild(img);

  return createElement("div", { class: "movie-img" }, [
    createElement("img", { src: `assets/img/${image}` }),
  ]);
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
    cardMovie.appendChild(createImage(movie.img));
    createMovieInfo(cardMovie, movie);
  });
});
