'use strict';

module.exports = function(app) {
var pController = require('../controllers/patientController');
var siteController = require('../controllers/siteController');
var wcController = require('../controllers/wcController');


app.route('/')
  .get(siteController.load_index)
  .post(siteController.send_data);

 app.route('/saveData')
    .post(siteController.save_data);


  // todoList Routes
  app.route('/api/messages')
    .get(pController.hello_task);

app.route('/api/messages/:uname')
   .get(pController.create_a_Hello);

//Routes for db api
app.route('/api/db/getDetail')
   .post(pController.get_detail);

app.route('/api/db/deleteRecord')
      .post(pController.del_record);

app.route('/api/db/saveRecord')
   .post(pController.save_record);

app.route('/api/db/updateRecord')
   .post(pController.update_record);


//Routes for WS API
app.route('/wcDemo')
   .get(wcController.wc_demo)
   .post(wcController.get_wc_response);

};
