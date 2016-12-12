'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Penyakit = new Schema({
    nama: String,
    namaMedis: String,
    gejala: [],
    deskripsi: String,
    obat: [], // array ini untuk menampung tanaman apa yg bs menyembuhkan penyakit ini
    upvotes: Number // jumlah upvote
});

module.exports = mongoose.model('Penyakit', Penyakit);