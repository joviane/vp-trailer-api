import getTrailerURL from './trailer.service';

const getTrailer = async (req) => {
  const { movieResourceLink } = req.query;

  const trailerURL = await getTrailerURL(movieResourceLink);
  return trailerURL;
};

export default getTrailer;
