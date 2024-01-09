const Person = {
  constructor(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    return this
  },
  greet() {
    console.log(`Hello, my name is ${this.name}`)
  },
}

// const person = Object.create(Person).constructor('Jhon', 35, 'male')

const Developer = Object.create(Person)

Developer.constructor = function (name, age, sex, skills) {
  Person.constructor.apply(this, arguments)
  this.skills = skills || []
  return this
}

Developer.develop = function () {
  console.log('developing...')
}

const developer = Object.create(Developer).constructor('Andrii', 35, 'male', [ 'html', 'css', 'js' ])
const developer2 = Object.create(Developer).constructor('Andrii', 35, 'male')
console.log('🚀 ~ developer2:', developer2)
console.log('🚀 ~ developer:', developer)

developer.greet()
developer.develop()
