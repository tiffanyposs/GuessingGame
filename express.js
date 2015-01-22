var express = require ('express');
var app = express();

app.get('/', function(req, res){
	var celeb = { "results": {
	  "profession": "movie star and director",
	  "known_for": ["action movies", "her beauty"],
	  "gender": "female",
	  "first letter of first name": "a",
	  "extra hint": "Charity"
	}
	};
	res.json(celeb);
})

app.get('/Angelina_Jolie', function(req, res){
	var message = {correct: "NICE JOB!"}
	res.json(message);
})

app.get('/:anything', function(req, res){
	var message = {incorrect: "Try Again!"}
	res.json(message);
})



app.listen(3000)