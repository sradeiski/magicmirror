'use strict';

var config = require('./config');

var getTechNews,
    getWorldNews,
    handleError,
    handleSuccess;

handleError = function (response) {
  // TO DO ERROR HANDLING
  return response;
};

handleSuccess = function (response) {
  return response.data;
};

getTechNews = function ($http) {};

getWorldNews = function ($http) {};

module.exports = {
  getTechNews: getTechNews,
  getWorldNews: getWorldNews
};
