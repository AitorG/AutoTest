'use strict';
const express = require('express');
const jwt = require('jsonwebtoken');
let router = express.Router();
let UserServices = require('./../../services/common/UserServices.js');
let config = require('./../../config.js');
let AuthServices = require('./../../services/common/AuthServices.js');

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

router.get('/:userId', AuthServices.verifyToken, function(req, res, next) {
  UserServices.getUser(req.params.userId, function(err, doc) {
    if (err) {
      next(err);
    } else {
      res.json(doc);
    }
  });
});

router.delete('/:userId', AuthServices.verifyToken, function(req, res, next) {
  UserServices.deleteUser(req.params.userId, function(err, response) {
    if (err) {
      next(err);
    } else {
      res.json(response);
    }
  });
});

router.post('/changePassword', AuthServices.verifyToken, function(req, res, next) {
  UserServices.changePassword(req.body.userId, req.body.newPassword, req.body.oldPassword, function(err, doc) {
    if (err) {
      next(err);
    } else {
      res.json(doc);
    }
  });
});

router.post('/login', function(req, res, next) {
  AuthServices.login(req.body.username, req.body.password, function(err, user) {
    if (err) {
      next(new Error('Error at login.'));
    } else {
      if (!user) {
        next(new Error('Incorrect username or password'));
      } else {
        var token = jwt.sign(user, config.secretKey, { expireInMinutes: 1440 });
        res.json({success: true, token: token, user: user});
      }
    }
  });
});

router.post('/setApprovedTest', AuthServices.verifyToken, function(req, res, next) {
  UserServices.setApprovedTest(req.body.userId, req.body.approvedTest, function(err, doc) {
    if (err) {
      next(err);
    } else {
      res.json(doc);
    }
  });
});

router.post('/setRightQuestions', AuthServices.verifyToken, function(req, res, next) {
  UserServices.setRightQuestions(req.body.userId, req.body.rightQuestions, function(err, doc) {
    if (err) {
      next(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
