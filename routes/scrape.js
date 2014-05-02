var request = require('request'),
	cheerio = require('cheerio');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

var nameToURL = {
	"commons": "1920-commons/1920-menu.html",
	"hill": "hill-house/daily-menu.html",
	"mcclelland": "cafe-at-mcclelland/daily-menu.html",
	"kceh": "kings-court-english-house/daily-menu.html"
}

var scrape = function(req, res) {
	var BASE_URL = "http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/";
  var foodAllHalls = {"date": new Date()};
  var count = 1;

  for (var hall in nameToURL) {
    scrapy(hall, function(data, this_hall) {
      foodAllHalls[this_hall] = data;

      // Send JSON once there are 4 entries => async
      count++;
      if (count > 4) {
        res.send(foodAllHalls);
      }
    });
  }
};

var scrapeHall = function(req, res) {
	var hall = req.params.hall;
	var BASE_URL = "http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/";
	var HALL_URL = nameToURL[hall];
	
	request(BASE_URL+HALL_URL, function(error, response, body) {
		if (!error) {
			var $ = cheerio.load(body);
			var food = {"date": new Date()};

			$('h4').each(function(i, e){
				var meal = $(e);
				var mealName = meal.text().toLowerCase();
				food[mealName] = {};
				meal.next().children('strong').each(function(i, heading){
					var headingName = $(heading).text().toLowerCase();
					food[mealName][headingName] =
						$(heading.next.next.children)
						  .map(function(i, e) {
							return $(e).text().trim();
						  })
						  .toArray();
				});
			});
			res.send(food);
		}
	});
};

var scrapy = function(hall, cb) {
	var BASE_URL = "http://cms.business-services.upenn.edu/dining/hours-locations-a-menus/residential-dining/";
	var HALL_URL = nameToURL[hall];
	
	request(BASE_URL+HALL_URL, function(error, response, body) {
		if (!error) {
			var $ = cheerio.load(body);
			var food = {};

			$('h4').each(function(i, e){
				var meal = $(e);
				var mealName = meal.text().toLowerCase();
				food[mealName] = {};
				meal.next().children('strong').each(function(i, heading){
					var headingName = $(heading).text().toLowerCase();
					food[mealName][headingName] =
						$(heading.next.next.children)
						  .map(function(i, e) {
                return $(e).text().trim();
						  })
						  .toArray();
				});
			});
			cb(food, hall);
		}
	});
};

module.exports.scrape = scrape;
module.exports.scrapeHall = scrapeHall;

