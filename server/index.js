const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const mongoose = require('mongoose');
const dashboard = require('./routes/dashboard');
const config = require('./routes/adminPanel');

server.use(bodyParser.json());

mongoose.connect('mongodb://localhost/myappdatabase', { useNewUrlParser: true, useUnifiedTopology: true });

//Admin Panel SPA
server.use('/api', config);

//Dashboard
server.use('/api/dashboard', dashboard);

//AFV
server.get('/api/afv', (req, res) => {
  res.send('Hello afv');
});

//Comandas
server.get('/api/comandas', (req, res) => {
  res.send('Hello Dashboard');
});

server.listen(3000, () => {
  console.log('Server running at port: 3000');
});