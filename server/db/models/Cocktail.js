const Sequelize = require('sequelize');
const db = require('../db');

const Cocktail = db.define('cocktail', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  ingredients: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }, 
  recipe: {
    type: Sequelize.TEXT
  }
});

module.exports = Cocktail