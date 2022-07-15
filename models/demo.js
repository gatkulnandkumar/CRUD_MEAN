const mongoose = require('mongoose');

var demo = mongoose.model('demo',{
    firstname : {type : String},
    lastname : {type : String},
    username : {type : String},
    password: {type : String}
});

module.exports = { demo };