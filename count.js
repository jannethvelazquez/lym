var MongoClient = require('mongodb').MongoClient

// mind the type coercion
var lowestAge = +process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'

MongoClient.connect(url, function(err, db) {
  if (err) return console.error(err)
  db.collection('parrots').count({
    age: {
      $gt: lowestAge
    }
  }, function(err, count) {
    if (err) return console.error(err)
    console.log(count)
    db.close()
  })
})