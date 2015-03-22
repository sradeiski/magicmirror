'use strict';

// ======================== //
// edit weather config here //
// ======================== //
var config = {
  refreshIntervalInMinutes: 30,
  today: {
    url: '../weather/today',
    params: {
      cityAndCountry: 'Stuttgart,de',
      units: 'metric',
      lang: 'de',
      mode: 'json'
    }
  },
  forecast: {
    url: '../weather/forecast',
    params: {
      cityAndCountry: 'Stuttgart,de',
      units: 'metric',
      numberOfDays: '5',
      lang: 'de',
      mode: 'json'
    }
  },
  iconMap: {
    '01d': 'wi-day-sunny',
    '02d': 'wi-day-cloudy',
    '03d': 'wi-cloudy',
    '04d': 'wi-cloudy-windy',
    '09d': 'wi-showers',
    '10d': 'wi-rain',
    '11d': 'wi-thunderstorm',
    '13d': 'wi-snow',
    '50d': 'wi-fog',
    '01n': 'wi-night-clear',
    '02n': 'wi-night-cloudy',
    '03n': 'wi-night-cloudy',
    '04n': 'wi-night-cloudy',
    '09n': 'wi-night-showers',
    '10n': 'wi-night-rain',
    '11n': 'wi-night-thunderstorm',
    '13n': 'wi-night-snow',
    '50n': 'wi-night-alt-cloudy-windy'
  },
  dayMap: {
    Monday: 'mo',
    Tuesday: 'di',
    Wednesday: 'mi',
    Thursday: 'do',
    Friday: 'fr',
    Saturday: 'sa',
    Sunday: 'so'
  },
  timeFormat: 'H:MM'
};

module.exports = config;
