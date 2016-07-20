var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]
var _id = process.argv[4]

MongoClient.connect(url, function(err, db) {
  if (err) return console.error(err)
  var collection = db.collection(process.argv[3])

  collection.remove({
    _id: _id
  }, function(err) {
    if (err) return console.error(err)
    db.close()
  })
})