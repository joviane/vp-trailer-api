import request from 'supertest';

import fastify from '../../src/api/server';

const { server } = fastify;

const url = '/trailer';
const urlWithParam = `${url}?movie_resource_link=https://content.viaplay.se/pc-se/film/captain-marvel-2019`;

describe('Trailer Controller', () => {
  before(async () => {
    await fastify.ready();
  });

  after(async () => {
    fastify.close();
  });

  describe(`GET ${url}`, () => {
    it('should respond with json', (done) => {
      request(server)
        .get(urlWithParam)
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });
});
