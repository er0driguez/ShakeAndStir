const db = require('./db');
//access point for all db things
const User = require('./models/User');
const Cocktail = require('./models/Cocktail');

//associations go here


module.exports = {
  db, 
  models: {
    User, Cocktail
  }
};