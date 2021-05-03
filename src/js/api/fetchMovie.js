const axios = require("axios").default;

export const fetchMovie = async (imdbID) => {
  const URL = `http://www.omdbapi.com`;
  let mMovie = "";

  console.log("hsabd");
  try {
    mMovie = await axios({
      method: "get",
      url: URL,
      params: {
        i: imdbID,
        apikey: process.env.API_KEY,
      },
    });

    mMovie = await mMovie.data;
  } catch (err) {
    console.log(err);
  }

  return mMovie;
};
