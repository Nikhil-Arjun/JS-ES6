const mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);

console.log(mySet);
mySet.add("10");

mySet.delete(20);
console.log(mySet);

console.log(mySet.has(30));

console.log(mySet.size);

console.log(mySet.has(40));
