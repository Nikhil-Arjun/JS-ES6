/*
let num = 5;
// logic for printing the pattern

// write a loop to repear a task for n rows
for (let row = 1; row <= num; row++) {
  // task
  // the tasl is to repeat a task for "*" n times
  let str = "";
  for (let col = 1; col <= num; col++) {
    str = str + "*";
  }
  console.log(str);
}
*/

const pattern = num => {
  // write a loop to repear a task for n rows
  for (let row = 1; row <= num; row++) {
    // task
    // the tasl is to repeat a task for "*" n times
    let str = "";
    for (let col = 1; col <= num; col++) {
      str = str + "*";
    }
    console.log(str);
  }
};

pattern(3);
