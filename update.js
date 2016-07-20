var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/' + process.argv[2]

MongoClient.connect(url, function(err, db) {
  if (err) return console.error(err)

  var users = db.collection('users')
  // update
  users.update({
    username: "tinatime"
  }, {
    $set: {
      age: 40
    }
  }, function(err, data) {
    if (err) return console.error(err)
    db.close()
  })
})