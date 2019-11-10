import request from 'supertest';
import { expect } from 'chai';

import fastify from '../../src/api/server';

const { server } = fastify;

const url = '/trailer';
const urlWithQueryParam = `${url}?movie_resource_link=https://content.viaplay.se/pc-se/film/captain-marvel-2019`;

describe('Trailer Controller', () => {
  before(async () => {
    await fastify.ready();
  });

  after(async () => {
    fastify.close();
  });

  describe(`GET ${url}`, () => {
    it('should respond 200 with valid url', async () => {
      const { status } = await request(server).get(urlWithQueryParam);
      expect(status).to.be.equal(200);
    });

    it('should respond 400 with url without query parameter', async () => {
      const { status } = await request(server).get(url);
      expect(status).to.be.equal(400);
    });
  });
});
