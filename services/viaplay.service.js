/* eslint-disable no-underscore-dangle */
import superagent from 'superagent';

const getImdbId = async (movieResourceLink) => {
  const { body } = await superagent.get(movieResourceLink);
  const { imdb } = body._embedded['viaplay:blocks'][0]._embedded[
    'viaplay:product'
  ].content;
  return imdb.id;
};

export default { getImdbId };
