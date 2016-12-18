'use strict';

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sbbDB';

function PenyakitHandler() {
    this.getPenyakit = function (req, res) {
        mongoclient.connect(url, function (err, db) {
            var collection = db.collection('penyakit');
            collection.find().toArray(function (err, result) {
                //console.log(result);
                if (err) {
                    console.log(err);
                } else {
                    //console.log(result);
                    //console.log(req);
                    res.json(result);
                }
                
                db.close();
            });
        });
    };
}
module.exports = PenyakitHandler;