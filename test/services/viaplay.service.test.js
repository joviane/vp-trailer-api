import { expect } from 'chai';
import viaplayService from '../../services/viaplay.service';

describe('Viaplay Service', () => {
  describe('#getImdbId(movieResourceLink)', () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = 'captain-marvel-2019';

    it('should return imdb id when passed an existing movie', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}`;
      const imdbId = await viaplayService.getImdbId(movieResourceLink);
      expect(imdbId).to.be.equal('tt4154664');
    });

    it('should return error when a movie is not found', () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/movie-not-found`;
      expect(() => {
        viaplayService.getImdbId(movieResourceLink);
      }).to.throw;
    });
  });
});
