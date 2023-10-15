const pattern = n => {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let i = 1; i <= spaces; i++) {
      str = str + " ";
    }
    let counter = 1;
    for (let j = 1; j <= row; j++) {
      str = str + counter;
      counter++;
    }
  }
};

pattern(4);
