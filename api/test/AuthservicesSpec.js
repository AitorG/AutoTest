var should = require('should');
var AuthServices = require('./../services/common/AuthServices.js');
var mongoose = require('mongoose');

describe('AuthServices', function() {
    describe('login()', function() {
      it('Should return a doc with user info if login is correct', function(done) {
        var username = 'zamarrowski';
        var password = 'password';
        AuthServices.login(username, password, function(err, doc) {
          doc.username.should.be.equal('zamarrowski');
          doc.password.should.be.equal('password');
          done();
        });
      });

      it('Should return null if login is incorrect', function(done) {
        var username = 'zamarrowskiFail';
        var password = 'passwordFail';
        AuthServices.login(username, password, function(err, doc) {
          should.not.exist(doc);
          done();
        });
      });
    });
});
