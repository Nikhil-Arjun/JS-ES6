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

  orderPasta: (ing1, ing2, ing3) => {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    return `Order received: ${mainIngredient} is used for topping and ${otherIngredient} will be customized as per the order specification.`;
  },
};

// 1. Destructuring
// Spread operator -> because its on right hand side of assignment operator (=)
const arr = [1, 2, ...[3, 4]];

// Rest operator -> because its on left hand side of assignment operator (=)
const [a, b, ...arr1] = [1, 2, 3, 4, 5];
console.log(a, b);
console.log(...arr1);

const [pizza, , Risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
// Rest element must be last element
console.log(pizza, Risotto, otherFood);

// objects
const { sat, ...Weekdays } = restaurant.openingHours;
console.log(Weekdays);

// 2.Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

const pizzaConfirm = restaurant.orderPizza(
  "Mushrooms",
  "onion",
  "olivers",
  "spinach"
);
console.log(pizzaConfirm);

// Spread and rest operator syntax looks same, but its work opposite of each other, depending where they use.
