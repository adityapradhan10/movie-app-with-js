import "../scss/style.scss";
import { fetchMovie } from "./api/fetchMovie";

const singleMovie = document.querySelector("#single-movie");
const imdbLink = document.querySelector("#imdb-link");
imdbLink.href = `https://www.imdb.com/title/${imdbID}/`;

const mMovie = fetchMovie(imdbID);
mMovie
  .then((moive) => {
    let posterUrl = moive.Poster;
    let indexOfRes = posterUrl.lastIndexOf("3");
    posterUrl =
      posterUrl.substring(0, indexOfRes) +
      "12" +
      posterUrl.substring(indexOfRes + 1);

    singleMovie.querySelector("#poster").src = posterUrl;
    singleMovie.querySelector("#name").textContent = moive.Title;
    singleMovie.querySelector("#year").textContent = moive.Year;
    singleMovie.querySelector("#plot").textContent = moive.Plot;
    singleMovie.querySelector("#director").textContent = moive.Director;
    singleMovie.querySelector("#writer").textContent = moive.Writer;
    singleMovie.querySelector("#type").textContent = moive.Type;
    singleMovie.querySelector("#duration").textContent = moive.Runtime;
    singleMovie.querySelector("#genre").textContent = moive.Genre;
    singleMovie.querySelector("#actors").textContent = moive.Actors;
  })
  .catch((err) => console.log(err));
