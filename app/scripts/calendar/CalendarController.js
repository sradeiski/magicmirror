'use strict';

var calendarService = require('./CalendarService'),
		config = require('./config');

var dateformat = require('dateformat');

var CalendarController = function ($http, $interval) {
	var copyCalendarDataToScope,
			that = this;

	that.config = config;

	copyCalendarDataToScope = function (calendarData) {
		var i;

		//MOCK
		calendarData = {};
		calendarData.cnt = 5;

		that.calendar = [];

		for (i = 0; i < calendarData.cnt; i++) {
		  that.calendar[i] = [];
		  that.calendar[i].time = '19:00';
		  that.calendar[i].duration = '(3h)';
		  that.calendar[i].description = 'Dummy event';
		}
	};

  calendarService.getCalendarData($http, config.calendarIds[0]).then(copyCalendarDataToScope);

  $interval(function () {
  calendarService.getCalendarData($http).then(copyCalendarDataToScope);
  }, that.config.refreshIntervalInMinutes * 60 * 1000);
};

module.exports = CalendarController;
