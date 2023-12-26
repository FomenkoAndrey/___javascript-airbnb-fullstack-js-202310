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

var sum = function () {
  var result = 0

  console.log(arguments)

  for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index]
    console.log(element)
    result += element
  }

  return result
}

// var sum = (...a) => a.reduce((p, c) => p + c, 0)

console.log('sum:', sum(1, 2, 3, 4, 5))
