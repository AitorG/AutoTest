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

}

module.exports = new UserServices();
