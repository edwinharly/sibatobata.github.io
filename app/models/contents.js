'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SBBContent = new Schema({
    article: {
        id: String,
        articleTitle: String,
        imgSrc: String,
        url: String
    },
    tanaman: {
        id: String, // id disini kita pakai nama latin dari tanamannya
        nama: String,
        deskripsi: String,
        khasiat: [], // array ini untuk menampung penyakit apa saja yg bisa disembuhkan dgn tanaman ini
        budidaya: [], // array ini untuk mengisi langkah-langkah untuk budidaya, 3 langkah berarti 3 item di array ini
        upvotes: [] // array utk menampung id user yg telah mengupvote
    }
    penyakit: {
        id: String, // id disini kita pakai nama latin dari penyakitnya
        nama: String,
        deskripsi: String,
        obat: [], // array ini untuk menampung tanaman apa yg bs menyembuhkan penyakit ini
        upvotes: [] // array utk menampung id user yg telah mengupvote
    }
});

module.exports = mongoose.model('SBBContent', SBBContent);