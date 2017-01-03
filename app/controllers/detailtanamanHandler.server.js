'use strict';

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sbbDB';

function DetailTanamanHandler() {
    this.getDetailtanaman = function (req, res) {
        mongoclient.connect(url, function (err, db) {
            var collection = db.collection('tanaman');
            var tanamanid = req.params;
            console.log('diatas tanamanid');
            console.log(tanamanid);
            collection.findOne({"_id": tanamanid}, function (err, result) {
                //console.log(result);
                if (err) {
                    console.log(err);
                } else {
                    console.log(result);
                    //console.log(req);
                    res.json(result);
                }
                
                db.close();
            });
        });

    }
}

module.exports = DetailTanamanHandler;