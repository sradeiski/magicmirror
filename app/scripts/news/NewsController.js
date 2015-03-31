'use strict';

var newsService = require('./NewsService');

var NewsController = function ($http, $interval) {
  var copyTechNewsToScope,
      copyWorldNewsToScope,
      that = this;

  that.config = newsService.config;

  copyTechNewsToScope = function (techNews) {
    that.techNews = techNews;
  };

  copyWorldNewsToScope = function (worldNews) {
    that.worldNews = worldNews;
  };

  newsService.getTechNews($http).then(copyTechNewsToScope);
  newsService.getWorldNews($http).then(copyWorldNewsToScope);

  $interval(function () {
    newsService.getTechNews($http).then(copyTechNewsToScope);
    newsService.getWorldNews($http).then(copyWorldNewsToScope);
  }, that.config.refreshIntervalInMinutes * 60 * 1000);

};

module.exports = NewsController;
