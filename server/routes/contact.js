/**
 * Name: David Sims
 * Student Number: 301268408
 * Class: COMP229 
 * Assignment2
 */

const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts'); // Import the Mongoose model
const contacts = require('../models/contacts');
const mongoose = require('mongoose');

let passport = require('passport');

//guard function
function requireAuth(req, res, next){
    //is user logged in?
    console.log("redirecting login");
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
}

// Express route to find items by name and render EJS view
router.get('/businesscontacts', async (req, res) => {
    console.log('contact.js');
    try {
        const items = await Contact.find();
        console.log(items);
        res.render('businesscontact/list', { items, title: "Busniess Contacts"}); // Render the EJS view and pass items as a local variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});




//CRUD OPERATIONS

/*GET route for displaying add page -  CREATE operation */

router.get('/add', async (req, res, next) => {
    console.log('contact.js');
    try {
        const items = await Contact.find();
        res.render('businesscontact/add', {title: "Add Books"}); // Render the EJS view and pass items as a local variable
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    
});

/*POST route for processing the add page -  CREATE operation */

router.post('/add', async (req, res, next) => {
    // console.log(req);
    // let newContact = Contact.findByIdAndUpdate({
    //     "name": req.body.name,
    //     "email": req.body.email,
    //     "phone": req.body.phone
    // });


    try 
    {
        await Contact.create(
            
            {
            "name": req.body.name,
            "email": req.body.email,
            "phone": req.body.phone
        });
        res.redirect('/businesscontacts');
    }
    catch(err)
    {
        console.log(err);
    }


    // try 
    // {
    //     await Contact.findByIdAndUpdate(
    //         new mongoose.Types.ObjectId(),
    //         {
    //         "name": req.body.name,
    //         "email": req.body.email,
    //         "phone": req.body.phone
    //     });
    //     res.redirect('/businesscontacts');
    // }
    // catch(err)
    // {
    //     console.log(err);
    // }

    

    
    // res.redirect('/businesscontacts')
    // Contact.create(newContact)(createdContact =>{
    //     res.redirect('/businesscontacts');
    // })
    
});

/*GET route for displaying the edit page -  UPDATE operation */
router.get('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    console.log('contact.js');
    try { 
            // Contact.findByIdAndUpdate(id, async (err, contactToEdit) =>{
            // const items = await Contact.find();
            let contactToEdit = await Contact.findByIdAndUpdate(
                id,
                {
                "name": req.body.name,
                "email": req.body.email,
                "phone": req.body.phone
            });
            res.render('../views/businesscontact/edit', {title: 'Edit Contact', contact: contactToEdit});
            
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
   
});



/*POST route for processing the edit page -  UPDATE operation */
router.post('/edit/:id', async (req, res, next) => {
    let id = req.params.id;
    // let updatedContact = contactSchema({
    //     "_id": id,
    //     "name": req.body.name,
    //     "email": req.body.email,
    //     "phone": req.body.phone
    // });
    try { 
        // Contact.findByIdAndUpdate(id, async (err, contactToEdit) =>{
        // const items = await Contact.find();
        let contactToEdit = await Contact.findByIdAndUpdate(
            id,
            {
            "name": req.body.name,
            "email": req.body.email,
            "phone": req.body.phone
        });
        res.redirect('/businesscontacts');
        
    
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
}
    
    // Contact.updateOne({_id: id}, updatedContact, (err) =>{
    //     if(err){
    //         console.log(err);
    //         res.end(err);
    //     }
    //     else{
    //         //refresh the contacts
            
    //     }
    // });
});

/*POST to perform deletion -  DELETE operation */
router.get('/delete/:id', async (req, res, next) => {
    let id = req.params.id;
    //const items = await Contact.find();
    console.log(await Contact.findById(id));
   
    try 
    {
        await Contact.findByIdAndRemove(id)
        res.redirect('/businesscontacts');
    }
    catch(err)
    {
        console.log(err);
    }
    
});



module.exports = router;
