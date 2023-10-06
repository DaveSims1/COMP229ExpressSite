var express = require('express');
var router = express.Router();

/* home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});
/* services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});
/* contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

module.exports = router;
