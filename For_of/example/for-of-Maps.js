const myMap = new Map();

myMap.set("name", "Nikhil");
myMap.set("age", 20);
myMap.set("friend", "Mr.Monkey");

console.log(myMap);

for (const item of myMap.values()) {
  console.log(item);
}
