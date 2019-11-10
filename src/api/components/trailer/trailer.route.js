import getTrailer from './trailer.controller';
import schema from './trailer.schema';

const trailerRoutes = (server) => {
  server.get('/trailer', { schema }, getTrailer);
};

export default trailerRoutes;
