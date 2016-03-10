'use strict';
const express = require('express');
let router = express.Router();
let UserServices = require('./../../services/common/UserServices.js');

router.post('/', function(req, res, next) {
  let user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  };
  
  UserServices.createUser(user, function(err, doc) {
    if (err) {
      next(err);
    } else {
      res.json(doc);
    }

  });
});

module.exports = router;
