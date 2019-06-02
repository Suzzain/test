// console.log("Index is running");
// console.log("index 2nd");

var express = require('express');
var app = new express();
bodyParser = require('body-parser');
var dbconfig = require('./configs/databasesconfig');
var usermodel = require('./models/usermodel');
var usercontroller= require('./Controller/Usercontroller');

app.use(bodyParser.json());

app.use(function(req,res,next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'content-type');
	next();
}
)

app.post('/v1/users', usercontroller.validator, usercontroller.hashGenerator,
	usercontroller.registeruser,function(req,res,next){
		res.status(201);
		res.send({"message":"User was registered successfully"})
		res.status(201);
		res.send({"message":"okay"})
	})

app.use(function(err,req,res,next){
	res.status(err.status);
	res.send({"message":err.message})
})


app.listen(3001);