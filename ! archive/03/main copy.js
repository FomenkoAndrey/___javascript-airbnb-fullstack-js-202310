/* eslint-disable prefer-object-spread */
/* eslint-disable strict */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

var age = 5
var msg = age < 18 ? 'дитина' : age < 45 ? 'молодь' : 'старі'
console.log(msg)

// msg = age < 18
//   ? 'дитина'
//   : age < 45
//     ? 'молодь'
//     : 'старі'

// if (age < 18) {
//   msg = 'дитина'
// } else if (age < 45) {
//   msg = 'молодь'
// } else {
//   msg = 'старі'
// }
