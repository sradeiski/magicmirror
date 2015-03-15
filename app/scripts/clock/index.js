'use strict';

module.exports = angular.module('magicmirror.clock', [])

  .controller('ClockController', [ '$interval', require('./ClockController') ]);
