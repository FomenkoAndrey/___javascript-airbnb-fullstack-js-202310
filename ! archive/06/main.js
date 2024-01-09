const person = {
  name: 'John',
  age: 30,
  country: 'Norway',
}

const functionality = {
  start: 0,
  end: 122,
  greet() {
    console.log('Hello')
  },
}

// person.__proto__ = functionality
Object.setPrototypeOf(person, functionality)

console.log(person)
// console.log(person.__proto__)
console.log(Object.getPrototypeOf(person))

person.greet()
