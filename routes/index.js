var express = require('express');
var router = express.Router();
var http = require('http');
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  	title: 'About Page',
  	students: [
  		{name: 'JT', img:'http://'},
  		'Danny',
  		'Dan',
  		'Alex'
  	]
  });
});

/* GET weather page. */
router.get('/weather', function(req, res, next) {
	var apikey = 'e312dbeb8840e51f92334498a261ca1d';
	var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;
	request.get(weatherUrl, function(error, response, body){
		body = JSON.parse(body);
		res.render('weather', {
			weatherObject: body,
		});
	});
});

module.exports = router;
