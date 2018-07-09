const add = (a,b) => {
  // console.log(arguments);
  return a + b;
}

// console.log(add(10, 34, 50));

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());