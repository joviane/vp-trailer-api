const schema = {
  querystring: {
    type: 'object',
    properties: {
      movieResourceLink: {
        type: 'string',
      },
    },
    required: ['movieResourceLink'],
  },
};

export default schema;
