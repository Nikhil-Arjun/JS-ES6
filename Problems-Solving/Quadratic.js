// Given 3 nums a, b, c which represent coefficient of a quadratic equation
// ax^2 + bx + c
// Find the roots of the quadratic equation(assime real roots)
// b^2 > 4ac

const solve = (a, b, c) => {
  let sqrtValue = Math.sqrt(b * b - 4 * a * c);
  let root1 = (-b + sqrtValue) / (2 * a);
  let root2 = (-b - sqrtValue) / (2 * a);
  console.log(root1, root2);
};

solve(2, 5, 3);
