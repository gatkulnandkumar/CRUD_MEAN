const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose } = require ('./db.js');
// const {mongoose } = require ('./employeeLogin_db.js');
const res = require('express/lib/response');

var employeeController = require ('./controllers/employeeController.js')

var signUpController = require ('./controllers/signUpController.js')

var demoController = require ('./controllers/demoController.js')

var uploadController = require ('./controllers/uploadController.js')

var app = express();
app.use(bodyParser.json());
app.use(cors({origin : 'http://localhost:4200'}))

app.use('/employees',employeeController);
app.use('/signUp',signUpController);
app.use('/demo',demoController);
app.use('/gallery-upload',uploadController);
app.listen(3000, () => console.log("Server started at 3000 port"));






