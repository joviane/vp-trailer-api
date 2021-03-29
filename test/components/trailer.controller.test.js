import request from 'supertest';
import { expect } from 'chai';

import fastify from '../../src/api/server';
import redis from '../../src/config/cache';

const { server } = fastify;
const url = '/trailer';

describe('Trailer Controller', () => {
  before(async () => {
    await fastify.ready();
    await redis.flushdb();
  });

  after(async () => {
    fastify.close();
  });

  describe(`GET ${url}`, () => {
    const contentAPI = 'https://content.viaplay.se/pc-se/film';
    const movieResourceLink = `${contentAPI}/mission-impossible-rogue-nation-2015`;

    it('should respond 200 and trailer with valid url', async () => {
      const validURL = `${url}?movieResourceLink=${movieResourceLink}`;
      const trailerURL =
        'https://www.youtube.com/watch?v=F-qBD17wwrQ';
      const response = await request(server).get(validURL);
      const { status, body } = response;
      expect(status).to.be.equal(200);
      expect(body).to.have.property('trailerURL');
      expect(body.trailerURL).to.be.equal(trailerURL);
    });

    it('should respond 200 and trailer with valid url with extra query params', async () => {
      const validURL = `${url}?movieResourceLink=${movieResourceLink}&paramName=paramValue`;
      const trailerURL =
        'https://www.youtube.com/watch?v=F-qBD17wwrQ';
      const response = await request(server).get(validURL);
      const { status, body } = response;
      expect(status).to.be.equal(200);
      expect(body).to.have.property('trailerURL');
      expect(body.trailerURL).to.be.equal(trailerURL);
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
