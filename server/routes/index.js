/*File Name: Assignment 1 Express Site
  Student Name: David Sims
  StudentID: 301268408
  Date: 2023-10-06 */

var express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

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
  console.log("contact");
  res.render('contact', { title: 'Contact' });
});

//router to get login display
router.get('/login', indexController.displayLoginPage);
//router to get login process
router.post('/login', indexController.processLoginPage);

//router for register display
router.get('/register', indexController.displayRegisterPage);

//router for register process
router.post('/register', indexController.processRegisterPage);

//logout
router.get('/logout', indexController.performLogout);

module.exports = router;
