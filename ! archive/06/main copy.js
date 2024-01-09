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

const person = Object.create(Person).constructor('Jhon', 35, 'male')

console.log(person)
person.greet()
