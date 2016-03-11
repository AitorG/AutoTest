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

}

module.exports = new UserServices();
