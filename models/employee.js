const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    empId :{ type : String},
    name : {type : String},
    position : {type : String},
    office : {type : String},
    salary: {type : Number}
});

module.exports = { Employee };




// var employeeSchema = new mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     name:{type : String},
//     position : {type : String},
//     office : {type : String},
//     salary: {type : Number}

// });

// let emp = mongoose.model('Employee',employeeSchema);

// module.exports = emp;