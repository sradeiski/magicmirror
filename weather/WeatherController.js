'use strict';

var weatherService = require('./WeatherService');

var WeatherController = function ($http) {
  var that = this;

  weatherService.getWeatherToday($http).then(function (todaysWeather) {
    that.today = {};
    that.today.description = todaysWeather.weather[0].description;
    that.today.icon = todaysWeather.weather[0].icon;
    that.today.sunset = todaysWeather.sys.sunset;
    that.today.temp = todaysWeather.main.temp;
    that.today.temp_max = todaysWeather.main.temp_max;
    that.today.temp_min = todaysWeather.main.temp_min;
    that.today.windspeed = todaysWeather.wind.speed;
  });

  weatherService.getWeatherForecast($http).then(function (weatherForecast) {
    var i; 

    that.forecast = [];

    for (i = 0; i < weatherForecast.cnt; i++) {
      that.forecast[i] = [];
      that.forecast[i].daystring = weatherForecast.list[i].dt;
      that.forecast[i].icon = weatherForecast.list[i].weather[0].icon;
      that.forecast[i].temperatureDay = weatherForecast.list[i].temp.day;
      that.forecast[i].temperatureLow = weatherForecast.list[i].temp.min;
      that.forecast[i].temperatureHigh = weatherForecast.list[i].temp.max;
      that.forecast[i].description = weatherForecast.list[i].weather[0].description;
    }
  });
};

module.exports = WeatherController;
