/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */

// Person
class Person {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
  }

  greet() {
    return `Hello, my name is ${this.name}`
  }
}

const person = new Person('Jhon', 35, 'male')

console.log(person)
console.log(person.greet())

// Developer

class Developer extends Person {
  constructor(name, age, sex, skills) {
    super(name, age, sex)
    this.skills = skills || []
  }

  greet() {
    const res = super.greet()
    return `${res}! You are real web developer!`
  }

  develop() {
    console.log('developing...')
  }
}

const developer = new Developer('Yuliia', 18, 'female', [ 'html', 'css', 'js' ])
console.log(developer)

console.log(developer.greet())
