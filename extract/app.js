'use strict';
let express = require('express');
let app  = express();
let morgan = require('morgan');
let fs = require('fs');
let testRoutes = require('./routes/test.js');
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
};
app.use(allowCrossDomain);
app.use(morgan('dev'));
app.use('/test', testRoutes);

app.listen(8090);

console.log('Scrapper running in 8090');
