const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
module.exports = app;

app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

