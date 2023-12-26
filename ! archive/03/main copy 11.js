/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-object-spread */
/* eslint-disable strict */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

// const apply = (x, fn) => fn(x)
// const double = x => x * 2
// const result1 = apply(3, double)
// const result2 = apply(5, x => x + 2)

// const result3 = apply(2, double)
// console.log(result1)
// console.log(result3)
// console.log(result2)

// function greet(name) {
//   return 'Hello, ' + name
// }

// function shout(text) {
//   return text.toUpperCase() + '!'
// }

// function applyFunction(func, argument) {
//   return func(argument)
// }

// console.log(applyFunction(greet, 'World')) // Hello, World
// console.log(applyFunction(shout, 'hello')) // HELLO!

function multiplyBy(factor) {
  return function (number) {
    return number * factor
  }
}

const multiplyByTwo = multiplyBy(2)
const multiplyByThree = multiplyBy(3)
const multiplyByFour = multiplyBy(4)

console.log(multiplyByTwo(4)) // 8
console.log(multiplyByThree(4)) // 12
console.log(multiplyByFour(4)) // 16
