var express = require('express')
var app = express()
var mongo = require('mongodb')
var routes = require('./app/routes/index.js')
var api = require('./app/api/imageSearch.js')

var MongoClient = mongo.MongoClient;
var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/data' 
var ImagesClient = require('google-images')
var cse_id = "017973252979340485132:mp-tbga1mla"
var api_key = "AIzaSyBxPDE2ksghfYoohZROtvSisiwDBdulok0"
var client = new ImagesClient(cse_id, api_key)

MongoClient.connect(url, function (err, db) {
  	if (err) {
    	console.log('Unable to connect to the mongoDB server. Error:', err)
  	} else {
    	console.log('Connection established to', url)
  	}
  	db.createCollection("search_images")

  routes(app);
	api(app, db, client);

	var port = process.env.PORT || 8080; 
	app.listen(port, function() {
    	console.log("ShorterUrl App listening on port "+ port)
	});

});




