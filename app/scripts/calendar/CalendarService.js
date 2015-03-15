'use strict';

var config = require('./config');

var getCalendarData,
    handleError,
    handleSuccess;

handleError = function (response) {
  // TO DO ERROR HANDLING
  return response;
};

handleSuccess = function (response) {
  return response.data;
};

getCalendarData = function ($http) {};

module.exports = {
  getCalendarData: getCalendarData
};
