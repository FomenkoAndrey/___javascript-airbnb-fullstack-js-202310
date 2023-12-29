/* eslint-disable no-shadow */
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

// ! Closuse
// var counter = (function () {
//   var count = 0
//   return function (num) {
//     if (num !== undefined) {
//       count = num
//     }
//     return count++
//   }
// }())

// ! function, object
var counter = function (num) {
  counter.count = num !== undefined ? num : counter.count
  return counter.count++
}

counter.count = 0

console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(100))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(99990))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter(0))
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())
