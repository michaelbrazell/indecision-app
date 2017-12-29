// Create a new multiplier app using arrow functions and map
// numbers = Array of numbers
// multiplyBy = Add a multiplier
// method called multiply that returns a new array of the multiplied numbers

const multiplier = {
  numbers: [5, 10, 15, 45],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map( (number) => number * this.multiplyBy )
  }
}

console.log(multiplier.multiply());