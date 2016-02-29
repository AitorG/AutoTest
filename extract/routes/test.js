'use strict';
let express = require('express');
let router = express.Router();
let AutoTestScraper = require('./../scrapers/AutoTestScrapper');

router.get('/all', function(req, res) {
  AutoTestScraper.getAllQuestions(function(err, questions) {
    if (err) console.log(err);
    res.json(questions);
  });
});

router.get('/id/:testNumber', function(req, res) {
  AutoTestScraper.getQuestionsByTestId(req.params.testNumber, function(err, questions) {
    if (err) console.log(err);
    res.json(questions);
  });
});



module.exports = router;
