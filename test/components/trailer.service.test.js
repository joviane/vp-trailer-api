import { expect } from 'chai';
import getTrailerURL from '../../src/api/components/trailer/trailer.service';

describe('Trailer Service', () => {
  describe('#getTrailerURL(movieResourceLink)', () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = 'captain-marvel-2019';

    it('should return trailerURL with a valid movieResourceLink', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}`;
      const resultSlug = await getTrailerURL(movieResourceLink);
      expect(resultSlug).to.be.equal(movieSlug);
    });

    it('should return error with an invalid movieResourceLink', async () => {
      const invalidMovieResourceLink = `${resourceLinkWithoutMovie}/`;
      const result = await getTrailerURL(invalidMovieResourceLink);
      expect(result).to.be.an('Error');
    });
  });
});
