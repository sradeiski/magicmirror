'use strict';

var config = require('./config');

var Client = require('node-rest-client').Client;
var restClient = new Client();

var getWeatherForecast,
    getWeatherToday,
    handleError,
    handleSuccess;

handleError = function (response) {
  console.error(response);
  return response;
};

handleSuccess = function (response) {
  return response.data;
};

getWeatherToday = function ($http) {
  var requestToday = $http({
    method: 'get',
    params: {
      lang: config.today.params.lang,
      mode: config.today.params.mode,
      q: config.today.params.cityAndCountry,
      units: config.today.params.units
    },
    url: config.today.url
  });

  return requestToday.then(handleSuccess, handleError);
};

getWeatherForecast = function ($http) {
  var requestForecast = $http({
    method: 'get',
    params: {
      lang: config.forecast.params.lang,
      mode: config.forecast.params.mode,
      q: config.forecast.params.cityAndCountry,
      units: config.forecast.params.units
    },
    url: config.forecast.url
  });

  return requestForecast.then(handleSuccess, handleError);
};

module.exports = {
  getWeatherForecast: getWeatherForecast,
  getWeatherToday: getWeatherToday
};
