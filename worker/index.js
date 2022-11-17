const keys = require("./keys");
const fib = require("./fib");

const redis = require("redis");
const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();
sub.on("message", (channel, message) => {
  const n = parseInt(message);
  console.log(`calculating fb(${n}) ...`);
  const value = fib(n);
  console.log(`fb(${n}) = ${value}`);
  redisClient.hset("values", message, value);
});
sub.subscribe("insert");
