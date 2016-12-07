'use strict';

var Contents = require('../models/contents.js');

function UpvoteHandler () {

	this.getUpvotes = function (req, res) {
		Contents
			.findOne({ 'tanaman.id': req./*user*/.tanaman.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.tanaman.upvotes);
			});
	};

	this.addBookmark = function (req, res) {
		Contents
			.findOneAndUpdate({ 'tanaman.id': req./*user*/.tanaman.id }, { $push: { 'bookmarkedArticles.id': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.bookmarkedArticles.id);
				}
			);
	};

	this.removeBookmark = function (req, res) {
		Contents
			.findOneAndUpdate({ 'tanaman.id': req./*user*/.tanaman.id }, { $pull: { 'bookmarkedArticles.id': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.bookmarkedArticles.id);
				}
			);
	};

}

module.exports = UpvoteHandler;
