var express = require('express');
var userModel = require('./../models/user-model');

var router = express.Router();

router.get('/', function(req, res){
	res.render('login/index');
});

router.post('/', function(req, res){
	
	//res.redirect('/home');
	var user = {
		username: req.body.username,
		password: req.body.password
	}
		if(req.body.username == "admin" & req.body.password == "admin")
		{
			//res.cookie('username', req.body.uname);
			res.redirect('/home');
		}
		else
		{
			userModel.validate(user, function(status){
			if(status)
			{
				res.cookie('username', req.body.uname);
				res.redirect('/employeer');
			}
			else
			{
				res.send('invalid username/password');
			}
		});
		}
});



module.exports = router;


