'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Articles = new Schema({
    articleTitle: String,
    imgSrc: String,
    url: String
});

module.exports = mongoose.model('Articles', Articles);