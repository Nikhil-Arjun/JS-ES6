// let num = 34;

// if (num % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// using function

const isEvenOrOdd = num => {
  if (num % 2 == 0) {
    return "Even Number";
  } else {
    return "Odd Number";
  }
};

for (let i = 1; i <= 50; i++) {
  console.log(i, "is", isEvenOrOdd(i));
}
