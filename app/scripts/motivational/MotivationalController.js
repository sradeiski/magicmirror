'use strict';

var motivationalService = require('./MotivationalService'),
    config = require('./config');

var MotivationalController = function ($interval) {
  var that = this;

  that.motivational = motivationalService.getRandomMotivational().text;

  $interval(function () {
    that.motivational = motivationalService.getRandomMotivational().text;
  }, config.refreshIntervalInHours* 60 * 60 * 1000);
};

module.exports = MotivationalController;
