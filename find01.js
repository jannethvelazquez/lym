var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var lowestAge = Number(process.argv[2])

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)

  // query and select fields
  var parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: lowestAge
    }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function(err, documents) {
    if (err) return console.error(err)

    // log the documents with custom fields
    console.log(documents)
    db.close()
  })
})