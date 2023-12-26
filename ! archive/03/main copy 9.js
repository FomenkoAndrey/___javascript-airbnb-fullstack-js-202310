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

function getUserData(callback) {
  console.log('Робимо запит до сервера...')

  setTimeout(function () {
    // Емуляція отримання даних користувача
    const userData = {
      name: 'John Doe',
      age: 30,
    }

    console.log('Дані користувача отримано')

    callback(userData) // Передаємо дані користувача до callback-функції
  }, 3000) // Емуляція затримки запиту
}

function displayUserData(userData) {
  console.log('Дані користувача:', userData)
}

// Виклик функції getUserData, передаючи displayUserData як callback
getUserData(displayUserData)
