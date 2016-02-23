'use strict';
let express = require('express');
let router = express.Router();
let request = require('request');
let cheerio = require('cheerio');

router.get('/:testNumber', function(req, res) {
  let url = 'http://testautoescuelaonline.com/test.php?id=' + req.params.testNumber;

  request(url, function(err, response, html) {
    if(!err) {
      let $ = cheerio.load(html);
      let questions = [];

      $('.enunciado').each(function(index, element) {
        questions.push($(this).text());
      });
      res.json(questions);
    }
  });
});

module.exports = router;
