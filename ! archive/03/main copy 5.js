/* eslint-disable prefer-object-spread */
/* eslint-disable strict */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

let i = 0
while (i < 10) {
  if (i === 5) {
    break // Припиняє цикл, коли i дорівнює 5
  }
  console.log(i) // Виведе числа від 0 до 4
  i++ // Не забуваємо збільшити лічильник
}
