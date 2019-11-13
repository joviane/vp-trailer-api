import trailerService from './trailer.service';

const getTrailer = async (req, res) => {
  const { movieResourceLink } = req.query;

  try {
    const data = await trailerService.getTrailerURL(movieResourceLink);
    res.type('application/json');
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

export default getTrailer;
