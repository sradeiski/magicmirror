'use strict';

var clockService = require('./ClockService'),
    config = require('./config');

var dateformat = require('dateformat');

var ClockController = function ($interval) {
  var getFormattedTime,
      that = this;

  getFormattedTime = function () {
    return dateformat(clockService.getCurrentTime(), config.timeFormat);
  };

  that.currentTime = getFormattedTime();

  $interval(function () {
    that.currentTime = getFormattedTime();
  }, config.refreshIntervalInSeconds * 1000);
};

module.exports = ClockController;
