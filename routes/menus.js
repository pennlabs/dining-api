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

var findAll = function(req, res) {
  db.collection('menus', function(err, collection) {
    collection.find().toArray(function(err, items) {
      res.send(items);
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
  var hall = req.params.hall;
  console.log('Retrieving menu: ' + hall);
  db.collection('menus', function(err, collection) {
    var re = new RegExp(hall, "i");
    collection.findOne({'name': re}, function(err, item) {
      res.send(item);
    });
  });
};

var findByNameMeal = function(req, res) {
  var hall = req.params.hall;
  var meal = req.params.meal;
  console.log('Retrieving menu: ' + hall);
  db.collection('menus', function(err, collection) {
    var re = new RegExp(hall, "i");
    collection.findOne({'name': re}, function(err, item) {
      mealMenu = item.menu[meal]
      delete item.menu
      item.menu = {}
      item.menu[meal] = mealMenu
      res.send(item);
    });
  });
};

module.exports.findAll = findAll;
module.exports.findById = findById;
module.exports.findByName = findByName;
module.exports.findByNameMeal = findByNameMeal;

