const { createClient } = require("redis");

const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

let isConnected = false;

redisClient.on("error", () => {
  isConnected = false;
});

redisClient.on("connect", () => {});

redisClient.on("ready", () => {
  isConnected = true;
});

redisClient.on("end", () => {
  isConnected = false;
});

// Connect to Redis
(async () => {
  try {
    await redisClient.connect();
  } catch (err) {
    // Continue without Redis
  }
})();

// Helper to check if Redis is connected
redisClient.isConnected = () => isConnected;

module.exports = redisClient;
