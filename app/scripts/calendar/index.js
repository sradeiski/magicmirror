'use strict';

module.exports = angular.module('magicmirror.calendar', [])

  .controller('CalendarController', [ '$interval', require('./CalendarController') ]);
