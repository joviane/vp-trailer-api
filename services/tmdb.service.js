import superagent from 'superagent';

const { TMDB_API_KEY, YOUTUBE_PARTIAL_URL } = process.env;

const isYoutubeTrailer = (video) => {
  const isYoutube = video.site.toLowerCase() === 'youtube';
  const isTrailer = video.type.toLowerCase() === 'trailer';
  return isYoutube && isTrailer;
};

const createTrailerURL = (strings, trailerMovieHash) => {
  return (
    (trailerMovieHash && `${YOUTUBE_PARTIAL_URL}${trailerMovieHash.key}`) ||
    false
  );
};

const getTrailerFromApi = async (imdbId) => {
  const tmdbApiUrl = `https://api.themoviedb.org/3/movie/${imdbId}/videos?api_key=${TMDB_API_KEY}`;
  const { body } = await superagent.get(tmdbApiUrl);

  const trailerMovieHash = body.results.find((video) =>
    isYoutubeTrailer(video)
  );

  return createTrailerURL`${trailerMovieHash}`;
};

export default { getTrailerFromApi };
