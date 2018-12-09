// ./server/index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const connection = require('../database/index.js');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', router);

app.listen(PORT, (error)=>{
    if(error){
        console.log('Error connecting to the port:', error);
    } else {
        console.log('Successfully conected to the PORT:', PORT);
    }
})