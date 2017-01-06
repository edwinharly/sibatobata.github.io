'use strict';

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var url = 'mongodb://localhost:27017/sbbDB';

function DetailTanamanHandler() {
    this.getDetailtanaman = function (req, res) {
        mongoclient.connect(url, function (err, db) {
            var collection = db.collection('tanaman');
            // MAYBE THE ERROR IS HERE var tanamanid = req.params;
            // TRY THIS
            console.log('sebelum');
            var tanamanid = req.params.tanamanid;
            console.log(tanamanid);    // { tanamanid: ':tanamanid' }
            console.log('sesudah');
            collection.findOne({"_id": new ObjectID(tanamanid)}, function (err, result) {
                //console.log(result);
                if (err) {
                    console.log(err);
                } else {
                    //console.log(result);   // the result is null
                    //console.log(req);
                    res.json(result);
                }

                db.close();
            });
        });

    }
}

module.exports = DetailTanamanHandler;