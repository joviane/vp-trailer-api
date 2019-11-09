import fastify from 'fastify';
import trailerRoutes from './components/trailer/trailer.route';

const server = fastify({ logger: true });

server.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

trailerRoutes(server);

export default server;
