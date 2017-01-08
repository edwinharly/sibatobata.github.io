'use strict';

var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var ObjectID = mongodb.ObjectID;
var url = 'mongodb://localhost:27017/sbbDB';

function DetailPenyakitHandler() {

    this.getDetailpenyakit = function (req, res) {
        mongoclient.connect(url, function (err, db) {
            var collection = db.collection('penyakit');
            // MAYBE THE ERROR IS HERE var penyakitid = req.params;
            // TRY THIS
            //console.log('sebelum');
            var penyakitid = req.params.penyakitid;
            //console.log(penyakitid);    // { penyakitid: ':penyakitid' }
            //console.log('sesudah');
            collection.findOne({"_id": new ObjectID(penyakitid)}, function (err, result) {
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
    };

    this.addUpvote = function (req, res) {
        mongoclient.connect(url, function (err, db) {
            var collection = db.collection('penyakit');
            var penyakitid = req.params.penyakitid;
            collection.updateOne({ "_id": new ObjectID(penyakitid) }, {$addToSet: { "upvotes": req.user.twitter.id }}, function (err, result) {
                //console.log(req.user.twitter.id);
                //res.send('update success');
                if (err) {
                    console.log(err);
                } else {
                    //console.log(result);
                }
            }); 
            db.close();
        });
    };

    this.removeUpvote = function (req, res) {
        mongoclient.connect(url, function (err, db) {
            var collection = db.collection('penyakit');
            var penyakitid = req.params.penyakitid;
            collection.updateOne({ "_id": new ObjectID(penyakitid) }, {$pull: { "upvotes": req.user.twitter }}, function(err, result) {
                if (err){
                    console.log(err);
                } else {
                    res.json(result);
                }
                db.close();
            }); 
        });
    };
    
}

module.exports = DetailPenyakitHandler;