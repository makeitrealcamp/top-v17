const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');

const client = require('./redis-service');

const app = express();

// redis client
// const client = new RedisService();

// Add response time header
app.use(responseTime());

// Get all characters
app.get('/character', async (req, res) => {
  try {
    const reply = await client.get(req.originalUrl);

    if (reply) return res.status(200).json(JSON.parse(reply));

    // Fetching Data from Rick and Morty API
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    // Storing data in Redis
    const expires = 60 * 60 * 24;

    await client.set(req.originalUrl, JSON.stringify(response.data), expires);

    return res.json(response.data);

  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get('/character/:id', async (req, res) => {
  const { id } = req.params;
  console.log(req.originalUrl)
  try {
    const reply = await client.get(req.originalUrl);

    if (reply) return res.status(200).json(JSON.parse(reply));

    // Fetching Data from Rick and Morty API
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    // Storing data in Redis
    const expires = 60 * 60 * 24;
    await client.set(req.originalUrl, JSON.stringify(response.data), expires);

    // resond to client
    return res.json(response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
