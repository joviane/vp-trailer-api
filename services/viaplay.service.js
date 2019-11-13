/* eslint-disable no-underscore-dangle */
import superagent from 'superagent';

const getImdbId = async (movieResourceLink) => {
  try {
    const { body } = await superagent.get(movieResourceLink);
    const { imdb } = body._embedded['viaplay:blocks'][0]._embedded[
      'viaplay:product'
    ].content;
    return imdb.id;
  } catch (error) {
    return error;
  }
};

export default { getImdbId };
