"use strict";

const prompt = require("prompt-sync")();

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

console.log(...newArray);

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

  orderPasta: (ing1, ing2, ing3) => {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
};

// Adding another element in present array(i.e. mainMenu)
// But it will give totally new array
const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays using spread operator
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables : arrays, strings , maps, sets, But not objects
const str = "Nikhil";
const letters = [...str, " ", "A."];
console.log(letters);
console.log(...str);

// Real-world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1 ?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

console.log(ingredients);
// By Calling each elements
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// By calling spread operator
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurnat = {
  foundingYear: 1998,
  ...restaurant,
  founder: "Shetty Brothers",
};

console.log(newRestaurnat);

// Objects Shallow Copy
const restaurantsCopy = { ...restaurant };
restaurantsCopy.name = "Risto Roma";

console.log(restaurantsCopy.name);
console.log(restaurant.name);
