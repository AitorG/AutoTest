'use strict';
let request = require('request');
let cheerio = require('cheerio');
let iconv = require('iconv-lite');

class AutoTestScraper {
  constructor() {

  }

  getQuestionsByTestId(id, callback) {
    let url = `http://testautoescuelaonline.com/test.php?id=${id}`;
    let requestOptions  = { encoding: null, method: "GET", uri: url};

    request(requestOptions, function(error, response, body) {
      let utf8String = iconv.decode(new Buffer(body), "ISO-8859-1");

      let $ = cheerio.load(utf8String);
      let questions = [];

      $('.enunciado').each(function(index, element) {
        questions.push($(this).text());
      });
      let result = {
        numberTest: id,
        questions: questions,
        totalQuestions: questions.length
      };
      callback(error, result);

    });
  }

  getAllQuestions(callback) {
    var tests = [];
    for (var i = 1; i <= 167; i++) {
      this.getQuestionsByTestId(i, function(err, test) {
        if (err) console.log(err);
        tests.push(test);
        console.log(tests.length);
        if(tests.length == 167) {
          callback(null, tests);
        }
      });
    }
  }



}

module.exports = new AutoTestScraper();
