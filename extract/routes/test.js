'use strict';
let express = require('express');
let router = express.Router();
let AutoTestScraper = require('./../scrapers/AutoTestScrapper');


router.get('/questions/:testNumber', function(req, res) {
  AutoTestScraper.getQuestionsByTestId(req.params.testNumber, function(err, questions) {
    if (err) console.log(err);
    res.json(questions);
  });
});

router.get('/all/questions', function(req, res) {
  AutoTestScraper.getAllQuestions(function(err, questions) {
    if (err) console.log(err);
    res.json(questions);
  });
});

router.get('/answers/:testNumber', function(req, res) {
  AutoTestScraper.getAnswersByTestId(req.params.testNumber, function(err, answers) {
    if (err) console.log(err);
    res.json(answers);
  });
});

router.get('/all/answers', function(req, res) {
  AutoTestScraper.getAllAnswers(function(err, answers) {
    if (err) console.log(err);
    res.json(answers);
  });
});


module.exports = router;
