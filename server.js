var express = require('express'),
    schedule = require('node-schedule'),
    menus = require('./routes/menus'),
    hours = require('./routes/hours'),
    scrape = require('./routes/scrape');

// Scrape dining hall website each morning
var repeatScrape = schedule.scheduleJob({hour: 0, minute: 1}, function() {
  menus.scrape;
});

// Express routes
var app = express();

// Display README if no real routes
app.get('/', function(req, res) {
  res.set({'Content-Type': 'text/plain'});
  res.sendfile('README.md');
});

app.get('/menus', menus.findAll);
app.get('/menus/:hall', menus.findByName);
app.get('/menus/:hall/:meal', menus.findByNameMeal);

app.get('/hours', hours.hoursAll);
app.get('/hours/:hall', hours.hoursHall);
app.get('/open', hours.openAll);
app.get('/open/:hall', hours.openHall);

app.get('/scrape', scrape.scrape);
app.get('/scrape/:hall', scrape.scrapeHall);

app.listen(3000);
console.log('Listening on port 3000...');

