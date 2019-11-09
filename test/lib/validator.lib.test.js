import { expect } from 'chai';

import getMovieSlugFromLink from '../../src/api/lib/validator.lib';

describe('Validator Lib', () => {
  describe('#getMovieSlugFromLink(url)', () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = 'captain-marvel-2019';

    it('should return movie slug if input url is valid', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}`;
      const resultSlug = getMovieSlugFromLink(movieResourceLink);
      expect(resultSlug).to.equal(movieSlug);
    });

    it('should return movie slug if input url is valid and for other origin than pc-se', async () => {
      const movieResourceLink = `https://content.viaplay.se/chromecast-se/film/${movieSlug}`;
      const resultSlug = getMovieSlugFromLink(movieResourceLink);
      expect(resultSlug).to.equal(movieSlug);
    });

    it('should return null if movie slug is not sent', async () => {
      const resultSlug = getMovieSlugFromLink(resourceLinkWithoutMovie);
      expect(resultSlug).to.be.null;
    });

    it('should return null if url is invalid', async () => {
      const invalidMovieResourceLink = `${resourceLinkWithoutMovie}/`;
      const resultSlug = getMovieSlugFromLink(invalidMovieResourceLink);
      expect(resultSlug).to.be.null;
    });

    it('should return only movie slug if query parameter is passed', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}?someParam=someValue`;
      const resultSlug = getMovieSlugFromLink(movieResourceLink);
      expect(resultSlug).to.equal(movieSlug);
    });
  });
});
