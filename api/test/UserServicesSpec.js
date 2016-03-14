var should = require('should');
var UserServices = require('./../services/common/UserServices.js');
var mongoose = require('mongoose');
var User = require('./../models/common/UserModel.js');
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

  describe('deleteUser()', function() {
    it('Should return [] if user is deleted', function(done) {
      var user = {
        username: 'zamarrowski',
        password: 'password',
        email: 'sergiozamarro@hotmail.com'
      };
      UserServices.createUser(user, function(err, userDoc) {
        UserServices.deleteUser(userDoc._id, function(err, response) {
          response.result.ok.should.be.equal(1);
          done();
        });
      });
    });
  });

  describe('changePassword()', function() {
    it('Should return doc.password == "changedPassword" if oldpassword is correct', function(done){
      var user = {
        username: 'zamarrowski',
        password: 'password',
        email: 'sergiozamarro@hotmail.com'
      };
      UserServices.createUser(user, function(err, userDoc) {
        UserServices.changePassword(userDoc._id, 'changedPassword', 'password', function(err, doc){
          doc.password.should.be.equal('changedPassword');
          done();
        });
      });
    });

    it('Should return "Incorrect password" if oldPassword != currentPassword', function(done) {
      var user = {
        username: 'zamarrowski',
        password: 'password',
        email: 'sergiozamarro@hotmail.com'
      };
      UserServices.createUser(user, function(err, userDoc) {
        UserServices.changePassword(userDoc._id, 'changedPassword', 'failPassword', function(err, doc){
          err.message.should.be.equal('Incorrect password');
          done();
        });
      });
    });
  });

  describe('setApprovedTest()', function() {
    it('Should set to 1 aprrovedTest', function(done) {
      User.findOne({}, function(err, doc) {
        UserServices.setApprovedTest(doc._id, 1, function(err, doc) {
          doc.approvedTest.should.be.equal(1);
          done();
        });
      });
    });

    it('Should set to 0 approvedTest', function(done) {
      User.findOne({}, function(err, doc) {
        UserServices.setApprovedTest(doc._id, 0, function(err, doc) {
          doc.approvedTest.should.be.equal(0);
          done();
        });
      });
    });

    it('Should return error if number is negative', function(done) {
      User.findOne({}, function(err, doc) {
        UserServices.setApprovedTest(doc._id, -1, function(err, doc) {
          err.message.should.be.equal('Number can´t be negative');
          done();
        });
      });
    });
  });

  describe('setRightQuestions()', function() {
    it('Should set 1 rightQuestions', function(done) {
      User.findOne({}, function(err, doc) {
        UserServices.setRightQuestions(doc._id, 1, function(err, doc) {
          doc.rightQuestions.should.be.equal(1);
          done();
        });
      });
    });

    it('Should set to 0 rightQuestions', function(done) {
      User.findOne({}, function(err, doc) {
        UserServices.setRightQuestions(doc._id, 0, function(err, doc) {
          doc.rightQuestions.should.be.equal(0);
          done();
        });
      });
    });

    it('Should return error if number is negative', function(done) {
      User.findOne({}, function(err, doc) {
        UserServices.setRightQuestions(doc._id, -1, function(err, doc) {
          err.message.should.be.equal('Number can´t be negative');
          done();
        });
      });
    });

  });

});
