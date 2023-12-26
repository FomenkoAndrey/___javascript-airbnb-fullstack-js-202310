/* eslint-disable prefer-object-spread */
/* eslint-disable strict */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

outerLoop: // Мітка для зовнішнього циклу
for (let i = 0; i < 5; i++) {
  console.log('Зовнішній цикл: i = ' + i)
  for (let j = 0; j < 5; j++) {
    if (j === 2) {
      console.log('Внутрішній цикл: j = ' + j + ', переривання зовнішнього циклу')
      break outerLoop // Перериваємо зовнішній цикл
    }
    console.log('Внутрішній цикл: j = ' + j)
  }
}
