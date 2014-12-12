'use strict';

module.exports = angular.module('magicmirror.weather', [])

  .controller('WeatherController', [ '$interval', require('./WeatherController') ]);
