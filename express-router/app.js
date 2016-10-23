
var express = require('express');
var app = express();
var router = require("./router.js");

app.use(router);

app.listen(3000, function(){
	console.log('App sta ascolatando su localhost:3000');
});
