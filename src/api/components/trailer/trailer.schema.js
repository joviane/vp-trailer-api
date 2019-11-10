const schema = {
  querystring: {
    type: 'object',
    properties: {
      movie_resource_link: {
        type: 'string',
      },
    },
    required: ['movie_resource_link'],
  },
};

export default schema;
