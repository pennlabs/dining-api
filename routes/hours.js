var moment = require('moment');

function Hours(name, startTime, endTime) {
    this.name = name;
    this.start = moment(startTime, 'HH:mm');
    this.end = moment(endTime, 'HH:mm');

    // Returns whether dining hall is open at given times
    // @return boolean
    this.isOpen = function() {
     return (moment().isAfter(this.start) && moment().isBefore(this.end));
    };

    // Returns the name of the dining hall if it is open, returns false otherwise
    // @return string/boolean
    this.open = function() {
        if (this.isOpen) {
            return this.name;
        } else {
            return false;
        }
    };

    // Returns whether dining hall is about to close
    // Closing defined as 30 minutes (1800 seconds)
    // @return boolean
    this.isClosing = function() {
        timeToClose = moment().diff(this.end, 'second');
        if (timeToClose > -1800 && timeToClose <= 0) {
            return true;
        } else {
            return false;
        }
    };

    // Returns how much time is left until hall closes
    // @return int (milliseconds)
    this.closingTime = function() {
        return moment().diff(this.end);
    };

    // Returns human readable amount of time until hall closes
    // @return string ("one minute")
    this.closingIn = function() {
        moment.lang('en');
        return moment.duration(moment().diff(this.end)).humanize();
    };
}

// Returns whether hall is currently open
// @param hall: JSON object representing hall
// @return boolean
function isOpen(hall) {
    var day = moment().day(); // Current day of the week (int)
    if (day === 5) {
        return openDay(hall.friday);
    } else if (day === 6){
        return openDay(hall.saturday);
    } else if (day === 0) {
        return openDay(hall.sunday);
    } else {
        return openDay(hall.weekdays);
    }
}

// Returns boolean whether dining hall is open on given day
// @param day: array of Hours()
// @return boolean
function openDay(day) {
    var open = false;
    for (var i = 0; i<day.length; i++) {
        open = (open || day[i].isOpen());
    }
    return open;
}

var hours_json =
{
  "commons": {
    "name": "1920 Commons",
    "weekdays": [
      new Hours("Lunch", "11:00", "14:00"),
      new Hours("Dinner", "17:00", "21:00")
    ],
    "friday": [
      new Hours("Lunch", "11:00", "14:00"),
      new Hours("Dinner", "17:00", "19:30")
    ],
    "saturday": [
      new Hours("Brunch", "11:00", "15:00"),
      new Hours("Dinner", "17:00", "19:00")
    ],
    "sunday": [
      new Hours("Brunch", "11:00", "15:00"),
      new Hours("Dinner", "17:00", "20:00")
    ]
  },
  "hill": {
    "name": "Hill",
    "weekdays": [
      new Hours("Breakfast", "07:30", "10:00"),
      new Hours("Lunch", "11:00", "14:00"),
      new Hours("Dinner", "17:00", "20:00")
    ],
    "friday": [
      new Hours("Breakfast", "07:30", "10:00"),
      new Hours("Lunch", "11:00", "14:00"),
      new Hours("Dinner", "17:00", "19:00")
    ],
    "saturday": [
      new Hours("Brunch", "11:00", "15:00"),
      new Hours("Dinner", "17:00", "19:00")
    ],
    "sunday": [
      new Hours("Brunch", "11:00", "15:00"),
      new Hours("Dinner", "17:00", "20:00")
    ]
  },
  "kceh": {
      "name": "King's Court",
      "weekdays": [
        new Hours("Breakfast", "08:30", "10:30"),
        new Hours("Lunch", "11:00", "14:00"),
        new Hours("Dinner", "17:00", "20:00")
      ],
      "friday": [
        new Hours("Breakfast", "08:30", "10:30"),
        new Hours("Lunch", "11:00", "14:00"),
        new Hours("Dinner", "17:00", "20:00")
      ],
      "saturday": [],
      "sunday": []
  },
  "houston": {
    "name": "Houston",
    "weekdays": [
      new Hours("Meal", "11:00", "20:00")
    ],
    "friday": [
      new Hours("Meal", "11:00", "19:00")
    ],
    "saturday": [
      new Hours("Meal", "11:00", "16:00")
    ],
    "sunday": [
      new Hours("Meal", "12:00", "19:00")
    ]
  },
  "mcclelland": {
    "name": "McClelland",
    "weekdays": [
      new Hours("Meal", "08:00", "20:00")
    ],
    "friday": [
      new Hours("Meal", "08:00", "20:00")
    ],
    "saturday": [
      new Hours("Meal", "12:00", "14:00")
    ],
    "sunday": [
      new Hours("Meal", "12:00", "14:00")
    ]
  },
  "falk": {
    "weekdays": [
      new Hours("Lunch", "11:30", "14:00"),
      new Hours("Dinner", "17:30", "19:30")
    ],
    "friday": [
      new Hours("Lunch", "11:30", "14:00")
    ],
    "saturday": [
      new Hours("Lunch", "11:00", "13:30")
    ],
    "sunday": []
  }
}

var hoursAll = function(req, res) {
  console.log('Retrieving all hours');
  res.send(hours_json);
};

var hoursHall = function(req, res) {
  var hall = req.params.hall;
  console.log('Retrieving hours for ' + hall);
  res.send(hours_json[hall]);
}

var openAll = function(req, res) {
  console.log('Retrieving all openings');
  var open_json = {}
  for (hall in hours_json) {
    if (isOpen(hours_json[hall])) {
      open_json[hall] = "open";
    }
    else {
      open_json[hall] = "closed";
    }
  }
  res.send(open_json);
}

var openHall = function(req, res) {
  var hall = req.params.hall;
  var open_json = {}
  console.log('Retrieving whether ' + hall + ' is open');
  if (isOpen(hours_json[hall])) {
    open_json[hall] = "open";
  }
  else {
    open_json[hall] = "closed";
  }
  res.send(open_json);
}

module.exports.hoursAll = hoursAll;
module.exports.hoursHall = hoursHall;
module.exports.openAll = openAll;
module.exports.openHall = openHall;

