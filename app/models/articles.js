'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Article = new Schema({
    title: String,
    imgSrc: String,
    url: String,
    headline: String
});

module.exports = mongoose.model('Article', Article);