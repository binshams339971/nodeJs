var express = require('express');
var db = require('./../models/db.js');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(req, res){

		var sql = "select * from employeer";
		db.getResults(sql, function(results){
			if(req.cookies['username'] != null){
				res.render('employeer/index', {user: results});
			}else{
				res.redirect('/login');
			}
		});

});

router.get('/addjob', function(req, res){
	res.render('employeer/addjob');
});

router.post('/addjob', function(req, res){

	var user = {
		cname: req.body.cname,
		job: req.body.job,
		location: req.body.location,
		salary: req.body.salary,
	};

	userModel.insertJob(user, function(status){
		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/employeer/addjob');
		}
	});
});

router.get('/test/:name/:id', function(req, res){

	res.send(req.params.id+ "|"+req.params.name)
})



module.exports = router;


