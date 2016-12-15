'use strict';

var Tanaman = require('../models/tanaman.js');
//var Users = require('../models/users.js');


function UpvoteHandler () {

	this.getUpvotes = function (req, res) {
		Tanaman
			.findOne({ 'nama': req.tanaman.nama }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.tanaman.upvotes);
			});
	};

	this.addUpvote = function (req, res) {
		Tanaman
			.findOneAndUpdate({ 'nama': req.tanaman.nama }, { $inc: { 'tanaman.upvotes': 1 } })
			.findOneAndUpdate({ 'users.twitter.id': req.users.twitter.id}, { $push: { 'users.upvoted.tanaman': req.tanaman.nama} })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.tanaman);
				}
			);
	};

	this.removeUpvote = function (req, res) {
		Tanaman
			.findOneAndUpdate({ 'nama': req.tanaman.nama }, { $inc: { 'tanaman.upvotes': -1 } })
			.findOneAndUpdate({ 'users.twitter.id': req.users.twitter.id}, { $pull: { 'users.upvoted.tanaman': req.tanaman.nama} })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.tanaman);
				}
			);
	};

}

module.exports = UpvoteHandler;
