'use strict';

var Contents = require('../models/contents.js');
var Users = require('../models/users.js');


function UpvoteHandler () {

	this.getUpvotes = function (req, res) {
		Contents
			.findOne({ 'tanaman.id': req./*user*/.tanaman.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.tanaman.upvotes);
			});
	};

	this.addUpvote = function (req, res) {
		Contents
			.findOneAndUpdate({ 'tanaman.id': req./*user*/.tanaman.id }, { $inc: { 'tanaman.upvotes': 1 } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.tanaman);
				}
			);
	};

	this.removeUpvote = function (req, res) {
		Contents
			.findOneAndUpdate({ 'tanaman.id': req./*user*/.tanaman.id }, { $inc: { 'tanaman.upvotes': -1 } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.tanaman);
				}
			);
	};

}

module.exports = UpvoteHandler;
