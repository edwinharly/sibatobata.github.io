'use strict';

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sbb'
});

function mysqlQuery (stringQuery) {
    var resQuery;
    connection.connect();

    connection.query(stringQuery, function(err, rows, fields) {
    if (err) throw err;
    
    resQuery = rows;
    
    });

    connection.end();

    return resQuery;
}

module.exports = mysqlQuery;

