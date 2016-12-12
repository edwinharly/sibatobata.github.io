'use strict';

var mysql = require('mysql');
var connection= mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

connection.connect();

