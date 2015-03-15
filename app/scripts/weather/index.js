'use strict';

module.exports = angular.module('magicmirror.weather', [])

  .controller('WeatherController', [ '$http', require('./WeatherController') ]);
