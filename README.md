# Viaplay Trailer API

An API to retrieve trailer information for viaplay movies from [TMDb](https://www.themoviedb.org/)

[![Build Status](https://travis-ci.com/joviane/vp-trailer-api.svg?branch=master)](https://travis-ci.com/joviane/vp-trailer-api)

## Getting Started

1. Clone this project;
2. Change directory to `vp-trailer-api` where you cloned it;
3. At the terminal, run the following command on the project root directory:
   ```
   docker-compose up
   ```
4. To get a trailer URL, pass a movie resource link like this example: [localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/mission-impossible-rogue-nation-2015](localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/mission-impossible-rogue-nation-2015)

### Prerequisites

- Docker
- Docker Compose

## Running the tests

1. Run the following command on the project root directory:
    ```
    npm test
    ```

## Running benchmark

1. Run the following command on the project root directory:
    ```
    npm run benchmark
    ```

**Benchmark output**

This benchmark was run in a machine using `Intel© Core™ i7-8750H CPU @ 2.20GHz × 6`.

```
> autocannon -c 100 -d 40 -p 10 http://localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/mission-impossible-rogue-nation-2015

Running 40s test @ http://localhost:3000/trailer?movieResourceLink=https://content.viaplay.se/pc-se/film/mission-impossible-rogue-nation-2015
100 connections with 10 pipelining factor

┌─────────┬──────┬──────┬───────┬───────┬─────────┬─────────┬───────────┐
│ Stat    │ 2.5% │ 50%  │ 97.5% │ 99%   │ Avg     │ Stdev   │ Max       │
├─────────┼──────┼──────┼───────┼───────┼─────────┼─────────┼───────────┤
│ Latency │ 1 ms │ 2 ms │ 31 ms │ 32 ms │ 4.84 ms │ 8.95 ms │ 105.33 ms │
└─────────┴──────┴──────┴───────┴───────┴─────────┴─────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬─────────┬─────────┬────────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%   │ Avg     │ Stdev  │ Min     │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Req/Sec   │ 16927   │ 16927   │ 18447   │ 20031   │ 18584.8 │ 655.98 │ 16917   │
├───────────┼─────────┼─────────┼─────────┼─────────┼─────────┼────────┼─────────┤
│ Bytes/Sec │ 5.67 MB │ 5.67 MB │ 6.18 MB │ 6.71 MB │ 6.23 MB │ 220 kB │ 5.67 MB │
└───────────┴─────────┴─────────┴─────────┴─────────┴─────────┴────────┴─────────┘

Req/Bytes counts sampled once per second.

743k requests in 40.06s, 249 MB read
```

## Considerations

- I decided to receive the movie resource link as a query parameter to built a more restful solution. This is a search operation so this request should be sent by GET method;
- This solution uses Fastify, a framework thought for performance. It was very productive to use it and the framework resembles express which turns it more attractive to adopt in a team with knowledge in one or both of them;
- I used Redis for a server side caching. I didn't find in TMDb API a reliable way to get the latest released trailer so I cached the first returned result by the API;
- To improve the solution it'll be good to do a retry request in case of an error from the APIs;
- I added a badge for build status because I think it was cool :-)

## For production

- We could put a nginx with a reverse proxy for better response time, scalability and also more security. As the team answered that the API has a request limit, we can configure this limit at nginx to minimize the risks of DDoS attacks;
- Another improvement if necessary could be use a load balancer to handle even more requests, separate the cache from server, and send messages to syncronize the cache layer.

### Questions to ask

- What is the ?dtg param in URL? Example: https://content.viaplay.se/ios-se{?dtg}

## Built With

- [Fastify](http://fastify.io)
- [ioredis](https://github.com/luin/ioredis)

## Author

- **Joviane Jardim** - [@joviane](https://twitter.com/jovianejardim)
