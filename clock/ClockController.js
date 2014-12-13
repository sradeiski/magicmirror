'use strict';

var clockService = require('./ClockService');
var dateformat = require('dateformat');

var ClockController = function ($interval) {
  var getFormattedTime,
      refreshInterval = 10 * 1000,
      that = this;

  getFormattedTime = function () {
    return dateformat(clockService.getCurrentTime(), 'H:mm');
  };

  that.currentTime = getFormattedTime();

  $interval(function () {
    that.currentTime = getFormattedTime();
  }, refreshInterval);
};

module.exports = ClockController;
