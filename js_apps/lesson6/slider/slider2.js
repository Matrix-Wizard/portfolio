// 'use strict'

// let index = 0

// let sliderLeftArrow = document.querySelector('.slider-leftArrow')
// let sliderRightArrow = document.querySelector('.slider-rightArrow')
// let sliderItems = document.querySelectorAll('.slider-item')

// sliderLeftArrow.addEventListener('click', function() {
//   deleteAnimationClass()
//   if (index === 0) {
//     index = sliderItems.length
//   }
//   index--
//   addAnimationClass()
// })
// sliderRightArrow.addEventListener('click', function () {
//   deleteAnimationClass()
//   if (index === sliderItems.length - 1) {
//     index = 0
//   } else {
//     index++
//   }
//   addAnimationClass()
// })

// function addAnimationClass() {
//   sliderItems[index].classList.add('animated', 'fadeIn')
// }
// function deleteAnimationClass() {
//   sliderItems[index].classList.remove('animated', 'fadeIn')
// }