var express = require('express');
var router = express.Router();
var request = require('request');

/* GET google calendar */
router.get('/google', function(req, res, next) {
  var icalUrl;

  //read url from request
  icalUrl = req.query.ical;
  console.log(icalUrl);

  //make request to get ical file
  request(icalUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set('Content-Type', response.headers['content-type']).send(body);
    } else {
      console.log(error);
      res.statusCode(response.statusCode).send(error);
    }
  });
});

module.exports = router;
