'use strict'

var Article = require('../models/articles.js');

function ArticleHandler() {

    this.getArticles = function (req, res) {
        Article.find().exec( function (err, result) {
            if (err) { throw err; }
			res.json(result);
        });
        
    };
}

module.exports = ArticleHandler;