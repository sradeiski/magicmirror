'use strict';

var config = require('../config').weather;

var getWeatherForecast,
    getWeatherToday,
    handleError,
    handleSuccess;

handleError = function (response) {
  // TO DO ERROR HANDLING
  return response;
};

handleSuccess = function (response) {
  return response.data;
};

getWeatherToday = function ($http) {
  var requestToday = $http({
    method: 'get',
    params: {
      lang: config.today.lang,
      mode: config.today.mode,
      q: config.today.cityAndCountry,
      units: config.today.units
    },
    url: config.today.url
  });

  return requestToday.then(handleSuccess, handleError);
};

getWeatherForecast = function ($http) {
  var requestForecast = $http({
    method: 'get',
    params: {
      lang: config.forecast.lang,
      mode: config.forecast.mode,
      q: config.forecast.cityAndCountry,
      units: config.forecast.units
    },
    url: config.forecast.url
  });

  return requestForecast.then(handleSuccess, handleError);
};

module.exports = {
  getWeatherForecast: getWeatherForecast,
  getWeatherToday: getWeatherToday
};
