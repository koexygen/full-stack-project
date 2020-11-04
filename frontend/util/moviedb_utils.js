export const fetchPopular = (key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  });
};

export const getMovieTrailer = (movieId, key) => {
  return $.ajax({
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}`,
  });
};
