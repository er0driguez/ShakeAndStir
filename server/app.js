const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
module.exports = app;

app.use(express.json());

//api route
app.use('/api', require('./api'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/index.html')));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

//error handling
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});
