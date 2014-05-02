var express = require('express'),
    menus = require('./routes/menus'),
    hours = require('./routes/hours'),
    scrape = require('./routes/scrape');

var app = express();

app.get('/menus', menus.findAll);
app.get('/menus/:id', menus.findByName);
app.get('/menus/:id/:meal', menus.findByNameMeal);

app.get('/hours', hours.hoursAll);
app.get('/hours/:hall', hours.hoursHall);
app.get('/open', hours.openAll);
app.get('/open/:hall', hours.openHall);

app.get('/scrape', scrape.scrape);
app.get('/scrape/:hall', scrape.scrapeHall);

app.listen(3000);
console.log('Listening on port 3000...');

