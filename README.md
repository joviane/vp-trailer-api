# Viaplay Trailer API

An API to retrieve trailer information for viaplay movies

[![Build Status](https://travis-ci.org/joviane/vp-trailer-api.svg?branch=master)](https://travis-ci.org/joviane/vp-trailer-api)

## Getting Started

1. Clone this project
2. On Terminal, run the following command to start the application:
   ```
   docker-compose up
   ```
3. To get a trailer URL, pass a movie resource link like this example: [https://localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/captain-marvel-2019](https://localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/captain-marvel-2019)

### Prerequisites

- Docker
- Docker Compose

## Running the tests

npm test


## Questions to ask

- What is the ?dtg param in URL? Example: https://content.viaplay.se/ios-se{?dtg}

## Built With

- [Fastify](http://fastify.io)

## Author

- **Joviane Jardim** - [@joviane](https://twitter.com/jovianejardim)
