/**
 * Name: David Sims
 * Student Number: 301268408
 * Class: COMP229 
 * Assignment2
 */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('placeholder');
});

module.exports = router;
