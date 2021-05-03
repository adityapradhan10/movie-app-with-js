const axios = require("axios").default;

export const fetchMovieList = async (searchedMovie) => {
  const URL = `http://www.omdbapi.com`;
  let mMovieList = [];

  try {
    mMovieList = await axios({
      method: "get",
      url: URL,
      params: {
        s: searchedMovie,
        apikey: process.env.API_KEY,
      },
    });

    mMovieList = await mMovieList.json();
  } catch (err) {}

  return mMovieList.data;
};
