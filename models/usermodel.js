var mysequelize = require('../configs/databasesconfig')

var myUsers = mysequelize.sequelize.define('myUsers',{


	id:  {

		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement:true,
		allowNull: false
	},

	username: {
		type: mysequelize.Sequelize. STRING,
		allowNull: false
	},

	password:{
	type: mysequelize.Sequelize. STRING,
		allowNull: false
	},

	address:{
		type: mysequelize.Sequelize. STRING,
		allowNull: false
	},

	// testval:{
	// 	type: mysequelize.Sequelize. STRING,
	// 	allowNull: false
	// }
},
{
	freezeTableName: true,
	tableName:'my_users'

})


myUsers.sync({force:true})
.then(function(){
	console.log('users table created')

})

.catch(function(err){
console.log(err);
	
})

module.exports = {
	myUsers
}