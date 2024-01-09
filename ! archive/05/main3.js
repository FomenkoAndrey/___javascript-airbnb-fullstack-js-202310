/* eslint-disable no-else-return */
const person = {
  name: 'Jhon',
  // #1 - prop
  // age: 25,
  // #3 accessor
  _age: 25,
  get age() {
    return this._age
  },
  set age(v) {
    this._age = v > 122 ? 122 : v < 0 ? 0 : v
  },
}

console.log(person.age)
person.age = 36
console.log(person.age)

person.age = 12336
console.log(person.age)

person.age = -12336
console.log(person.age)

// function checkAndFixAge(age) {
//   if (age > 122) {
//     return 122
//   }

//   if (age < 0) {
//     return 0
//   }

//   return age
// }
