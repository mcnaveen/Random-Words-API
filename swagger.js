import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Random Words API',
      version: '1.0.0',
      description: 'API for getting random words in different languages',
      contact: {
        name: 'Source Code',
        url: 'https://github.com/mcnaveen/random-words-api',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Language: {
          type: 'string',
          enum: ['spanish', 'french', 'dutch', 'japanese', 'chinese', 'turkish'],
          description: 'Available languages for random words',
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);

export default specs;