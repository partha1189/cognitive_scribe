'use strict';

var db = require('../component/db');
var Patient = require('../model/patient').Patient;

exports.hello_task = function(req,res) {
	var msg = "This is Hello message";
	console.log("hello task has called") ;
	res.json({"message":msg});
};


exports.create_a_Hello = function(req, res) {

	var msg = "This is another Hello message from :"+req.params.uname;
	console.log("create hello action called") ;
	console.log(req.params.uname);
	res.json({"message":msg});
};

/**
 * @author jayant
 * @abstract Get Details according to name
 */
exports.get_detail = function(req, res) {
	let pName = req.body.pName;
	Patient.find({where : {NAME : pName}}, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			res.json({"status":"OK","result":result});
			console.log('response data: ' + JSON.stringify(result));		
		}
	});
};


/**
 * @author jayant
 * @abstract Delete record according to name
 */
exports.del_record = function(req, res) {

	let pName = req.body.pName;
	var responseData="";
	Patient.destroyAll({NAME : pName}, function(err, obj) {
		if (err) {
			console.log(err);
		} else {
			responseData = `Record deleted for ${pName}`
				res.json({"status":"OK","result":"Record Deleted"});
		}
	});
};

/**
 * @author Satya
 * @abstract Save recrod
 */
exports.save_record = function(req,res) {
	let responseData = "";

	let data = {
			name:req.body.pName,
			age : req.body.pAge,
			gender : req.body.pGender,
			location : req.body.pLocation,

	};

	Patient.create({data}, function(err, result) {
		if(result=="inserted"){
			res.json({"status":"OK","result":responseData});
		}else{
			responseData = 'There is problem to save details for ${pName}'
		}
	});
}

/**
 * @author Satya
 * @abstract Save record
 */
exports.update_record = function(req,res) {
	let responseData = "";
	console.log(req.body.id)
	let data={  

		id:req.body.id,
		NAME : req.body.pName,
		AGE : req.body.pAge,
		GENDER :  req.body.pGender,
		LOCATION : req.body.pLocation,
	};
	console.log(data);
	Patient.replaceOrCreate(data, function(err, data) {
		if (err) {
			console.log(err, data);
		} else {
			return res.json(data);
			console.log(' details updated successfully...');
		}
	});
}

