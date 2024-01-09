function greet(msg, divider) {
  console.log(this)
  return `${msg}${divider} My name is ${this.name}`
}

const person = {
  name: 'John',
  greet,
}

const person2 = {
  name: 'Bob',
}

const person3 = {
  name: 'Mary',
}

console.log(person.greet('Hi', '!'))
console.dir(person.greet.call(person2, 'Hi', '!!!'))
console.dir(person.greet.apply(person3, [ 'Hi', '???' ]))

console.log('---------------')

// console.log(person2.greet())
// console.log(person3.greet())

// console.log(window.greet())
// console.log(greet())
console.log(greet.call(person, 'Hi', '!!!'))
console.log(greet.call(person2, 'Hi', '!!!'))
console.log(greet.apply(person3, [ 'Hi', '???' ]))

const greetJohn = greet.bind(person)
console.log(greetJohn('Hi', '!'))

const greetMary = greet.bind(person3)
console.log(greetMary('Hi', '!'))
// console.log(greetMary.call(person2, 'Hi', '????'))

const greetBobWithMessage = greet.bind(person2, 'Hi', '!')
console.log(greetBobWithMessage())

// function aaa1() {}
// window.aaa1()
// aaa1()

// function aaa2() {}
// function aaa3() {}

// var aaaaaaaa1 = 1
// var aaaaaaaa2 = 2
// var aaaaaaaa3 = 3
