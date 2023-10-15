// Given the side length of a triangle in the form of 3 integers.Check if the given triangle is equilateral or scaling or isosceles triangle.

// Input -> a = 7, b = 7, c = 7
// Output -> Equilateral

// Input -> a = 8, b = 12, c = 5
// Output -> scaleing

// Input -> a = 8, b = 14, c= 8;
// Output -> isosceles

// Note -> Given input will always form a triangle.

let a = 7;
let b = 7;
let c = 7;

if (a == b && b == c && a == c) {
  console.log("Equilateral triangle");
} else if (a != b && b != c && a != c) {
  console.log("Scaling triangle");
} else {
  console.log("isosceles triangle");
}
