import { expect } from 'chai';
import trailerService from '../../src/api/components/trailer/trailer.service';

describe('Trailer Service', () => {
  describe('#getTrailerURL(movieResourceLink)', () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = 'captain-marvel-2019';

    it('should return trailerURL with a valid movieResourceLink', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}`;
      const captainMarvelTrailer =
        'https://www.youtube.com/watch?v=Z1BCujX3pw8';
      const trailerURL = await trailerService.getTrailerURL(movieResourceLink);
      expect(trailerURL).to.be.equal(captainMarvelTrailer);
    });

    it('should throw error with an invalid movieResourceLink', () => {
      const invalidMovieResourceLink = `${resourceLinkWithoutMovie}/`;
      expect(() => trailerService.getTrailerURL(invalidMovieResourceLink));
    });

    it('should throw error when movie not found', () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/movie-not-found`;
      expect(() => trailerService.getTrailerURL(movieResourceLink));
    });
  });
});
