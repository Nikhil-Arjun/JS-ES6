const pattern = n => {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }

    let stars = row;
    for (let col = 1; col <= stars; col++) {
      str += "*";
    }
    console.log(str);
  }
};

pattern(7);
