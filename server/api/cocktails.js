const router = require('express').Router();
const { models: { Cocktail }} = require('../db');

router.get('/', async(req, res, next) => {
  try {
    const cocktails = await Cocktail.findAll();
    res.json(cocktails);
  } catch(err) {
    next(err);
  }
});

module.exports = router
