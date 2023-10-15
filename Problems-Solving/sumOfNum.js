console.log("Printing sum of all the numbers from 1 to 10");
let ans = 0;

// using for loop
// for (let i = 1; i <= 10; i++) {
//   ans = ans + i;
// }

// console.log(ans);

// using while loop
let i = 1;

while (i <= 10) {
  ans += i;
  i++;
}

console.log(ans);
