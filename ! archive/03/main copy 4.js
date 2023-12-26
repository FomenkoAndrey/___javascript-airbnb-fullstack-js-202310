/* eslint-disable prefer-object-spread */
/* eslint-disable strict */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break // Припиняє виконання циклу, коли i дорівнює 5
  }
  if (i % 2 === 0) {
    // Якщо i є парним числом
    continue // Пропускає поточну ітерацію і переходить до наступної
  }
  console.log(i) // Виведе лише непарні числа до 5 (1, 3)
}
