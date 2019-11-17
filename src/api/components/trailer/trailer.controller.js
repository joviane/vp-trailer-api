import trailerService from './trailer.service';
import redis from '../../../config/cache';

const retrieveTrailer = async (movieResourceLink) => {
  const trailerURL = await trailerService.getTrailerURL(movieResourceLink);

  await redis.set(movieResourceLink, trailerURL);
  return trailerURL;
};

const getTrailer = async (req, res) => {
  const { movieResourceLink } = req.query;
  try {
    let trailerURL = await redis.get(movieResourceLink);
    if (!trailerURL) {
      trailerURL = await retrieveTrailer(movieResourceLink);
    }
    return res.send({
      trailerURL,
      links: {
        self: {
          href: `${req.raw.hostname}${req.raw.url}`,
        },
      },
    });
  } catch (error) {
    return error;
  }
};

export default getTrailer;
