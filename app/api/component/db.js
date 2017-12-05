'use strict';

var DataSource = require('loopback-datasource-juggler').DataSource;
var DASHDB = require('loopback-connector-dashdb');

var config = {
		username: "dash33282",
		password: "98R__oiVxkVA",
		hostname: "dashdb-entry-yp-syd01-01.services.au-syd.bluemix.net",
		port: 50000,
		database: 'BLUDB',
};

exports.db = new DataSource(DASHDB, config);

console.log("DB connected....");


