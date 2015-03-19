'use strict';

var config = require('./config');
var privateConfig = require('./privateconfig');

var getCalendarData,
    handleError,
    handleSuccess;

handleError = function (response) {
  console.error(response);
  return response;
};

handleSuccess = function (response) {
	console.log(response);
  return response.data;
};

getCalendarData = function ($http, calendarId) {
  var requestCalendarData = $http({
    method: 'get',
    params: {
      ical: privateConfig.calendarUrls[calendarId]
    },
    url: config.serviceUrl
  });

  return requestCalendarData.then(handleSuccess, handleError);
};

module.exports = {
  getCalendarData: getCalendarData
};
