'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('User', new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  rightQuestions: {type: Number, default: 0},
  failedQuestions: {type: Number, default: 0},
  approvedTest: {type: Number, default: 0},
  failedTest: {type: Number, default: 0},
}));
