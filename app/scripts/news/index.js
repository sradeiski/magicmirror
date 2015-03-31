'use strict';

module.exports = angular.module('magicmirror.news', [])

  .controller('NewsController', [ '$http', '$interval', require('./NewsController') ]);
