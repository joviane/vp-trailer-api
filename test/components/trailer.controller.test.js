import request from 'supertest';
import { expect } from 'chai';

import fastify from '../../src/api/server';

const { server } = fastify;
const url = '/trailer';

describe('Trailer Controller', () => {
  before(async () => {
    await fastify.ready();
  });

  after(async () => {
    fastify.close();
  });

  describe(`GET ${url}`, () => {
    const contentAPI = 'https://content.viaplay.se/pc-se/film';
    const movieResourceLink = `${contentAPI}/captain-marvel-2019`;

    it('should respond 200 and trailer with valid url', async () => {
      const validURL = `${url}?movieResourceLink=${movieResourceLink}`;
      const captainMarvelTrailer =
        'https://www.youtube.com/watch?v=Z1BCujX3pw8';
      const response = await request(server).get(validURL);
      const { status, body } = response;
      expect(status).to.be.equal(200);
      expect(body).to.have.property('trailerURL');
      expect(body.trailerURL).to.be.equal(captainMarvelTrailer);
    });

    it('should respond 400 with url without query parameter', async () => {
      const { status } = await request(server).get(url);
      expect(status).to.be.equal(400);
    });

    it('should respond 400 with invalid movieResourceLink', async () => {
      const urlWithInvalidQueryParam = `${url}?movieResourceLink=${contentAPI}`;
      const { status } = await request(server).get(urlWithInvalidQueryParam);
      expect(status).to.be.equal(400);
    });

    it('should respond 404 when movie not found', async () => {
      const validURL = `${url}?movieResourceLink=${contentAPI}/movie-not-found`;
      const { status } = await request(server).get(validURL);
      expect(status).to.be.equal(404);
    });
  });
});
