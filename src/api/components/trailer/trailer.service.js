import viaplayService from '../../../../services/viaplay.service';
import tbmdService from '../../../../services/tmdb.service';

const getTrailerURL = async (movieResourceLink) => {
  const imdbId = await viaplayService.getImdbId(movieResourceLink);

  if (imdbId == null) {
    const error = new Error();
    error.statusCode = 404;
    error.message = 'movie not found';
    return error;
  }

  const result = await tbmdService.getTrailerFromApi(imdbId);

  if (result == null) {
    const error = new Error();
    error.statusCode = 404;
    error.message = 'trailer not found';
    return error;
  }

  const data = {
    trailerURL: result,
  };

  return data;
};

export default { getTrailerURL };
