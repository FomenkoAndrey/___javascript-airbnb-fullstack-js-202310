/* eslint-disable prefer-destructuring */
const list = document.querySelector('ul')
let pointer = null

console.log(list)

const handler = function (e) {
  const target = e.target

  if (target.nodeName === 'LI') {
    target.style.color = 'red'
    target.style.fontWeight = 'bold'

    if (pointer) {
      pointer.style.color = ''
      pointer.style.fontWeight = ''
    }

    pointer = target
  }
}
list.addEventListener('click', handler)
