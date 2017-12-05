'use strict';

var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
	 username: '00b8f27a-c0d0-4158-96a8-995895491e62',
	 password: 'FapeJqJZyhcw',
	 version: 'v1',
	 version_date: '2017-05-26'
	});



function getWCResponse(pText,callback){
//response.output.text
   conversation.message({
    workspace_id: '6007334c-45d4-427e-985a-902301d7ef36',
    input: {'text': pText}
   },  function(err, response) {
      if(err){
         //console.log('error:', err);
         callback(null,err);
      }else{
         //console.log(response);
         callback(null,response);
      }
   });
}


exports.getWCResponse = getWCResponse;
