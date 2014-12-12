'use strict';

var tourism = require('tourism');

module.exports = tourism({
  analyse: {
    client: [ '**/*.js', '!node_modules/**/*.js', '!build/**/*.js' ]
  },
  test: {
    client: [ 'test/**/*.js' ]
  },
  shell: {
    build: 'browserify --debug index.js > build/build.js',
    buildmin: 'browserify index.js | uglifyjs -mc --screw-ie8 > build/build.js',
    clean: 'rm build/*',
    start: 'http-server'
  }
});
