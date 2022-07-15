var express = require('express');
const req = require('express/lib/request');

var ObjectId = require('mongoose').Types.ObjectId;

var router = express.Router();

var {Employee}   = require('../models/employee');

var {signUp } = require('../models/sign-up');


// Employee.find({},function(err,docs){
//     console.log(docs)
// })

// URL to call on Chrome : http://localhost:3000/employees/list
router.get('/',(req,res) =>
{
    Employee.find((err,docs) =>{
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in Retriving Employees :'+ JSON.stringify(err,undefined,2));
        }
    });
});

router.get('/:id',(req,res) => {
    // var ObjectId = Number;
    console.log('log is here==>',ObjectId);
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record found with id: ${req.params.id}');

    //    Employee.findById(req.params.id,)

    Employee.findById(req.params.id,(err,doc) => {
        if(!err){
            res.send(doc);
    }else{
        console.log('Error in Retriving Employees :'+ JSON.stringify(err,undefined,2));
    }
});
});


router.post('/insertEmployee' ,(req,res) =>{
 var emp = new Employee({
     empId:req.body.empId,
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary,
 });
console.log("request for insert data==>",req);

emp.save((err,doc) =>{
        if(!err){
                res.send(doc);
                // res.send("Data inserted successfully....")
                // res.status(200).send("Data inserted successfully....",doc)
                console.log("Data inserted successfully...");
            }else{
                console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));}
        });

    });


    router.put('/:id',(req,res) =>{
        console.log("request==>",req);

        console.log("response==>",res);

        if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record found with id: ${req.params.id}');

        var emp = {
            empId:req.body.empId,
            name: req.body.name,
            position: req.body.position,
            office: req.body.office,
            salary: req.body.salary,
         };

         Employee.findByIdAndUpdate(req.params.id ,{ $set: emp}, {new: true},(err,doc) =>{

            if(!err){
                res.send(doc);
            }else{
                console.log('Error in updates Employees :'+ JSON.stringify(err,undefined,2));} 

         });
    });

    

    

router.delete('/:id',(req,res) => {
    
    console.log('log is here==>',ObjectId);
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record found with id: ${req.params.id}');

    //    Employee.findById(req.params.id,)

    Employee.findByIdAndRemove(req.params.id,(err,doc) => {
        if(!err){
            res.send(doc);
            // res.status(200).send('Data deleted for given id==> ${req.params.id}')

            console.log('Data deleted for given id==>',req.params.id);
    }else{
        console.log('Error in delete Employees :'+ JSON.stringify(err,undefined,2));
    }
});
});



router.post('/insertSignUp' ,(req,res) =>{
    var emp = new AddEmployee({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
       password: req.body.password,
    });
   
    emp.save((err,doc) =>{
           if(!err){
                   res.send(doc);
               }else{
                   console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));}
           });
   
       });


// router.post('/signUpEmployee' ,(req,res) =>{
//     var empSignUp = new signUp({
//        firstname:req.body.firstname,
//        lastname: req.body.lastname,
//        username: req.body.username,
//        password: req.body.password,
       
//     });
//    console.log("request for insert data==>",req);

//    console.log("request for insert data emp==>",empSignUp);
   
//    empSignUp.save((err,doc) =>{
//         console.log("ERR: ", err);
//            if(!err){
//                     console.log("DOC: ", doc);
//                    res.send(doc);
//                    // res.send("Data inserted successfully....")
//                    // res.status(200).send("Data inserted successfully....",doc)
//                    console.log("Data inserted successfully...");
//                }else{
//                    console.log('Error in Saving Employees :'+ JSON.stringify(err,undefined,2));}
//            });
   
//        });
   
   
      
  
   

module.exports = router  ;



