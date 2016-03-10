var should = require('should');
var UserServices = require('./../services/common/UserServices.js');
var mongoose = require('mongoose');
var config = require('./../config.js');
mongoose.connect(config.database);

describe('UserServices', function() {
  describe('createUser()', function() {
    it('return user with name zamarrowski if user is correct', function(done) {
      var user = {
        username: 'zamarrowski',
        password: 'password',
        email: 'sergiozamarro@hotmail.com'
      };
      UserServices.createUser(user, function(err, doc) {
        doc.username.should.equal('zamarrowski');
        done();
      });
    });

    it('return error if user is incorrect', function(done) {
      var user = {
        username: null,
        password: 'password',
        email: 'sergiozamarro@hotmail.com'
      };

      UserServices.createUser(user, function(err, doc) {
        err.should.be.a.Object();
        done();
      });

    });

  });
});
