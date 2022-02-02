const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);

/**
 *
 * @param {String} key
 * @returns
 */
async function get(key) {
  const reply = await getAsync(key);
  return reply ? JSON.parse(reply) : null;
}

/**
 *
 * @param {String} key
 * @param {String} value
 * @param {Number} expires 1
 */
async function set(key, value, expires) {
  const expiresInSeconds = expires * 60;
  await setAsync(key, JSON.stringify(value), 'EX', expiresInSeconds);
}

// class RedisService {
//   constructor() {
//     this.client = redis.createClient();
//     this.getAsync = promisify(this.client.get).bind(this.client);
//     this.setAsync = promisify(this.client.set).bind(this.client);
//   }

//   async get(key) {
//     const reply = await this.getAsync(key);
//     return reply ? JSON.parse(reply) : null;
//   }

//   async set(key, value, expires) {
//     const expiresInSeconds = expires * 60;
//     await this.setAsync(key, JSON.stringify(value), 'EX', expiresInSeconds);
//   }
// }

// module.exports = RedisService;

module.exports =  {get, set};
