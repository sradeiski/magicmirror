'use strict';

module.exports = angular.module('magicmirror.news', [])

  .controller('NewsController', [ '$interval', require('./NewsController') ]);
