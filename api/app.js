'use strict';
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config');
let app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(require('./middlewares/allowcrossdomain.js'));

//Routes
app.use('/', require('./routes/mainroutes.js'));

//Error handler
app.use(function(err, req, res, next){
  res.json({success:false, message: err.message});
});

app.listen(config.port);
console.log(`Autotest API running in ${config.port}`);
