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

router.post('/orderByApprovedTest', AuthServices.verifyToken, function(req, res, next) {
  UserServices.getUsersOrderByApprovedTest(req.body.order, function(err, docs) {
    if (err) {
      next(err);
    } else {
      res.json(docs);
    }
  })
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
