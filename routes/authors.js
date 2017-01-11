var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
