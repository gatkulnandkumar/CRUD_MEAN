var express = require('express');
const req = require('express/lib/request');
// const bcrypt = require('bcrypt');

var ObjectId = require('mongoose').Types.ObjectId;
var router = express.Router();
// var {Employee}   = require('../models/employee');
var {signUp } = require('../models/sign-up');

router.post('/signUpEmployee' ,(req,res) =>{
    var empSignUp = new signUp({
       firstname:req.body.firstname,
       lastname: req.body.lastname,
       username: req.body.username,
       password: req.body.password,
       
    });
   console.log("request for insert data==>",req);

   console.log("request for insert data emp==>",empSignUp);
   
    signUp.create(empSignUp)
    .then(response => {
        console.log("Data inserted successfully...",response);
        // res.send(response).json({
        res.status(200).json({
            msg: "User created"
        });
        // res.send("Data inserted successfully...",response);
    }) 
    .catch(err => {
        console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));
    })
   
    });   


    // router.post('/login',(req,res) =>{
    //     var empSignUp = new signUp({
    //        firstname:req.body.firstname,
    //        lastname: req.body.lastname,
    //        username: req.body.username,
    //        password: req.body.password,
           
    //     });
    //    console.log("request for insert data==>",req);
    
    //    console.log("request for insert data emp==>",empSignUp);
       
    //     signUp.create(empSignUp)
    //     .then(response => {
    //         console.log("Data inserted successfully...",response);
    //         // res.send(response);
    //         res.send("Data inserted successfully...",response);
    //     }) 
    //     .catch(err => {
    //         console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));
    //     })
       
    //     });   

        router.get('/',(req,res) =>
        {
            signUp.find((err,docs) =>{
                if(!err){
                    res.send(docs);
                }else{
                    console.log('Error in Retriving Employees :'+ JSON.stringify(err,undefined,2));
                }
            });
        });


        router.get('/:id',(req,res) => {
            
            if(!ObjectId.isValid(req.params.id))
            return res.status(400).send('No record found with id: ${req.params.id}');
    
        
            signUp.findById(req.params.id,(err,doc) => {
                if(!err){
                    res.send(doc);
            }else{
                console.log('Error in Retriving Employees :'+ JSON.stringify(err,undefined,2));
            }

        });
        });

        // router.post('/login' ,(req,res) => {
        //     const user = signUp.find(user => user.username = req.body.username);
        //     if(user == null) {
        //         return res.status(400).send('cant find user')
        //     }else{

        //     }
        
        // });


        router.post('/login' ,(req,res)  =>{
            console.log("LOGIN: ", req.body.username," | ", req.body.password)
        
            var username = req.body.username.trim();
            var password = req.body.password.trim();
        
            console.log("username:",username)
            console.log("password===>",password)

        signUp.find({name:username}).countDocuments()
        .then(user => {
        console.log("USER: ", user)//, payload)

        console.log("USER: inside===>", user)//, payload)
        user = user.toString()
        if(user==0){
            console.log("No User found==>");
            res.status(200).json({
                msg: "No User found...." //send("No user found");
            });
        }else{
            signUp.find({name:username})
            .then(userRole => {
                console.log("User Array: ",userRole);
                console.log("userRole: ",userRole,userRole[0].username)
                res.status(200).json({
                    msg: "Login Successfully...."
                });
            })
        }
    }).catch(err => {
        console.log("ERROR: ", err)
    })
    });
 
module.exports = router  ;

