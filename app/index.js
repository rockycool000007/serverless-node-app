// app/index.js

// dependencies
const calc = require('./calc')

// logic
const numbersToAdd = [ 3, 5, 10, 2 ]
const result = calc.sum(numbersToAdd)
console.log(`Result : ${result}`)
