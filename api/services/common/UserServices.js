'use strict';
let User = require('./../../models/common/UserModel.js');

class UserServices {
  constructor() {}

  createUser(user, callback) {
    let newUser = new User(user);
    newUser.save(function(err, doc) {
      callback(err, doc);
    });
  }

  getUser(userId, callback) {
    User.findById(userId, function(err, doc) {
      if (err) {
        callback(new Error('User does not exist'), null);
      } else {
        callback(null, doc);
      }
    });
  }

  deleteUser(userId, callback) {
    User.remove({_id: userId}, function(err, response) {
      callback(err, response);
    });
  }

  changePassword(userId, newPassword, oldPassword, callback) {
    User.findById(userId, function(err, doc) {
      if (err) callback(err, null);

      if (oldPassword == doc.password) {
        doc.password = newPassword;
        doc.save(function(err, doc) {
          callback(err, doc);
        });
      } else {
        callback(new Error('Incorrect password'), null);
      }
    });
  }

  setApprovedTest(userId, number, callback) {
    if (number >= 0) {
      User.findById(userId, function(err, doc) {
        if (err) {
          callback(err, null)
        } else {
          doc.approvedTest = number;
          doc.save(function(err, doc) {
            callback(err, doc);
          });
        }
      });
    } else {
      callback(new Error('Number can´t be negative'), null);
    }
  }

  setRightQuestions(userId, number, callback) {
    if (number >= 0) {
      User.findById(userId, function(err, doc) {
        if (err) {
          callback(err, null)
        } else {
          doc.rightQuestions = number;
          doc.save(function(err, doc) {
            callback(err, doc);
          });
        }
      });
    } else {
      callback(new Error('Number can´t be negative'), null);
    }
  }

}

module.exports = new UserServices();
