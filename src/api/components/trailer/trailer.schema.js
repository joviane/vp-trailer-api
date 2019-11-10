const schema = {
  querystring: {
    type: 'object',
    properties: {
      movie_resource_link: {
        type: 'string',
      },
    },
    required: ['movieResourceLink'],
  },
};

export default schema;
