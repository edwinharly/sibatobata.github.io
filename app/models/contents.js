'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sbbDB = new Schema({
    user: {
        twitterId: String,
        twitterToken: String,
        twitterUsername: String,
        twitterDisplayName: String,
        upvotedTanamanId: String,
        upvotedPenyakitId: String,
        bookmarkedArticleId: String
    },
    article: {
        id: String,
        articleTitle: String,
        imgSrc: String,
        url: String
    },
    tanaman: {
        id: String, // id disini kita pakai nama latin dari tanamannya
        nama: String,
        namaLatin: String,
        deskripsi: String,
        khasiat: [], // array ini untuk menampung penyakit apa saja yg bisa disembuhkan dgn tanaman ini
        budidaya: [], // array ini untuk mengisi langkah-langkah untuk budidaya, 3 langkah berarti 3 item di array ini
        upvotes: Number // jumlah upvote
    }
    penyakit: {
        id: String, // id disini kita pakai nama latin dari penyakitnya
        nama: String,
        namaMedis: String,
        gejala: [],
        deskripsi: String,
        obat: [], // array ini untuk menampung tanaman apa yg bs menyembuhkan penyakit ini
        upvotes: Number // jumlah upvote
    }
});

module.exports = mongoose.model('sbbDB', sbbDB);