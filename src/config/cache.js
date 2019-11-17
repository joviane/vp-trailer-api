import Ioredis from 'ioredis';

const { REDIS_URL } = process.env;
const redis = new Ioredis(REDIS_URL);

export default redis;
