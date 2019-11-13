import trailerService from './trailer.service';

const getTrailer = async (req, res) => {
  const { movieResourceLink } = req.query;

  const data = await trailerService.getTrailerURL(movieResourceLink);
  res.type('application/json');
  res.send(data);
};

export default getTrailer;
