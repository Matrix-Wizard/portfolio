'use strict'

document.head.insertAdjacentHTML('afterbegin', '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">')

let slider = document.querySelector('.slider')

// Создаём иконку загрузки
let loadIcon = document.createElement('i')
loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin')
slider.insertAdjacentElement('afterbegin', loadIcon)

// Создаем левую стрелку
let leftArrow = document.createElement('i');
leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
slider.insertAdjacentElement("beforeend", leftArrow);

// Создаем правую стрелку
let rightArrow = document.createElement('i');
rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
slider.insertAdjacentElement("beforeend", rightArrow);

// Ждем когда весь контент целиком загрузится
window.addEventListener('load', function() {
  loadIcon.style.display = 'none'

  leftArrow.addEventListener('click', function () {
    images.changeImageLeft()
  })
  rightArrow.addEventListener('click', function () {
    images.changeImageRight()
  })

  images.init()
})

// Задаём размер слайдера
function setSizes(slider) {
  let width = slider.getAttribute('data-width')
  let height = slider.getAttribute('data-height')

  if (width !== null && width !== "") {
    slider.style.width = width;
  }
  if (height !== null && height !== "") {
    slider.style.height = height;
  }

  // Можно было и без if, оставить так
  // slider.style.width = width
  // slider.style.height = height
}
setSizes(slider)

// Управление картинками
let images = {
  currentIdx: 0,

  slides: [],

  init() {
    this.slides = document.querySelectorAll('.slider-item')
    this.showImageWithCurrentIdx()
  },

  showImageWithCurrentIdx() {
    this.slides[this.currentIdx].classList.remove('hidden-slide')
  },

  addClass() {
    this.slides[this.currentIdx].classList.add('hidden-slide')
  },

  changeImageLeft() {
    this.addClass()
    if (this.currentIdx == 0) {
      this.currentIdx = this.slides.length - 1
    } else {
      this.currentIdx--
    }
    this.showImageWithCurrentIdx()
  },

  changeImageRight() {
    this.addClass()
    if (this.currentIdx == this.slides.length - 1) {
      this.currentIdx = 0
    } else {
      this.currentIdx++
    }
    this.showImageWithCurrentIdx()
  },
}

