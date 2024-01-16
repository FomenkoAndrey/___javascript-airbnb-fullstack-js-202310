// Припустимо, користувач обрав темну тему
const userTheme = 'dark'

// Зберігаємо це налаштування у localStorage
localStorage.setItem('theme', userTheme)

// Перевіряємо, чи є збережена тема у localStorage
const savedTheme = localStorage.getItem('theme') || 'light'

console.log(savedTheme)
// Якщо є збережена тема, встановлюємо її
// if (savedTheme) {
//   setTheme(savedTheme) // setTheme - функція, яка застосовує тему до сайту
// }

// Якщо користувач вирішив скинути налаштування теми
localStorage.removeItem('theme')
