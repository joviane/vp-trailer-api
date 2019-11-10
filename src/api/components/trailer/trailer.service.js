import getMovieSlugFromLink from '../../lib/validator.lib';

const getTrailerURL = async (movieResourceLink) => {
  const movieSlug = getMovieSlugFromLink(movieResourceLink);

  if (movieSlug == null) {
    const error = new Error();
    error.statusCode = 400;
    error.message = 'invalid movieResourceLink';
    return error;
  }
  return movieSlug;
};

export default getTrailerURL;
