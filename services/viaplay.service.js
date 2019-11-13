/* eslint-disable no-underscore-dangle */
import superagent from 'superagent';

const getImdbId = async (movieResourceLink) => {
  try {
    const { body, error } = await superagent.get(movieResourceLink);
    if (error) {
      return null;
    }
    const { imdb } = body._embedded['viaplay:blocks'][0]._embedded[
      'viaplay:product'
    ].content;
    return imdb.id;
  } catch ({ response }) {
    return null;
  }
};

export default { getImdbId };
