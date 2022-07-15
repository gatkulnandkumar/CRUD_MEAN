const mongoose = require('mongoose');
const { Employee } = require('./models/employee');

mongoose.connect('mongodb://localhost:27017/CrudDB',(err) =>{
if(!err){
    console.log('MongoDB Connection Successful...');
}else{
    console.log('Error in DB Connection'+ JSON.stringify(err,undefined,2));
}

});

// const mongoose = require('mongoose');
//     const connection = mongoose.createConnection("mongodb://localhost:27017/employeeLoginDB");
//     const userSchema = mongoose.Schema({
//         firstname : {type : String},
//     lastname : {type : String},
//     username : {type : String},
//     password: {type : Number}
//       })
//     module.exports = mongoose.model('User', userSchema);

module.exports = mongoose;





