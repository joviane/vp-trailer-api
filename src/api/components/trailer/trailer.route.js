import getTrailer from './trailer.controller';

const trailerRoutes = (server) => {
  server.get('/trailer', getTrailer);
};

export default trailerRoutes;
