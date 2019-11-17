import fastify from 'fastify';
import redis from '../config/cache';
import trailerRoutes from './components/trailer/trailer.route';

const server = fastify();

server.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

server.addHook('onClose', (instance, done) => {
  redis.disconnect();
  done();
});

trailerRoutes(server);

export default server;
