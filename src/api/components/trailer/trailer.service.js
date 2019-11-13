import viaplayService from '../../../../services/viaplay.service';
import tbmdService from '../../../../services/tmdb.service';

const getTrailerURL = async (movieResourceLink) => {
  const imdbId = await viaplayService.getImdbId(movieResourceLink);
  const result = await tbmdService.getTrailerFromApi(imdbId);

  const data = {
    trailerURL: result,
  };

  return data;
};

export default { getTrailerURL };
