var express = require("express");
var app = express();
var path = require('path');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
 });

 app.post("/", function(req,res){
 	console.log("Ricevuto una richiesta POST");
 	// contenuto della richiesta
 	console.log(req.body);
 	// username
 	console.log(req.body.username);
 	// password
 	console.log(req.body.pass);
 });

 var port = process.env.PORT || 5000;

 app.listen(port, function() {
   console.log("Listening on " + port);
 });