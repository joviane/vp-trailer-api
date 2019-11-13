import { expect } from 'chai';
import tmdbService from '../../services/tmdb.service';

describe('Tmdb Service', () => {
  describe('#getTrailerFromApi(imdbId)', () => {
    it('should return trailer url when passed an imdb id', async () => {
      const captainMarvelImdbId = 'tt4154664';
      const captainMarvelTrailer =
        'https://www.youtube.com/watch?v=Z1BCujX3pw8';
      const trailerURL = await tmdbService.getTrailerFromApi(
        captainMarvelImdbId
      );
      expect(trailerURL).to.be.equal(captainMarvelTrailer);
    });
  });
});
