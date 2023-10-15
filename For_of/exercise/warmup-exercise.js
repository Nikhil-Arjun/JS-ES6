/*
    1. Create a variable called "numbers" that points to this array:
        [10, 20, 40, 50, 20, 100]

    2. Use a for-of loop to print out each number squared
*/

const numbers = [10, 20, 30, 40, 20, 100];

for (const number of numbers) {
  const result = number ** number;
  console.log(result);
}
