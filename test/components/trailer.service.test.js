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
      const data = await trailerService.getTrailerURL(movieResourceLink);
      expect(data).to.have.property('trailerURL');
      expect(data.trailerURL).to.be.equal(captainMarvelTrailer);
    });

    it('should return error with an invalid movieResourceLink', async () => {
      const invalidMovieResourceLink = `${resourceLinkWithoutMovie}/`;
      const result = await trailerService.getTrailerURL(
        invalidMovieResourceLink
      );
      expect(result).to.be.an('Error');
    });

    it('should return 404 when movie not found', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/movie-not-found`;
      const { statusCode } = await trailerService.getTrailerURL(
        movieResourceLink
      );
      expect(statusCode).to.be.equal(404);
    });
  });
});
