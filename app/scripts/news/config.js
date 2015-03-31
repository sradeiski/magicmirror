'use strict';

var config;

// ===================== //
// edit news config here //
// ===================== //
config = {
  numberOfItemsToRetrieve: 5,
  refreshIntervalInMinutes: 30,
  tech: {
    url: '../news/engadget.com'
  },
  world: {
    url: '../news/reuters/world'
  }
};

module.exports = config;
