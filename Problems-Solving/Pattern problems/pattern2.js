const pattern = nums => {
  for (let i = 1; i < nums; i++) {
    let str = "";
    for (let col = 1; col <= i; col++) {
      str = str + "*";
    }
    console.log(str);
  }
};

pattern(4);
