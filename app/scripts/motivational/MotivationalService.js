'use strict';

var config = require('./config');

var getDifferentRandomMotivational,
    getRandomMotivational;

getDifferentRandomMotivational = function (motivationalIndex) {
  // get random motivational from config where index !=== motivationalIndex
  var randomIndex;
  while (randomIndex === undefined) {
    randomIndex = Math.floor(Math.random() * (config.entries.length - 1));
    if (randomIndex === motivationalIndex) {
      randomIndex = undefined;
    }
  }

  return { index: randomIndex, text: config.entries[randomIndex]};
};

getRandomMotivational = function () {
  // get random motivational from config
  var randomIndex = Math.floor(Math.random() * (config.entries.length - 1));

  return { index: randomIndex, text: config.entries[randomIndex]};
};

module.exports = {
  getDifferentRandomMotivational: getDifferentRandomMotivational,
  getRandomMotivational: getRandomMotivational
};
