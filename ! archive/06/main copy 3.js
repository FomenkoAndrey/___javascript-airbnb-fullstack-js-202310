const Person = function (name, age, sex) {
  const _show = () => console.log(`${this.name}, ${this.age}, ${this.sex}`)
  this.name = name
  this.age = age
  this.sex = sex
  this.print = function () {
    _show()
  }
}

Person.prototype.start = 0
Person.prototype.end = 122
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

console.dir(Person)
console.log(Person.prototype)

const person = new Person('Jhon', 35, 'male')

console.log(person)
person.greet()
person.print()

const Developer = function (name, age, sex, skills) {
  Person.apply(this, arguments)
  this.skills = skills || []
}

Developer.prototype = Object.create(Person.prototype)
Developer.prototype.constructor = Developer

Developer.prototype.develop = function () {
  console.log('developing...')
}

const developer = new Developer('Andrii', 35, 'male', [ 'html', 'css', 'js' ])
console.log('🚀 ~ developer:', developer)

developer.greet()
developer.develop()
