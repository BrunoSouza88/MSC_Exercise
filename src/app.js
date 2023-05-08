const express = require('express'); // importing express from our dependencies
const router = require('./routers/getRoutes');

const app = express(); // creating a variable to use express
app.use(express.json()); // very important method to make our app be able to deal with body

app.get('/health', (_req, res) => { // route to make sure everything is connected 
  res.status(200).json({ message: 'Working' });
});

app.use(router);

module.exports = app;