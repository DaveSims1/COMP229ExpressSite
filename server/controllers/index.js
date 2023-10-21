/**
 * Name: David Sims
 * Student Number: 301268408
 * Class: COMP229 
 * Assignment2
 */


let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');
let passport = require('passport');

//user model instance
let userModel = require('../models/user');
let User = userModel.User; 


module.exports.displayLoginPage = (req, res, next) =>{
    if(!req.user){
        res.render('auth/login',{
            title: "Login",
            messages: req.flash('loginMessage')
        })
    }
    else{
        return res.redirect('/login');
    }
}

module.exports.processLoginPage = (req, res, next) => {
    console.log("process");
    console.log(req.body);
    
        passport.authenticate('local', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) {
            return res.render('/login');
          }
          req.logIn(user, function(err) {
            if (err) { return next(err); }
            return res.redirect('/businesscontacts');
          });
        })(req, res, next);
    

    // passport.authenticate('local',
    // function(err, user, info){
    //     //if server error
    //     console.log("ddd");
    //     console.log(err, user, info);
    //     if(err){
    //         return next(err);
    //     }
    //     //if user error
    //     if(!user){
    //         req.flash('loginMessage', 'Authentication Error');
    //         return res.redirect('/login');
    //     }
    //     req.login(user, (err) => {
    //         //server check
    //         if(err){
    //             return next(err);
    //         }
    //         return res.redirect('/businesscontacts');
    //     });
    // }
    // )
}
//(req, res, next)

module.exports.displayRegisterPage = (req, res, next) => {
    if(!req.user){
        res.render('auth/register',
        {
            title: 'register',
            message: req.flash('registerMessage')
        });
    }
    else{
        return res.redirect('/');
    }

}

module.exports.processRegisterPage = (req, res, next) => {
    //instance of register page
    console.log(req.body);
    console.log("register");
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    User.register(newUser, req.body.password, function(err,user) {
        let password = req.body.password;
        console.log(password);
        console.log(req.body);
        if(err){
            console.log("Error with user", err);
            if(err.name == "UserExistsError"){
                req.flash(
                    'registerMessage',
                    'Registration Error: Already exists!'
                );
                console.log("error - User exists");
            }
            return res.render('auth/register',{
                title: 'Register',
                message: req.flash('registerMessage')
            });
        }
        else{
            //no error so redirect for authentication
            return passport.authenticate('local')(req, res, () => {
                res.render('../views/businesscontacts', {title: 'Edit Contact'});
            });
        }
    })
}

module.exports.performLogout = (req, res, next) => {
    req.logout();
    res.redirect('/');
}
