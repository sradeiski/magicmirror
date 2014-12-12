'use strict';

var weatherService = require('./WeatherService');

var WeatherController = function ($interval) {
  this.config = weatherService.config;
};

module.exports = WeatherController;
