const rest1 = {
  name: "Capri",
  numGuests: 0,
};

const rest2 = {
  name: "La Pizza",
  owner: "Rossi",
};

// OR assignment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR Logical assignment operator
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

//nullish assignment operator(null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<Anonymous>";
// rest2.owner = rest2.owner && "<Anonymous>";

rest1.owner &&= "Anonymous";
rest2.owner &&= "Anonymous";

console.log(rest1);
console.log(rest2);
