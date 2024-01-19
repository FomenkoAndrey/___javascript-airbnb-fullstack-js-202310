/* eslint-disable prefer-arrow-callback */
const slides = document.querySelectorAll('.slide')

let currentSlide = 0

const nextSlide = function () {
  slides[currentSlide].className = 'slide'
  currentSlide = (currentSlide + 1) % slides.length
  slides[currentSlide].className = 'slide active'
}

setInterval(nextSlide, 3000)
