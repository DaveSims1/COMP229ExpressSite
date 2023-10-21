/**
 * Name: David Sims
 * Student Number: 301268408
 * Class: COMP229 
 * Assignment2
 */


let mongoose = require('mongoose');

//create model class
let contactSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactSchema);
