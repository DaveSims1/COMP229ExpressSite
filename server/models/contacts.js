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
