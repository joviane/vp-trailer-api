import { expect } from 'chai';
import trailerService from '../../src/api/components/trailer/trailer.service';

describe('Trailer Service', () => {
  describe('#getTrailerURL(movieResourceLink)', () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = 'mission-impossible-rogue-nation-2015';

    it('should return trailerURL with a valid movieResourceLink', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}`;
      const trailerURL =
        'https://www.youtube.com/watch?v=F-qBD17wwrQ';
      const trailerResponseURL = await trailerService.getTrailerURL(movieResourceLink);
      expect(trailerResponseURL).to.be.equal(trailerURL);
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
