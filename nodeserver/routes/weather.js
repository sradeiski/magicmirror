var express = require('express');
var router = express.Router();
var request = require('request');

/* GET weather for today */
router.get('/today', function(req, res, next) {
  var cityAndCountry,
      mode,
      lang,
      units,
      weatherApiUrl,
      weatherRequestUrl;

  cityAndCountry = req.query.cityAndCountry;
  mode = req.query.mode;
  lang = req.query.lang;
  units = req.query.units;
  weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  weatherRequestUrl =  weatherApiUrl +
                      '?' + 'q' + '=' + cityAndCountry + 
                      '&' + 'mode' + '=' + mode + 
                      '&' + 'lang' + '=' + lang + 
                      '&' + 'units' + '=' + units;

  //make request to get weather data
  request(weatherRequestUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set('Content-Type', response.headers['content-type']).send(body);
    } else {
      console.log(error);
      res.statusCode(response.statusCode).send(error);
    }
  });
});

/* GET weather forecast */
router.get('/forecast', function(req, res, next) {
  var cityAndCountry,
      mode,
      numberOfDays,
      lang,
      units,
      weatherApiUrl,
      weatherRequestUrl;

  cityAndCountry = req.query.cityAndCountry;
  mode = req.query.mode;
  numberOfDays = req.query.numberOfDays;
  lang = req.query.lang;
  units = req.query.units;
  weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';

  weatherRequestUrl =  weatherApiUrl +
                      '?' + 'q' + '=' + cityAndCountry + 
                      '&' + 'mode' + '=' + mode + 
                      '&' + 'numberOfDays' + '=' + numberOfDays + 
                      '&' + 'lang' + '=' + lang + 
                      '&' + 'units' + '=' + units;

  //make request to get weather data
  request(weatherRequestUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.set('Content-Type', response.headers['content-type']).send(body);
    } else {
      console.log(error);
      res.statusCode(response.statusCode).send(error);
    }
  });
});

module.exports = router;

