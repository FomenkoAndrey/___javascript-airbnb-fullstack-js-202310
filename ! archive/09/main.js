const items = document.querySelectorAll('li')
let pointer = null

console.log('🚀 ~ items:', items)

const handler = function (e) {
  // console.log(e.target.innerText)
  console.log(this.innerText)
  this.style.color = 'red'
  this.style.fontWeight = 'bold'

  if (pointer) {
    pointer.style.color = ''
    pointer.style.fontWeight = ''
  }

  pointer = this
}
items.forEach(item => {
  console.log(item.innerText)
  item.addEventListener('click', handler)
})
