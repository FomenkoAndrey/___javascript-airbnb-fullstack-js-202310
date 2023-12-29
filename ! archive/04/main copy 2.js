/* eslint-disable no-loop-func */
/* eslint-disable prefer-const */
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

// function pow(x, n) {
//   let res = x
//   for (let i = 1; i < n; i++) {
//     res *= x
//   }
//   return res
// }

function pow(x, n) {
  if (n !== 1) {
    return (x *= pow(x, n - 1))
  }
  return x
}

console.log(pow(2, 2)) // 4
console.log(pow(2, 3))// 8
