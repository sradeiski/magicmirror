var express = require('express');
var router = express.Router();

/* GET weather for today */
router.get('/today', function(req, res, next) {
  var cityAndCountry,
      mode,
      lang,
      units,
      weatherApiUrl;

  cityAndCountry = req.query.cityAndCountry;
  mode = req.query.mode;
  lang = req.query.lang;
  units = req.query.units;
  weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather';

  

  var dummyResponse = 
    weatherApiUrl +
    '?' + 'q' + '=' + cityAndCountry + 
    '&' + 'mode' + '=' + mode + 
    '&' + 'lang' + '=' + lang + 
    '&' + 'units' + '=' + units;


  

  res.status(200).send(dummyResponse);
});

/* GET weather forecast */
router.get('/forecast', function(req, res, next) {
  var cityAndCountry,
      mode,
      lang,
      units,
      weatherApiUrl;

  cityAndCountry = req.query.cityAndCountry;
  mode = req.query.mode;
  lang = req.query.lang;
  units = req.query.units;
  weatherApiUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily';

  


  var dummyResponse = 
    weatherApiUrl +
    '?' + 'q' + '=' + cityAndCountry + 
    '&' + 'mode' + '=' + mode + 
    '&' + 'lang' + '=' + lang + 
    '&' + 'units' + '=' + units;


  

  res.status(200).send(dummyResponse);
});

module.exports = router;
