var mongodb = require('mongodb');
var mongoclient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/sbbDB';

mongoclient.connect(url, function (err, db) {
    if (err) {
        console.log("failed to connect");
    } else {
        console.log('connection established');
        var collection = db.collection('article');
        collection.find({}, {"_id": false}).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else if (result.length) {
                console.log('Found ', result);
            } else {
                console.log('not found');
            }
            db.close();
        })
    }

})