const mongoose = require('mongoose');

var Gallery = mongoose.model('Gallery',{
    Id :{ type : String},
    imageUrl : {type : String},
    imageTitle : {type : String},
    imageDesc : {type : String},
    uploaded: {type : Date , default : Date.now}
});

module.exports = { Gallery };
