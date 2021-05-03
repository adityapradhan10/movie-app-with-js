import "../scss/style.scss";
import { fetchMovieList } from "./api/fetchMovieList";

const movieList = document.getElementById("movie-list");
const movieNameForm = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");

const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

movieNameForm.addEventListener("submit", (event) => {
  event.preventDefault();
  movieNameForm.reportValidity();

  const searchedMovieInput = movieNameForm.children[0];
  const searchedMovie = searchedMovieInput.value;
  searchedMovieInput.value = "";

  if (searchedMovie !== "") {
    const mMovieList = fetchMovieList(searchedMovie);
    removeAllChildNodes(movieList);

    mMovieList
      .then((res) => {
        if (res.Response === "True") {
          return res.Search;
        } else {
          const movieHtml = document.createElement("div");
          movieHtml.classList = "movie no-data";
          movieHtml.innerHTML = `
              No data found for ${searchedMovie}
          `;
          movieList.appendChild(movieHtml);
          throw new Error(`No data found for ${searchedMovie}`);
        }
      })
      .then((resMovieList) => {
        resMovieList.forEach((movie) => {
          const movieHtml = document.createElement("div");
          movieHtml.classList = "movie";
          movieHtml.innerHTML = `
              <a href="./single.html?imdbID=${movie.imdbID}">
                  <img
                  src="${movie.Poster}"
                  alt="Movie poster"
                  class="movie__poster"
                  width="250px"
                  height="365px"
                  />
                  <div class="movie__type">${movie.Type}</div>
                  <div class="movie__info">
                      <p class="movie__info-year">${movie.Year}</p>
                      <p class="movie__info-name">${movie.Title}</p>
                  </div>
              </a>
          `;
          movieList.appendChild(movieHtml);
        });
      })
      .catch((err) => console.log(err));
  }
});
