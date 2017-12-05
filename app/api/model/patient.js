var db = require('../component/db').db;


var Patient = db.define('TBL_PATIENT', {
	NAME: { type: String },
	AGE:{type:Number},
	GENDER:{type:String},
	LOCATION:{type:String}  
});

exports.Patient = Patient;

db.autoupdate('TBL_PATIENT', function(err) {
    if (err) {
       // console.log(err);
        return;
    } else {
        console.log('TBL_PATIENT table created/updated...');
    }

});
