const person = {
  name: 'Jhon',
  // #1 - prop
  age: 25,
  // #2 - methods
  // _age: 25,
  // getAge() {
  //   return this._age
  // },
  // setAge(value) {
  //   this._age = value
  // },
  // #3 accessor
  // _age: 25,
  // get age() {
  //   return this._age
  // },
  // set age(value) {
  //   this._age = value
  // },
}

// #1, #3 - props / accessors
console.log(person.age)
person.age = 36
console.log(person.age)

// #2 - methods
// console.log(person.getAge())
// person.setAge(36)
// console.log(person.getAge())
