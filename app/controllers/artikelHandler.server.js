'use strict'

//var Article = require('../models/articles.js');


var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/sbbDB';


function ArticleHandler() {
    /*
    this.getArticles = function (req, res) {
        Article.find().exec( function (err, result) {
            if (err) { throw err; }
			res.json(result);
        });
        
    };
    */

    
    this.getArticles = function (req, res) {

        mongoclient.connect(url, function (err, db) {
            /*
            if (err) {
                console.log("failed to connect");
            } else {
                console.log('connection established');
                var collection = db.collection('article');
                collection.find().toArray(function (err, result) {
                    if (err) {
                        console.log(err);
                    } else if (result.length) {
                        console.log(result);
                        res.json(JSON.stringify(result));
                    } else {
                        console.log('not found');
                    }
                    db.close();
                })
            } */
            var collection = db.collection('article');
            collection.find().toArray(function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    res.json(JSON.stringify(result));
                }
                db.close();
            })

        })
    }
    

}

module.exports = ArticleHandler;
