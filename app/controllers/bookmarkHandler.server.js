'use strict';

var SbbDB = require('../models/contents.js');

function BookmarkHandler () {

	this.getBookmarks = function (req, res) {
		SbbDB
			.findOne({ 'user.twitterId': req.sbbDB.user.twitterId }, { '_id': false })
			.exec(function (err, result) {
				if (err) { throw err; }

				res.json(result.user);
			});
	};

	this.addBookmark = function (req, res) {
		SbbDB
			.findOneAndUpdate({ 'user.twitterId': req.sbbDB.user.twitterId }, { $push: { 'user.bookmarkedArticleId': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.user);
				}
			);
	};

	this.removeBookmark = function (req, res) {
		SbbDB
			.findOneAndUpdate({ 'user.twitterId': req.sbbDB.user.twitterId }, { $pull: { 'user.bookmarkedArticleId': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.user);
				}
			);
	};

}

module.exports = BookmarkHandler;
