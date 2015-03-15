'use strict';

module.exports = angular.module('magicmirror.calendar', [])

  .controller('CalendarController', [ '$http', '$interval', require('./CalendarController') ]);
