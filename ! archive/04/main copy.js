/* eslint-disable no-loop-func */
/* eslint-disable no-shadow */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable prefer-object-spread */
/* eslint-disable strict */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable dot-notation */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */

function makeArmy() {
  const shooters = [] // пустой массив

  for (let i = 0; i < 10; i++) {
    // shooter - это функция "стрелок", которая выводит свой номер i от 0 до 9
    const shooter = function () {
      console.log(i)
    }

    shooters.push(shooter) // добавляем в массив функцию
    console.log(shooters) // выводим массив функций в консоль
  }

  return shooters
}

var army = makeArmy() // получаем результа из функции makeArmy() - это массив функций "стрелок"

army[0]()
army[5]() // ? 5
army[7]() // ? 7
army[9]() // ? 9
