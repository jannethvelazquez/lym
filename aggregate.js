var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var size = process.argv[2]

MongoClient.connect(url, function(err, db) {
  if (err) return console.error(err)

  // log the average price
  db.collection('prices').aggregate([
    {$match: {size: size}},
    {$group: {
      _id: 'avg',
      avg: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, result) {
    if (err) return console.error(err)
    console.log(result[0]['avg'].toFixed(2))
    db.close()
  })
})