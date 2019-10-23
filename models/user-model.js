var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from employeer where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from employeer where username=? and password=?";

		db.getResults(sql, [user.username, user.password], function(result){

			if(result.length > 0 ) {
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from employeer";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(user, callback){
		var sql = "insert into employeer values('',?, ?, ?, ?, ?)";
		db.execute(sql, [user.ename, user.cname, user.contactno, user.username, user.password], function(status){
			callback(status);
		});
	},
	insertJob : function(user, callback){
		var sql = "insert into job values('',?, ?, ?, ?)";
		db.execute(sql, [user.cname, user.job, user.location, user.salary,], function(status){
			callback(status);
		});
	},
	update : function(user, callback){
		var sql = "update employeer set username=?, password=? where id=?";		
			db.execute(sql, [user.username, user.password, user.id], function(status){
				callback(status);
			});
		
	},
	delete : function(user, callback){
		//var sql = "insert into user values('','"+ user.username+"', '"+user.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}
}	


