var mongo = require('mongodb').MongoClient
var firstName = process.argv[2]
var lastName = process.argv[3]
var url = 'mongodb://localhost:27017/learnyoumongo'

// document to be inserted
var doc = {
  firstName: firstName,
  lastName: lastName
}

mongo.connect(url, function(err, db) {
  if (err) return console.error(err)

  var docs = db.collection('docs')
  docs.insert(doc, function(err, data) {
    if (err) {
      return console.error(err)
    }

    // log the originally inserted document
    console.log(JSON.stringify(doc))
    db.close()
  })
})