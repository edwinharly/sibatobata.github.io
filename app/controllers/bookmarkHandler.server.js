'use strict';

//var SbbDB = require('../models/contents.js');

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sbbDB';

// new
function BookmarkHandler() {
	this.getBookmarks = function (req, res) {
		//console.log(req.user);
		mongoclient.connect(url, function (err, db) {
            var collection = db.collection('users');
            collection.findOne({ 'twitter.id': req.user.twitter.id }, { 'bookmarkedArticles': 1}, function (err, result) {
                //console.log(result);
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);

                    res.json(result);
                }
                
                db.close();
            });
        });
	};

	this.addBookmark = function (req, res) {
		/*
		SbbDB
			.findOneAndUpdate({ 'user.twitterId': req.sbbDB.user.twitterId }, { $push: { 'user.bookmarkedArticleId': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.user);
				}
			);
		*/
	};

	this.removeBookmark = function (req, res) {
		/*
		SbbDB
			.findOneAndUpdate({ 'user.twitterId': req.sbbDB.user.twitterId }, { $pull: { 'user.bookmarkedArticleId': articleUrl } })
			.exec(function (err, result) {
					if (err) { throw err; }

					res.json(result.user);
				}
			);
		*/
	};
}

module.exports = BookmarkHandler;
