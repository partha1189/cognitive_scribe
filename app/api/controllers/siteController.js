'use strict';

var db = require('../component/db');
var Patient = require('../model/patient').Patient;

exports.load_index = function(req,res) {

	res.render('index', {respData: null, error: null,rows:null});
	console.log("Loading site index page") ;
	//res.render('index');
};


exports.send_data = function(req,res) {

	let pName = req.body.pName;
	let action = req.body.pAction;
	let responseData = "";
	if(action=="getDetail"){
		Patient.find({where : {NAME : pName}}, function(err, result) {
			if (err) {
				console.log(err);
			} else {
				responseData = 'You are looking for '+pName;
				res.render('index', {respData:responseData , error: null,rows:JSON.stringify(result)});
			}
		});
	}else{

		Patient.find({where : {NAME : pName}}, function(err, result) {
			if (err) {
				console.log(err);
			} else {
					Patient.destroyById(result[0].id, function(err, obj) {
						if (err) {
							console.log(err);
						} else {
							responseData = 'Record deleted for '+pName;
							res.render('index', {respData:responseData , error: null,rows:null});
						}
					});
				}

		});



	}

};

exports.save_data = function(req,res) {
	let responseData = "";

	let data = {
			NAME:req.body.pName,
			AGE : req.body.pAge,
			GENDER : req.body.pGender,
			LOCATION : req.body.pLocation};

	Patient.create(data, function(err, result) {
		console.log('details saved');
		if(result!=null){
			res.render('index', {respData:'Details have been saved for ' +req.body.pName, error: null,rows:null});
		}else{
			responseData = 'There is problem to save details for'+pName
		}
	});
};
