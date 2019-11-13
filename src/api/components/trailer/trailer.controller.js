import trailerService from './trailer.service';

const getTrailer = async (req, res) => {
  const { movieResourceLink } = req.query;

  try {
    const trailerURL = await trailerService.getTrailerURL(movieResourceLink);
    res.type('application/json');
    res.send({
      trailerURL,
    });
  } catch (error) {
    res.send(error);
  }
};

export default getTrailer;
