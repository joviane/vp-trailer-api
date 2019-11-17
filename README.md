# Viaplay Trailer API

An API to retrieve trailer information for viaplay movies

[![Build Status](https://travis-ci.org/joviane/vp-trailer-api.svg?branch=master)](https://travis-ci.org/joviane/vp-trailer-api)

## Getting Started

1. Clone this project;
2. Change directory to `vp-trailer-api` where you cloned it;
3. At the terminal, run the following command on the project root directory:
   ```
   docker-compose up
   ```
4. To get a trailer URL, pass a movie resource link like this example: [https://localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/captain-marvel-2019](https://localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/captain-marvel-2019)

### Prerequisites

- Docker
- Docker Compose

## Running the tests

1. Run the following command on the project root directory:
    ```
    npm test
    ```

## Considerations

- I decided to receive the movie resource link as a query parameter to built a more restful solution. This is a search operation so this request should be sent by GET method;
- This solution uses Fastify, a framework thought for performance. It was very productive to use it and the framework resembles express / restify which turns it more attractive to adopt in a team with knowledge in one or both of them;
- I used Redis for a server side caching. I didn't find in TMDb API a reliable way to get the latest released trailer so I cached the first one returned by the API;
- To improve the solution it'll be good to do a retry request in case of an error from the APIs;
- I added a badge for build status because I think it was cool :-)

## For production
- We could put a nginx with a reverse proxy for better response time, scalability and also more security. As answered by the team, we can configure the request limit at nginx to minimize the risks of DDoS attacks;
- Another improvement if necessary could be use a load balancer to handle even more requests and send messages to syncronize the cache layer;

### Questions to ask

- What is the ?dtg param in URL? Example: https://content.viaplay.se/ios-se{?dtg}

## Built With

- [Fastify](http://fastify.io)

## Author

- **Joviane Jardim** - [@joviane](https://twitter.com/jovianejardim)