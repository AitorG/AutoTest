'use strict';
const express = require('express');
const jwt = require('jsonwebtoken');
let router = express.Router();
let config = require('./../../config.js');
let AuthServices = require('./../../services/common/AuthServices.js');

router.post('/login', function(req, res, next) {
  AuthServices.login(req.body.username, req.body.password, function(err, user) {
    if (err) {
      next(new Error('Error at login.'));
    } else {
      if (!user) {
        next(new Error('Incorrect username or password'));
      } else {
        var token = jwt.sign(user, config.secretKey, { expiresInMinutes: 1440 });
        res.json({success: true, token: token, user: user});
      }
    }
  });
});

module.exports = router;
