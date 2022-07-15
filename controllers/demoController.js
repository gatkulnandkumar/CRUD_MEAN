var express = require('express');
const req = require('express/lib/request');

var ObjectId = require('mongoose').Types.ObjectId;

var router = express.Router();

// var {Employee}   = require('../models/employee');

var {demo } = require('../models/demo');


// router.post('/signUpEmployee' ,(req,res) =>{
//  var empSignUp = new signUp({
//     firstname:req.body.firstname,
//     lastname: req.body.lastname,
//     username: req.body.username,
//     password: req.body.password,
    
//  });
// console.log("request for insert data==>",req);

// empSignUp.save((err,doc) =>{
//         if(!err){
//                 res.send(doc);
//                 // res.send("Data inserted successfully....")
//                 // res.status(200).send("Data inserted successfully....",doc)
//                 console.log("Data inserted successfully...");
//             }else{
//                 console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));}
//         });

//     });


   
// // router.post('/insertSignUp' ,(req,res) =>{
// //     var emp = new AddEmployee({
// //         firstname: req.body.firstname,
// //         lastname: req.body.lastname,
// //         username: req.body.username,
// //        password: req.body.password,
// //     });
   
// //     emp.save((err,doc) =>{
// //            if(!err){
// //                    res.send(doc);
// //                }else{
// //                    console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));}
// //            });
   
// //        });

// module.exports = router  ;


router.post('/signUpdemo' ,(req,res) =>{
    var demoNew = new demo({
       firstname:req.body.firstname,
       lastname: req.body.lastname,
       username: req.body.username,
       password: req.body.password,
       
    });
   console.log("request for insert data==>",req);

   console.log("request for insert data emp==>",demoNew);
   
   demo.create(demoNew).then(response => {
        console.log("Data inserted successfully demo...",response);
        res.send(response);
    }) 
    .catch(err => {
        console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));
    })
    
    });
   

module.exports = router  ;

