import { expect } from 'chai';
import getImdbId from '../../services/viaplay.service';

describe('Viaplay Service', () => {
  describe('#getImdbId(movieResourceLink)', () => {
    const resourceLinkWithoutMovie = 'https://content.viaplay.se/pc-se/film';
    const movieSlug = 'captain-marvel-2019';

    it('should return imdb id when passed an existing movie', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/${movieSlug}`;
      const imdbId = await getImdbId(movieResourceLink);
      expect(imdbId).to.be.equal('tt4154664');
    });

    it('should return 404 when a movie is not found', async () => {
      const movieResourceLink = `${resourceLinkWithoutMovie}/movie-not-found`;
      const { status } = await getImdbId(movieResourceLink);
      expect(status).to.be.equal(404);
    });
  });
});
