import viaplayService from '../../../../services/viaplay.service';
import tbmdService from '../../../../services/tmdb.service';

const getTrailerURL = async (movieResourceLink) => {
  const imdbId = await viaplayService.getImdbId(movieResourceLink);
  const trailerURL = await tbmdService.getTrailerFromApi(imdbId);
  return trailerURL;
};

export default { getTrailerURL };
