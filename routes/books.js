var express = require('express');
var router = express.Router();
var pg = require('pg');
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', (req, res, next) => {
  knex('book').select().then(books=>{
    res.json(books);
  })
});

module.exports = router;
