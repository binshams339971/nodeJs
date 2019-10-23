var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

/*router.get('*', function(req, res, next){

	if(req.cookies['username'] != null){
		next();
	}else{
		res.redirect('/login');
	}
});*/

router.get('/userlist', function(req, res){

	userModel.getAll(function(results){	
		res.render('user/index', {user: results});
		
	});
});

/*outer.get('/search/:key', function(req, res){
	var key = req.body.params 
	$.ajax({
		url = "user/userlist",
		type = "GET",
		data = "key",
		success : function(data){
			res.render('user/searchres', {user: data});
		}

	});

router.get('user/userlist', function(req, res){

	userModel.getByName(data, function(results){	
		res.render('user/userlist', {user: results});
		
		
	});
});	*/

router.get('/adduser', function(req, res){
	res.render('user/adduser');
});

router.post('/adduser', function(req, res){

	var user = {
		ename: req.body.ename,
		cname: req.body.cname,
		contactno: req.body.contactno,
		username: req.body.username,
		password: req.body.password
	};

	userModel.insert(user, function(status){
		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/edit/:id', function(req, res){

	userModel.getById(req.params.id, function(results){
		res.render('user/edit', {user: results[0]});		
	});

});

router.post('/edit/:id', function(req, res){
	
	var user = {
		username: req.body.username,
		password: req.body.password,
		id: req.params.id
	};

	userModel.update(user, function(status){

		if(status){
			res.redirect('/user/userlist');
		}else{
			res.redirect('/user/adduser');
		}
	});
});

router.get('/details/:id', function(req, res){

	userModel.getById(req.params.id, function(result){
		console.log(result);
		res.render('user/details', {user: result});
	});
});

module.exports = router;
