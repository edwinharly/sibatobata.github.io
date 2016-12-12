'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Tanaman = new Schema({
    nama: String,
    namaLatin: String,
    deskripsi: String,
    khasiat: [], // array ini untuk menampung penyakit apa saja yg bisa disembuhkan dgn tanaman ini
    budidaya: [], // array ini untuk mengisi langkah-langkah untuk budidaya, 3 langkah berarti 3 item di array ini
    upvotes: Number // jumlah upvote
});

module.exports = mongoose.model('Tanaman', Tanaman);