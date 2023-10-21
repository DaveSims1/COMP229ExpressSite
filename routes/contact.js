

const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts') // Import the Mongoose model

// Express route to find items by name and render EJS view
router.get('/businesscontacts', async (req, res) => {
    console.log('contact.js');
    try {
        const items = await Contact.find();
        res.render('businesscontacts', { items, title: "Busniess Contacts"}); // Render the EJS view and pass items as a local variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;




// //routing modules
// let express = require('express');
// let router = express.Router();
// let mongoose = require('mongoose');


// //Connect to the contacts model
// let Contact = require('../models/contacts');

// //GET the contacts page

// router.get('/', (req, res, next) => {
//     Contact.find({}).sort('test').exec(
//         (err, Contact) => {
//             if(err){
//                 return console.error(err);
//             }
//             else{
//                 res.render('businesscontacts.ejs', {title: 'Contacts', BusniessContact: Contact}
//             );
//         }
//     });
// });

//  module.exports = router;