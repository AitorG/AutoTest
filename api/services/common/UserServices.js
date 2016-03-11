'use strict';
let User = require('./../../models/common/UserModel.js');

class UserServices {
  constructor() {

  }

  createUser(user, callback) {
    let newUser = new User(user);
    newUser.save(function(err, doc) {
      callback(err, doc);
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
        callback('Incorrect password', null);
      }

    })
  }

}

module.exports = new UserServices();
