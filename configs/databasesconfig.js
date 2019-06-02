var Sequelize = require('sequelize');

var sequelize = new Sequelize('agriculture','root','',{
	host:'localhost',
	dialect:'mysql',
	logging:false
});
	


sequelize.authenticate()
.then(
function(){
console.log('Database connected');
}

	)
.catch(function(err)
{
	console.log(err);
}
	)
module.exports = {
	sequelize,
	Sequelize
};