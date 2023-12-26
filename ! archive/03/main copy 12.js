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

// ! 2 args
// function add(a, b) {
//   return a + b
// }

// console.log(add(1, 2))

// function curryAdd(a) {
//   return function (b) {
//     return a + b
//   }
// }

// const addFive = curryAdd(5) // Функція, що додає 5
// const addTwo = curryAdd(2) // Функція, що додає 5
// console.log(addTwo(10)) // Виведе 12
// console.log(addFive(10)) // Виведе 15

// ! 3 args

// function addThree(a, b, c) {
//   return a + b + c
// }

// console.log(addThree(1, 2, 3))

function curryAddThree(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}

const addFive = curryAddThree(5) // Повертає функцію, що додає 5 до двох наступних аргументів
const addFiveAndTwo = addFive(2) // Повертає функцію, що додає 7 (5+2) до наступного аргументу
console.log(addFiveAndTwo(3)) // Виведе 10 (5+2+3)
