import superagent from 'superagent';

const { TMDB_API_KEY } = process.env;

const getMovieId = async (imdbId) => {
  const tmdbFindByImdbIdApiUrl = `https://api.themoviedb.org/3/find/${imdbId}?api_key=${TMDB_API_KEY}&external_source=imdb_id`;
  try {
    const { body } = await superagent.get(tmdbFindByImdbIdApiUrl);
    const movieResult = body.movie_results[0];
    if (movieResult) {
      const movieId = movieResult.id;
      return movieId;
    }
    const error = new Error();
    error.statusCode = 404;
    error.message = 'trailer not found';
    return error;
  } catch (error) {
    return error;
  }
};

const getTrailerURL = async (imdbId) => {
  const movieId = getMovieId(imdbId);
  return movieId;
};

export default { getMovieId, getTrailerURL };
