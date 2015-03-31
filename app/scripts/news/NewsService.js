'use strict';

var config = require('./config');

var getTechNews,
    getWorldNews,
    handleError,
    handleSuccess;

handleError = function (response) {
  // TO DO ERROR HANDLING
  console.log(response);
  return response;
};

handleSuccess = function (response) {
  return response.data;
};

getTechNews = function ($http) {
  var requestNewsData = $http({
    method: 'get',
    params: {
      numberOfItems: config.numberOfItemsToRetrieve
    },
    url: config.tech.url
  });

  return requestNewsData.then(handleSuccess, handleError);
};

getWorldNews = function ($http) {
  var requestNewsData = $http({
    method: 'get',
    params: {
      numberOfItems: config.numberOfItemsToRetrieve
    },
    url: config.world.url
  });

  return requestNewsData.then(handleSuccess, handleError);
};

module.exports = {
  config: config,
  getTechNews: getTechNews,
  getWorldNews: getWorldNews
};
