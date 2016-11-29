'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema({
	github: {
		id: String,
		displayName: String,
		username: String,
      publicRepos: Number
	},
    nbrClicks: {
      	clicks: Number
    },
    facebook: {
    	id: String,
    	token: String,
    	name: String,
    	email: String
    },
    twitter: {
        id: String,
        token: String,
        username: String,
        displayName: String
    }

});

module.exports = mongoose.model('User', User);
