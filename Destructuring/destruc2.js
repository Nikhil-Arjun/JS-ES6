// Destructuring Objects
"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: ({ starterIndex, mainIndex, time, address }) => {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});
// to destructure objects we use curly brackets {} and variables name
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// assigning different names to the objects name
// useful to access third party data
const {
  name: restaurantName,
  categories: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// to set default values to objects
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;

const obj = { a: 23, b: 7, c: 14 };
// to overwrite values a, b it will give "unexpected token error" i.e we cover a and b values in a brackets
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: Opening, close: closing },
} = openingHours;
console.log(Opening, closing);
