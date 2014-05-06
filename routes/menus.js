var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;

var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('dining', server, {safe: true});

db.open(function(err, db) {
  if (!err) {
    console.log("Connected to 'dining' database");
    db.collection('menus', {strict: true}, function(err, collection) {});
  }
});

var hallNames = {
  "commons": "1920 Commons",
  "hill": "Hill House",
  "mcclelland": "Cafe at McClelland",
  "kceh": "Kings Court English House"
}

var findAll = function(req, res) {
  db.collection('menus', function(err, collection) {
    collection.find().sort({_id:-1}).limit(1).toArray(function(err, items) {
      res.send(items[0]);
    });
  });
};

var findById = function(req, res) {
  var id = req.params.id;
  console.log('Retrieving menu: ' + id);
  db.collection('menus', function(err, collection) {
    collection.findOne({'_id': new BSON.ObjectID(id)}, function(err, item) {
      res.send(item);
    });
  });
};

var findByName = function(req, res) {
  var hall = req.params.hall.toLowerCase();
  console.log('Retrieving menu: ' + hall);
  db.collection('menus', function(err, collection) {
    collection.find().sort({_id:-1}).limit(1).toArray(function(err, items) {
      hallData = items[0][hall];
      hallData["name"] = hallNames[hall];
      res.send(hallData);
    });
  });
};

var findByNameMeal = function(req, res) {
  var hall = req.params.hall.toLowerCase();
  var meal = req.params.meal.toLowerCase();
  console.log('Retrieving menu: ' + hall);
  db.collection('menus', function(err, collection) {
    collection.find().sort({_id:-1}).limit(1).toArray(function(err, items) {
      hallData = items[0][hall];
      mealData = hallData[meal];
      res.send(mealData);
    });
  });
};

module.exports.findAll = findAll;
module.exports.findById = findById;
module.exports.findByName = findByName;
module.exports.findByNameMeal = findByNameMeal;
