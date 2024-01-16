// setTimeout(function () {
//   console.log('Виконано після затримки');
// }, 3000)

// const timeoutId = setTimeout(() => {
//   console.log('Виконано після затримки')
// }, 3000)
// console.log(timeoutId)
// clearTimeout(timeoutId) // скасування виконання

// let i = 0
// setInterval(() => {
//   console.log('Регулярне виконання', ++i)
// }, 1000)

// const intervalId = setInterval(() => {
//   console.log('Регулярне виконання')
// }, 1000)
// console.log(intervalId)
// clearInterval(intervalId) // зупинка регулярного виконання

let i = 0

const intervalId = setInterval(() => {
  console.log('Регулярне виконання', ++i)
}, 1000)

console.log('🚀 ~ intervalId ~ intervalId:', intervalId)

setTimeout(() => {
  clearInterval(intervalId)
  console.log('Інтервал знято')
}, 10000)
