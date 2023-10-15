// Question - Given a number x , write a function to determine whether the number is a prime number or not??

// Input -> x = 13
// Output -> true

// Input -> x =54
// Output -> false

const isPrime = num => {
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for (let i = 2; i <= num - 1; i++) {
      if (num % i === 0) {
        // We found a number in range [2, x-1] which divides x hence x is non-prime.
        return `${num} is not a prime number`;
      }
    }
    /* 
    The loop completed but we didn't return false value, that means no number in range [2, x-1] can divide x hence x is prime.
    */
    return `${num} is a prime number`;
  }
};

const isPrime1 = num => {
  if (num === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (num > 1) {
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return `${num} is not a prime number`;
      }
    }
    return `${num} is a prime number`;
  }
};

console.log(isPrime(11));
console.log(isPrime1(49));
