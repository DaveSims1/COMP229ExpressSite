let mongoose = require('mongoose');

//create model class
let contactSchema = mongoose.Schema({
    test: String,
    name: String,
    age: String
},
{
    collection: "test"
});

module.exports = mongoose.model('Contact', contactSchema);
