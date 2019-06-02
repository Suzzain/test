var usermodel = require('../models/usermodel');
var bcrypt = require('bcrypt');
var saltRounds = 10;

function validator(req,res,next){
	usermodel.myUsers.findOne({
		where : { username:req.body.username}
	})

	.then(function(result){
		if (result.dataValues != '') 
		next({"status":409, "message":"user already exists"})
	})
	.catch(function(err){
		next(``);
	})
}

function hashGenerator(req,res,next){
	req.body.password
	bcrypt.hash(req.body.password, saltRounds)
	.then(function(hash){
		console.log(hash);
		req.hashvalue = hash;
		next();
	})
.catch(function(err){

})
}


function registeruser(req,res,next){

console.log(req.body)
usermodel.myUsers.create({
	username:req.body.username,
	password:req.body.password,
	address:req.body.address


})

.then(function(result){
	//console.log(result);
	
	next();

})

.catch(function(err){
	next({"status":500, "message":"DB Error"});
})
}
module.exports={
registeruser,
hashGenerator
,
validator
}
