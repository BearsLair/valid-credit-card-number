function validate(n) {
  const numArray = n.split("");

  for (let i = numArray.length - 2; i >= 0; i - 2) {
    numArray[i] = numArray * 2;
    if (numArray[i] > 9) {
      let greaterThanNine = numArray[i]
        .split("")
        .reduce((acc, curr) => acc + curr);
      numArray[i] = greaterThanNine;
    }
    const sum = numArray.reduce((acc, curr) => acc + curr);

    if (sum % 10 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(validate(123));
console.log(validate(1));
console.log(validate(2121));
console.log(validate(1230));
