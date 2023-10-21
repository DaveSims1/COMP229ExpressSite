//Required usermodel modules
/**
 * Name: David Sims
 * Student Number: 301268408
 * Class: COMP229 
 * Assignment2
 */



let mongoose = require('mongoose');



let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username:
        {
            type: String,
            default: "",
            trim:true,
            required: 'username is required'
        },
        password:
        {
            type: String,
            default: "",
            trim: true,
            required: 'password is required'
        },
        email:
        {
            type: String,
            default: "",
            trim: true,
            required: 'email is required'
        }
    },
    {
        collection: "users"
    }
);

//configuration
let options = ({missingPasswordError: 'Wrong Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);
