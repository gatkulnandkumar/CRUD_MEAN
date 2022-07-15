var express = require('express');
const req = require('express/lib/request');
// const bcrypt = require('bcrypt');

var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();
// var {Employee}   = require('../models/employee');
var {Gallery } = require('../models/gallery-upload');

var multer= require('multer')


var storage = multer.diskStorage({ 
    destination: (req,file,cb) =>{
        cb(null,'./public/images');
    },
    filename: (req,file,cb) =>{
        console.log(file);
        var filetype = '';
        if(file.mimetype === 'image/gif')
        {
            filetype = 'gif';
        }

        if(file.mimetype === 'image/jpeg')
        {
            filetype = 'jpeg';
        }

        if(file.mimetype === 'image/png')
        {
            filetype = 'png';
        }
        cb(null,'images' +Date.now + '.' +filetype);
    },
});
var upload = multer({storage: storage});

router.post('/uploadPhoto',upload.single('file'),function(req, res, next){
    if(!req.file){
        return res.status(500).send({message : 'Upload fail'});
    }else{
        req.body.imageUrl ='http://localhost:3000/' +req.file.filename;
        Gallery.create(req.body , function(err, gallery){
            if(err){
                console.log(err);
                return next(err);
            }

            res.json(gallery);
        });
    }

});

module.exports = router  ;