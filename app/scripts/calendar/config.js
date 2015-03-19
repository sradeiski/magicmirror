'use strict';

var config;

// ========================= //
// edit calendar config here //
// ========================= //
config = {
  calendarIds: [
    'bash'
  ],
	refreshIntervalInMinutes: 30,
  serviceUrl: 'http://localhost:3000/calendar/google'
};

module.exports = config;
