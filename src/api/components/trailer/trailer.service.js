import getMovieSlugFromLink from '../../lib/validator.lib';
import getImdbId from '../../../../services/viaplay.service';

const getTrailerURL = async (movieResourceLink) => {
  const movieSlug = getMovieSlugFromLink(movieResourceLink);

  if (movieSlug == null) {
    const error = new Error();
    error.statusCode = 400;
    error.message = 'invalid movieResourceLink';
    return error;
  }

  const imdbId = await getImdbId(movieResourceLink);
  return imdbId;
};

export default getTrailerURL;
