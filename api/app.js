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
app.use('/auth', require('./routes/common/AuthRoutes.js'));
app.use('/user', require('./routes/common/UserRoutes.js'));
mongoose.connect(config.database);
//Error handler
app.use(function(err, req, res, next){
  res.status(400);
  console.log(err);
  res.json({success:false, message: err.message});
});

app.listen(config.port);
console.log(`Autotest API running in ${config.port}`);
