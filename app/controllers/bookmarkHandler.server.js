'use strict';

var Users = require('../models/users.js');

function BookmarkHandler () {

	this.getBookmarks = function (req, res) {
		Users
			.findOne({ 'twitter.id': req.user.twitter.id }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.bookmarkedArticles.id);
			});
	};

	this.addBookmark = function (req, res) {
		Users
			.findOneAndUpdate({ 'twitter.id': req.user.twitter.id }, { $push: { 'bookmarkedArticles.id': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.bookmarkedArticles.id);
				}
			);
	};

	this.removeBookmark = function (req, res) {
		Users
			.findOneAndUpdate({ 'twitter.id': req.user.twitter.id }, { $pull: { 'bookmarkedArticles.id': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.bookmarkedArticles.id);
				}
			);
	};

}

module.exports = BookmarkHandler;
