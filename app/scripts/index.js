'use strict';

angular.module('magicmirror', [
  require('./calendar').name,
  require('./clock').name,
  require('./motivational').name,
  require('./news').name,
  require('./weather').name
]);
