Penn Dining API
===============

Sample Queries
--------------

Hours
-----

**Request**

```
GET /hours
```

**Response**
```javascript
{
  "commons": {
    "name": "1920 Commons",
    "weekdays": [
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-02T01:00:00.000Z"
      }
    ],
    "friday": [
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-01T23:30:00.000Z"
      }
    ],
    "saturday": [
      {
        "name": "Brunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T19:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-01T23:00:00.000Z"
      }
    ],
    "sunday": [
      {
        "name": "Brunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T19:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ]
  },
  "hill": {
    "name": "Hill",
    "weekdays": [
      {
        "name": "Breakfast",
        "start": "2014-05-01T11:30:00.000Z",
        "end": "2014-05-01T14:00:00.000Z"
      },
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ],
    "friday": [
      {
        "name": "Breakfast",
        "start": "2014-05-01T11:30:00.000Z",
        "end": "2014-05-01T14:00:00.000Z"
      },
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-01T23:00:00.000Z"
      }
    ],
    "saturday": [
      {
        "name": "Brunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T19:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-01T23:00:00.000Z"
      }
    ],
    "sunday": [
      {
        "name": "Brunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T19:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ]
  },
  "kceh": {
    "name": "King's Court",
    "weekdays": [
      {
        "name": "Breakfast",
        "start": "2014-05-01T12:30:00.000Z",
        "end": "2014-05-01T14:30:00.000Z"
      },
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ],
    "friday": [
      {
        "name": "Breakfast",
        "start": "2014-05-01T12:30:00.000Z",
        "end": "2014-05-01T14:30:00.000Z"
      },
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ],
    "saturday": [],
    "sunday": []
  },
  "houston": {
    "name": "Houston",
    "weekdays": [
      {
        "name": "Meal",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ],
    "friday": [
      {
        "name": "Meal",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T23:00:00.000Z"
      }
    ],
    "saturday": [
      {
        "name": "Meal",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T20:00:00.000Z"
      }
    ],
    "sunday": [
      {
        "name": "Meal",
        "start": "2014-05-01T16:00:00.000Z",
        "end": "2014-05-01T23:00:00.000Z"
      }
    ]
  },
  "mcclelland": {
    "name": "McClelland",
    "weekdays": [
      {
        "name": "Meal",
        "start": "2014-05-01T12:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ],
    "friday": [
      {
        "name": "Meal",
        "start": "2014-05-01T12:00:00.000Z",
        "end": "2014-05-02T00:00:00.000Z"
      }
    ],
    "saturday": [
      {
        "name": "Meal",
        "start": "2014-05-01T16:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      }
    ],
    "sunday": [
      {
        "name": "Meal",
        "start": "2014-05-01T16:00:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      }
    ]
  },
  "falk": {
    "weekdays": [
      {
        "name": "Lunch",
        "start": "2014-05-01T15:30:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      },
      {
        "name": "Dinner",
        "start": "2014-05-01T21:30:00.000Z",
        "end": "2014-05-01T23:30:00.000Z"
      }
    ],
    "friday": [
      {
        "name": "Lunch",
        "start": "2014-05-01T15:30:00.000Z",
        "end": "2014-05-01T18:00:00.000Z"
      }
    ],
    "saturday": [
      {
        "name": "Lunch",
        "start": "2014-05-01T15:00:00.000Z",
        "end": "2014-05-01T17:30:00.000Z"
      }
    ],
    "sunday": []
  }
}
```

**Request**

```
GET /hours/commons
```

**Response**
```javascript
{
  "name": "1920 Commons",
  "weekdays": [
    {
      "name": "Lunch",
      "start": "2014-05-01T15:00:00.000Z",
      "end": "2014-05-01T18:00:00.000Z"
    },
    {
      "name": "Dinner",
      "start": "2014-05-01T21:00:00.000Z",
      "end": "2014-05-02T01:00:00.000Z"
    }
  ],
  "friday": [
    {
      "name": "Lunch",
      "start": "2014-05-01T15:00:00.000Z",
      "end": "2014-05-01T18:00:00.000Z"
    },
    {
      "name": "Dinner",
      "start": "2014-05-01T21:00:00.000Z",
      "end": "2014-05-01T23:30:00.000Z"
    }
  ],
  "saturday": [
    {
      "name": "Brunch",
      "start": "2014-05-01T15:00:00.000Z",
      "end": "2014-05-01T19:00:00.000Z"
    },
    {
      "name": "Dinner",
      "start": "2014-05-01T21:00:00.000Z",
      "end": "2014-05-01T23:00:00.000Z"
    }
  ],
  "sunday": [
    {
      "name": "Brunch",
      "start": "2014-05-01T15:00:00.000Z",
      "end": "2014-05-01T19:00:00.000Z"
    },
    {
      "name": "Dinner",
      "start": "2014-05-01T21:00:00.000Z",
      "end": "2014-05-02T00:00:00.000Z"
    }
  ]
}
```

Open
----

**Request**

```
GET /open
```

**Response**

```javascript
{
  "commons": "closed",
  "hill": "closed",
  "kceh": "closed",
  "houston": "open",
  "mcclelland": "open",
  "falk": "closed"
}
```

**Request**

```
GET /open/commons
```

**Response**

```javascript
{
  "commons": "closed"
}
```

Scrape Menus
------------

**Request**

```
GET /scrape
```

**Response**

```javascript
{
  "date": "2014-05-02T03:58:04.551Z",
  "mcclelland": {
    "dinner": {
      "kettles": [
        "vegan chili (onion; garlic; peppers; zucchini; red beans; black beans; herbs and spices) - vegan  - made 
without gluten",
        "chicken noodle soup (chicken stock; noodles; mire poix; herbs; spices) - humane"
      ],
      "comfort": [
        "pasta night (made without gluten pasta; cheese tortellini; ; rustic marinara sauce; onion, garlic, wine, herbs 
and spices; ; ; classic alfredo sauce; cream, butter, parmesan cheese; ; baked ziti with sausage; ricotta cheese, 
parmesan cheese, mozzarella cheese, tomato sauce; ; green bean saute; oil, spices) - humane  - vegan"
      ]
    },
    "lunch": {
      "comfort": [
        "deli bar with artisan breads (house roasted herb beef; house roasted turkey; grilled vegetables; cured sliced 
meats; horseradish aioli; sun dried tomato aÃ¯oli) - humane  - vegetarian",
        "specialty sandwich (roast beef; horseradish aioli; cheddar cheese) - humane"
      ],
      "kettles": [
        "chicken noodle soup (chicken stock; noodles; mire poix; herbs; spices) - humane"
      ]
    },
    "breakfast": {
      "breakfast": [
        "hard cooked eggs (cage free eggs) - humane  - made without gluten",
        "breakfast potatoes (potatoes, onion, peppers, and spices) - vegetarian  - made without gluten",
        "omelet bar (cage free eggs; onion; pepper; cheese; spinach) - humane  - vegetarian",
        "ham & cheese frittata (cage free eggs; dairy) - humane",
        "turkey sausage - vegetarian"
      ],
      "breakfast kettle": [
        "grits (slow cooked hominy grains) - vegetarian"
      ]
    }
  },
  "commons": {
    "dinner": {
      "kettles": [
        "vegan chili (onion, peppers, jalapeno, diced tomatoes zucchini,  black, red beans, chili spice and finished 
with fresh cilantro) - vegan  - made without gluten",
        "senate bean (chicken stock; ham; sage ; butter) - humane",
        "beef barley (beef stock; mire poix; herbs spices) - vegetarian  - made without gluten"
      ],
      "deli": [
        "assorted house roasted, cured meats, and cheese (ham ; house roasted turkey; house roasted beef; tuna salad; 
house roasted vegetables; provolone; cheddar; swiss; american) - humane"
      ],
      "salad bar": [
        "salad bar (leafy greens; fresh vegetables; beans; cheeses; tofu; tuna; ham or chicken; house-made dressings)"
      ],
      "pizza": [
        "chef's selection of assorted house-made pizzas (house-made pizza dough; local  house-made new jersey tomato 
pizza sauce) - farm to fork  - humane"
      ],
      "grill": [
        "herb marinated chicken breast (fresh herbs, spices) - humane",
        "french fries",
        "vegan burger (soy proteins ; grains) - vegan",
        "grilled turkey hot dogs"
      ],
      "comfort": [
        "baked ziti (ricotta cheese; mozzarella cheese; marinara sauce) - vegetarian",
        "creamed spinach (cream; butter; flour) - vegetarian",
        "broccoli and cauliflower (steamed; seasonings) - vegan  - made without gluten",
        "garlic bread (butter; parmesan cheese; herbs) - vegetarian"
      ],
      "expo": [
        "pasta bar bolognese style (ground turkey; tofu; marinara; herbs) - humane  - vegan"
      ],
      "vegan": [
        "vegan pasta bolognese (vegan soy crumble; house made tomato sauce; herbs; garlic; oil) - vegan"
      ]
    }
  },
  "kceh": {
    "dinner": {
      "expo": [
        "carved turkey sandwiches (house roasted turkey; gravy; stuffing; assorted cheese; assorted breads and rolls)"
      ],
      "kettles": [
        "potato chowder (potatoes milk onions celery carrots) - vegetarian",
        "bean and beef soup (beans beef celery carrots onions collard greens) - made without gluten"
      ],
      "comfort": [
        "fried chicken",
        "smashed potatoes - vegetarian  - made without gluten",
        "chicken gravy - made without gluten",
        "assorted local vegetables - vegan  - made without gluten",
        "vegan pot pie (carrots celery onions peas filo crust) - vegan"
      ]
    },
    "breakfast": {
      "fruit plus": [
        "assorted fruit and yogurt - farm to fork  - vegetarian",
        "cereal (hot and cold cereal; milk skim 2% soy) - vegan"
      ],
      "baked": [
        "bagel bar (cream cheese butter margarine jelly and jams)",
        "assorted breakfast pastries"
      ],
      "comfort": [
        "breakfast sandwiches (egg cheese and assorted breakfast meat)"
      ]
    },
    "lunch": {
      "expo": [
        "french toast station (french toast; blueberries; strawberries; bacon; whip cream; maple syrup)"
      ],
      "kettles": [
        "potato chowder (potatoes milk onions celery carrots) - vegetarian",
        "bean and beef soup (beans beef celery carrots onions collard greens) - made without gluten"
      ],
      "comfort": [
        "pasta bar (pasta; alfredo sauce; pesto sauce; marinara sauce; bolognese sauce; roasted vegetables; broccoli; 
roast chicken) - vegetarian"
      ]
    }
  },
  "hill": {
    "breakfast": {
      "kettles": [
        "hard cooked eggs (locally sourced and cage free) - vegetarian  - made without gluten",
        "hot breakfast cereal (cream of wheat) - vegetarian"
      ],
      "hemispheres": [
        "hemispheres (local yogurts, bread and bagel bar, belgium waffles, assorted breakfast pastries, seasonal hand 
fruit, fresh cut melons and berries) - farm to fork  - vegetarian"
      ]
    },
    "lunch": {
      "kettles": [
        "mushroom barley (light mushroom broth with vegetables and pearl barley) - farm to fork  - vegetarian",
        "egg drop soup (chinese flavored chicken broth slow cooked and enhanced with fresh egg and soy) - made without 
gluten"
      ],
      "pizza": [
        "assorted chef's selection of fresh made pizza (hand formed house made pizza dough; house made jersey tomato 
pizza sauce; assorted toppings) - farm to fork  - vegetarian"
      ],
      "deli": [
        "made to order deli (assorted house roasted and cured deli meats and cheeses)"
      ],
      "flipped": [
        "corn dogs (turkey dogs corn meal battered)",
        "grilled ham and cheese (thin sliced honey smoked ham, swiss cheese on white bread)",
        "cheese quesadilla (flour tortilla grilled with mixed cheeses) - vegetarian",
        "french fries (fried in canola oil)",
        "veggie burger (soy protein, beans, vegetables and spices) - vegetarian"
      ],
      "expo": [
        "italian pasta salad (fresh cooked pasta, garden vegetable selection, sundried tomato vinaigrette) - 
vegetarian"
      ],
      "comfort": [
        "fresh garden vegetable selection (seasonal garden vegetables, simply prepared and lightly seasoned)",
        "peanut pork pad thai (slow braised pork shoulder; thai peanut soy ginger sauce)",
        "vegetable fried rice (soy ginger glaze; quick fried rice; mixed vegetables) - vegan",
        "asian rice noodles (light sesame glaze) - vegan"
      ],
      "vegan": [
        "fresh garden vegetables (seasonal garden vegetables, simply prepared and lightly seasoned)",
        "blackened tofu steaks (local organic tofu; house mixed cajun seasonings) - farm to fork  - vegan",
        "roasted potatoes (chili and cumin seasoned; slow oven baked) - vegan  - made without gluten"
      ]
    },
    "dinner": {
      "kettles": [
        "mushroom barley (light mushroom broth with vegetables and pearl barley) - farm to fork  - vegetarian",
        "egg drop soup (chinese flavored chicken broth slow cooked and enhanced with fresh egg and soy) - made without 
gluten"
      ],
      "pizza": [
        "assorted chef's selection of fresh made pizza (hand formed house made pizza dough; house made jersey tomato 
pizza sauce; assorted toppings) - farm to fork  - vegetarian"
      ],
      "deli": [
        "made to order deli (assorted house roasted and cured deli meats and cheeses)"
      ],
      "expo": [
        "tempeh vegetable stir fry (soy wheat protein with mixed vegetables in a soy ginger teriyaki sauce over rice) - 
farm to fork  - vegetarian"
      ],
      "flipped": [
        "french fries (fried in canola oil)",
        "italian sausage (fire roasted with peppers and onions)",
        "veggie burger (soy, vegetables, mixed grains and seasonings) - vegan",
        "turkey burgers (all natural)"
      ],
      "comfort": [
        "fresh garden vegetable selection (seasonal garden vegetables, simply prepared and lightly seasoned)",
        "herb baked chicken (fresh herbs; olive oil; oven baked) - made without gluten",
        "mashed potatoes (finished with cream and butter) - vegetarian  - made without gluten"
      ],
      "vegan": [
        "fresh garden vegetables (seasonal garden vegetables, simply prepared and lightly seasoned)",
        "eggplant parmesan (hand breaded and lightly fried) - vegan",
        "spaghetti (fresh pasta; jersey tomato sauce) - vegan"
      ]
    }
  }
}
```

**Request**

```
GET /scrape/commons
```

**Response**

```javascript
{
  "date": "2014-05-02T01:15:49.901Z",
  "dinner": {
    "kettles": [
      "vegan chili (onion, peppers, jalapeno, diced tomatoes zucchini,  black, red beans, chili spice and finished with 
fresh cilantro) - vegan  - made without gluten",
      "senate bean (chicken stock; ham; sage ; butter) - humane",
      "beef barley (beef stock; mire poix; herbs spices) - vegetarian  - made without gluten"
    ],
    "deli": [
      "assorted house roasted, cured meats, and cheese (ham ; house roasted turkey; house roasted beef; tuna salad; 
house roasted vegetables; provolone; cheddar; swiss; american) - humane"
    ],
    "salad bar": [
      "salad bar (leafy greens; fresh vegetables; beans; cheeses; tofu; tuna; ham or chicken; house-made dressings)"
    ],
    "pizza": [
      "chef's selection of assorted house-made pizzas (house-made pizza dough; local  house-made new jersey tomato 
pizza sauce) - farm to fork  - humane"
    ],
    "grill": [
      "herb marinated chicken breast (fresh herbs, spices) - humane",
      "french fries",
      "vegan burger (soy proteins ; grains) - vegan",
      "grilled turkey hot dogs"
    ],
    "comfort": [
      "baked ziti (ricotta cheese; mozzarella cheese; marinara sauce) - vegetarian",
      "creamed spinach (cream; butter; flour) - vegetarian",
      "broccoli and cauliflower (steamed; seasonings) - vegan  - made without gluten",
      "garlic bread (butter; parmesan cheese; herbs) - vegetarian"
    ],
    "expo": [
      "pasta bar bolognese style (ground turkey; tofu; marinara; herbs) - humane  - vegan"
    ],
    "vegan": [
      "vegan pasta bolognese (vegan soy crumble; house made tomato sauce; herbs; garlic; oil) - vegan"
    ]
  }
}
```
