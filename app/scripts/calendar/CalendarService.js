'use strict';

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

getCalendarData = function ($http) {
  var requestCalendarData = $http({
    method: 'get',
    url: privateConfig.calendarUrls['bash']
  });

  return requestCalendarData.then(handleSuccess, handleError);
};

module.exports = {
  getCalendarData: getCalendarData
};
