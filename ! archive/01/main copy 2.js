/* eslint-disable no-floating-decimal */
/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-loss-of-precision */
/* eslint-disable object-shorthand */
/* eslint-disable func-names */
/* eslint-disable no-new-wrappers */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
/* eslint-disable no-constant-condition */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

var num = 50
console.log('🚀 ~ num:', num.toFixed(5))
console.log('🚀 ~ num:', 10 .toFixed(5))
console.log('🚀 ~ num:', 10..toFixed(5))
console.log('🚀 ~ num:', 10.0.toFixed(5))

// var Num = new Number('123')
// console.log('🚀 ~ Num:', Num.toFixed(5))

//  Function

function myFunc() {
  console.log('Say Hi')
}

myFunc()

// Object

var person = {
  // name: 'John', // prop
  age: 25, // prop
  hi: 'Hi', // prop
  sayHi: myFunc, // ! method
  skills: [ 'html', 'js' ], // prop
  toFixed: function () { // ! method
    console.log('123.00000')
  },
}
// console.log('🚀 ~ person.name:', person.name)

// console.log('🚀 ~ person.sayHi:', person.sayHi)

// console.log('🚀 ~ person:', person)

// person.sayHi()
// person.toFixed()
