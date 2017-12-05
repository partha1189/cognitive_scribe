'use strict';

var wc  = require('../component/watson');



exports.wc_demo = function(req,res) {
   console.log("hello task has called") ;
   //res.json({"message":msg});
   res.render('wc_demo', {respData:null});
};


exports.get_wc_response = function(req,res) {

   var textRec = req.body.pText;
   //res.json({"message":msg});

   let wcResponse = wc.getWCResponse(textRec,function(err,result){
                     //res.json({"status":"OK","result":result});
                     var wcResp = result.output.text;
                     res.render('wc_demo', {respData: wcResp});
                  });
};
