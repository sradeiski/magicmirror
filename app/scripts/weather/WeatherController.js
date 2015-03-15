'use strict';

var weatherService = require('./WeatherService');

var dateformat = require('dateformat');

var WeatherController = function ($http, $interval) {
  var copyTodaysWeatherToScope,
      copyWeatherForecastToScope,
      getFormattedTime,
      that = this;

  that.config = weatherService.config;

  getFormattedTime = function (timestamp) {
    return dateformat(timestamp * 1000, that.config.timeFormat);
  };

  copyTodaysWeatherToScope = function (todaysWeather) {
    that.today = {};
    that.today.description = todaysWeather.weather[0].description;
    that.today.icon = that.config.iconMap[todaysWeather.weather[0].icon];
    that.today.sunset = getFormattedTime(todaysWeather.sys.sunset);
    that.today.temp = Math.round(todaysWeather.main.temp);
    that.today.tempMax = Math.round(todaysWeather.main.temp_max);
    that.today.tempMin = Math.round(todaysWeather.main.temp_min);
    that.today.windspeed = todaysWeather.wind.speed;
  };

  copyWeatherForecastToScope = function (weatherForecast) {
    var i;

    that.forecast = [];

    for (i = 0; i < weatherForecast.cnt; i++) {
      that.forecast[i] = [];
      that.forecast[i].daystring = that.config.dayMap[dateformat(new Date(weatherForecast.list[i].dt * 1000), 'dddd')];
      that.forecast[i].icon = that.config.iconMap[weatherForecast.list[i].weather[0].icon];
      that.forecast[i].temperatureDay = Math.round(weatherForecast.list[i].temp.day);
      that.forecast[i].temperatureLow = Math.round(weatherForecast.list[i].temp.min);
      that.forecast[i].temperatureHigh = Math.round(weatherForecast.list[i].temp.max);
      that.forecast[i].description = weatherForecast.list[i].weather[0].description;
    }
  };

  weatherService.getWeatherToday($http).then(copyTodaysWeatherToScope);
  weatherService.getWeatherForecast($http).then(copyWeatherForecastToScope);

  $interval(function () {
    weatherService.getWeatherToday($http).then(copyTodaysWeatherToScope);
    weatherService.getWeatherForecast($http).then(copyWeatherForecastToScope);
  }, that.config.refreshIntervalInMinutes * 60 * 1000);
};

module.exports = WeatherController;
