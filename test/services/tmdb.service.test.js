import { expect } from 'chai';
import tmdbService from '../../services/tmdb.service';

describe('Tmdb Service', () => {
  const captainMarvelImdbId = 'tt4154664';

  describe('#getMovieId(imdbId)', () => {
    it('should return tmdb movie id when passed an imdb id', async () => {
      const captainMarvelTmdbMovieId = 299537;
      const movieId = await tmdbService.getMovieId(captainMarvelImdbId);
      expect(movieId).to.be.equal(captainMarvelTmdbMovieId);
    });

    it('should return 404 when passed an inexistent imdb id', async () => {
      const inexistentImdbId = 'tt4154665';
      const { statusCode } = await tmdbService.getMovieId(inexistentImdbId);
      expect(statusCode).to.be.equal(404);
    });
  });
});
