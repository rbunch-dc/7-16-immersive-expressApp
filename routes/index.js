var express = require('express');
var router = express.Router();
var http = require('http');

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

	var weatherRequest = http.get(weatherUrl, function(weatherResponse){
		// console.log(weatherResponse);
		if(weatherResponse.statusCode == 200){
			var body = '';
			weatherResponse.on('data', function(dataChunk){
				console.log(dataChunk);
				body += dataChunk;
			});
			weatherResponse.on('end', function(){
				body = JSON.parse(body);
				res.render('weather', { body: body});
			});
		}else{
			res.end('Failed to load');
		}
	});


  // res.render('weather', { 
  // 	title: 'Weather Page' 
  // });
});

module.exports = router;
