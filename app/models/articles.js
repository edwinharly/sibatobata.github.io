'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Article = new Schema({
    articleTitle: String,
    imgSrc: String,
    url: String
});

module.exports = mongoose.model('Article', Article);