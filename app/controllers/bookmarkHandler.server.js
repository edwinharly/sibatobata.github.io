'use strict';

//var SbbDB = require('../models/contents.js');

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sbbDB';
var ObjectID = mongodb.ObjectID;

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
		var tmpArticle;

		//console.log('atas');
		
		function fetchArticle() {
			mongoclient.connect(url, function (err, db) {
				//console.log('masuk connect');
				var usersCollection = db.collection('users');
				var articlesCollection = db.collection('article');
				var articleid = req.params.articleid;

				articlesCollection.findOne({ "_id": new ObjectID(articleid)}, {"_id": 0}, function (err, result) {
					if (err) {
						console.log(err);
					} else {
						console.log('isi tmpArticle')
						//console.log(result);
						tmpArticle = result;
						console.log(tmpArticle.url);
						console.log(tmpArticle.title);

					}
				});


				//console.log('bawah cari artikel');
				//console.log(tmpArticle);
				
				//console.log('sebelum close');
				db.close();
			});
		}
		fetchArticle();

		//console.log(tmpArticle);
		//console.log('tengah');
		function updateToUser() {
			mongoclient.connect(url, function (err, db) {
				var usersCollection = db.collection('users');
				var articlesCollection = db.collection('article');
				var articleid = req.params.articleid;
				
				usersCollection.updateOne(
					{ "twitter.id": req.user.twitter.id }, 
					{
						$addToSet: 
						{ 
							"bookmarkedArticles": 
							{ 
								"url": tmpArticle.url,
								"imgSrc": tmpArticle.imgSrc,
								"headline": tmpArticle.headline,
								"title": tmpArticle.title 
							} 
						}
					}, 
					function (err, result) {
						//console.log(req.user.twitter.id);
						//res.send('update success');
						if (err) {
							console.log(err);
						} else {
							console.log('update user bookmark')
							console.log(result);
						}
					}
				); 
				
				db.close();
			});
		}
		updateToUser();
		
		//console.log('bawah');
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
