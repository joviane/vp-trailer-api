const schema = {
  querystring: {
    type: 'object',
    properties: {
      movieResourceLink: {
        type: 'string',
        pattern: '^https?://content.viaplay.se/\\w*-se/film/([\\w-]+)',
      },
    },
    required: ['movieResourceLink'],
  },
  response: {
    200: {
      type: 'object',
      properties: {
        trailerURL: { type: 'string' },
      },
    },
  },
};

export default schema;
