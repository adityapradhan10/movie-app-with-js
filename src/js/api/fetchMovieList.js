import MovieList from "../models/MovieList";
const axios = require("axios").default;

export const fetchMovieLIst = (searchedMovie) => {
  const URL = `http://www.omdbapi.com`;
  let mMovieList = [];

  mMovieList = axios({
    method: "get",
    url: URL,
    params: {
      s: searchedMovie,
      apikey: process.env.API_KEY,
    },
  })
    .then((res) => res.data.Search)
    .catch((err) => console.log(err));

  return mMovieList;
};
