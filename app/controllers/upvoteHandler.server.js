'use strict';

var SbbDB = require('../models/contents.js');
//var Users = require('../models/users.js');


function UpvoteHandler () {

	this.getUpvotes = function (req, res) {
		SbbDB
			.findOne({ 'tanaman.id': req.sbbDB.tanaman.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.tanaman.upvotes);
			});
	};

	this.addUpvote = function (req, res) {
		SbbDB
			.findOneAndUpdate({ 'tanaman.id': req.sbbDB.tanaman.id }, { $inc: { 'tanaman.upvotes': 1 } })
			.findOneAndUpdate({ 'user.twitterId': req.sbbDB.user.twitterId}, { $push: { 'user.upvotedTanamanId': req.sbbDB.tanaman.id} })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.tanaman);
				}
			);
	};

	this.removeUpvote = function (req, res) {
		SbbDB
			.findOneAndUpdate({ 'tanaman.id': req.sbbDB.tanaman.id }, { $inc: { 'tanaman.upvotes': -1 } })
			.findOneAndUpdate({ 'user.twitterId': req.sbbDB.user.twitterId}, { $pull: { 'user.upvotedTanamanId': req.sbbDB.tanaman.id} })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.tanaman);
				}
			);
	};

}

module.exports = UpvoteHandler;
