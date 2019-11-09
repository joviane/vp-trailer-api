import { expect } from 'chai';

import getMovieSlugFromLink from '../../src/api/lib/validator.lib';

describe('Validator Lib', () => {
  describe('#getMovieSlugFromLink(url)', () => {});

  it('should return movie slug if input url is valid', async () => {
    const movieResourceLink =
      'https://content.viaplay.se/pc-se/film/captain-marvel-2019';
    const movieSlug = getMovieSlugFromLink(movieResourceLink);
    expect(movieSlug).to.equal('captain-marvel-2019');
  });

  it('should return movie slug if input url is valid and for other origin than pc-se', async () => {
    const movieResourceLink =
      'https://content.viaplay.se/chromecast-se/film/captain-marvel-2019';
    const movieSlug = getMovieSlugFromLink(movieResourceLink);
    expect(movieSlug).to.equal('captain-marvel-2019');
  });

  it('should return null if movie slug is not sent', async () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = getMovieSlugFromLink(resourceLinkWithoutMovie);
    expect(movieSlug).to.be.null;
  });

  it('should return null if url is invalid', async () => {
    const invalidMovieResourceLink = 'https://content.viaplay.se/pc-se/film/';
    const movieSlug = getMovieSlugFromLink(invalidMovieResourceLink);
    expect(movieSlug).to.be.null;
  });

  it('should return only movie slug if query parameter is passed', async () => {
    const movieResourceLink =
      'https://content.viaplay.se/pc-se/film/captain-marvel-2019?someParam=someValue';
    const movieSlug = getMovieSlugFromLink(movieResourceLink);
    expect(movieSlug).to.equal('captain-marvel-2019');
  });
});
