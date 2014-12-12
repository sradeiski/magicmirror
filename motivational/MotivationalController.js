'use strict';

var motivationalService = require('./MotivationalService');

var MotivationalController = function () {
  this.motivational = motivationalService.getRandomMotivational().text;
};

module.exports = MotivationalController;
