import fastify from 'fastify';

const server = fastify({ logger: true });

server.get('/', (req, res) => {
  res.send({ hello: 'world' });
});

export default server;
