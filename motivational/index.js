'use strict';

module.exports = angular.module('magicmirror.motivational', [])

  .controller('MotivationalController', [ '$interval', require('./MotivationalController') ]);
