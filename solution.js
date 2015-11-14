// 3.
/*var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo';
var assert = require('assert');
var findData = function(db, callback) {
  var cursor = db.collection('parrots')
                 .find({ 'age': { $gt: parseInt(process.argv[2]) }});
  cursor.toArray(function(err,doc) {
    console.log(doc);
    return callback();
  });
};

mongo.connect(url, function(err, db) {
  assert.equal(null, err);
  findData(db, function() {
    db.close();
  });
});
*/
/*
var mongo = require('mongodb').MongoClient
var age = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: +age
    }
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})
*/


// 4
/*var mongo = require('mongodb').MongoClient
var age = parseInt(process.argv[2])
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err,db) {
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.find({
    age: { $gt: age }
  }, {
    name: 1,
    age: 1,
    _id: 0
  }).toArray(function(err, docs) {
    if (err) throw err
    console.log(docs)
    db.close()
  })
})
*/

//5
/*var firstName = process.argv[2];
var lastName = process.argv[3];
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var doc = {'firstName': firstName, 'lastName': lastName}
  var docs = db.collection('docs')
  docs.insert({
    firstName: firstName,
    lastName: lastName
  }, function(err, data) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
})
*/
/*
    var mongo = require('mongodb').MongoClient
    
    var firstName = process.argv[2]
    var lastName = process.argv[3]
    var doc = {
      firstName: firstName
    , lastName: lastName
    }
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var collection = db.collection('docs')
      collection.insert(doc, function(err, data) {
        if (err) throw err
        console.log(JSON.stringify(doc))
        db.close()
      })
    })
*/

// 6
/*var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2]

mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('users')
  collection.update({
    name: 'Tina'
  }, {
    $set: {
      age: 40
    }
  }, function(err, data) {
    if (err) throw err
    db.close()
  })
})
*/

// 7
/*var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/'+process.argv[2]
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection(process.argv[3])
  collection.remove({
    _id: process.argv[4]
  }, function(err) {
    if (err) throw err
    db.close()
  })
})
*/


// 8
/*var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('parrots')
  collection.count({
    age: { $gt: parseInt(process.argv[2]) }
  }, function (err, count) {
    if (err) throw err
    console.log(count)
    db.close()
  })
})
*/


//9
var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
mongo.connect(url, function(err, db) {
  if (err) throw err
  var collection = db.collection('prices')
  collection.aggregate([
    { $match: { size: process.argv[2] }}
  , { $group: {
      _id: 'average'
    , average: {
        $avg: '$price'
      }
    }}
  ]).toArray(function(err, results) {
    if (err) throw err
    console.log(Number(results[0].average).toFixed(2))
    db.close()
  })
})


/*
    var mongo = require('mongodb').MongoClient
    var size = process.argv[2]
    
    var url = 'mongodb://localhost:27017/learnyoumongo'
    
    mongo.connect(url, function(err, db) {
      if (err) throw err
      var prices = db.collection('prices')
      prices.aggregate([
        { $match: {
          size: size
        }}
      , { $group: {
          _id: 'total'
        , total: {
            $avg: '$price'
          }
        }}
      ]).toArray(function(err, results) {
        if (err) throw err
        if (!results.length) {
          throw new Error('No results found')
        }
        var o = results[0]
        console.log(Number(o.total).toFixed(2))
        db.close()
      })
    })*/



















