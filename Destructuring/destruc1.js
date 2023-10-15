"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },
};

// const arr = [2, 3, 4];
// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// To skip next element form the array add extra colon in destructuring
let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// Switching variable [[a,b] = [b,a]]
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 5, [4, 6]];
// const [i, , j] = nested;
const [i, l, [j, k]] = nested;
console.log(nested);
console.log(i, j, k, l);

// Default values
const [p, q, r = 1] = [8, 9];
console.log(p, q, r);

const calculate = (a, b) => {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divison = a / b;

  return [add, subtract, multiply, divison];
};

const [add, , multiply] = calculate(11, 10);

console.log(`Sum : ${add}`);
// console.log(`Subtraction : ${subtract}`);
console.log(`Multiplication : ${multiply}`);
// console.log(`Divison: ${Math.floor(divison)}`);
