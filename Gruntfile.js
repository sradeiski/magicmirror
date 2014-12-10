'use strict';

var tourism = require('tourism');

module.exports = tourism({
  analyse: {
    client: [ '**/*.js', '!node_modules/**/*.js' ]
  },
  test: {
    client: [ 'test/**/*.js' ]
  }
});
