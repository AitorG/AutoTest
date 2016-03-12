'use strict';
const jwt = require('jsonwebtoken');
const config = require('./../../config.js');
let User = require('./../../models/common/UserModel.js');

class AuthServices {
  constructor() {}

  verifyToken(req, res, next) {
    let token = req.body.token || req.query.token || req.headers['token'];

    if(token){
      jwt.verify(token, config.secretKey, function(err, decoded){
        if (err) {
          next(new Error('Error at check token provided.'));
        } else {
          req.user = decoded;
          next();
        }
      });
    }else{
      next(new Error('No token provided'));
    }
  }

  login(username, password, callback) {
    User.findOne({username: username, password: password}, function(err, doc) {
      callback(err, doc);
    });
  }
}

module.exports = new AuthServices();
