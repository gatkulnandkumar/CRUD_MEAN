const mongoose = require('mongoose');

var signUp = mongoose.model('signUp',{
    firstname : {type : String},
    lastname : {type : String},
    username : {type : String},
    password: {type : String}
});

module.exports = { signUp };