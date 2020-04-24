let menu__btn = document.querySelector('.menu__btn')
let menu__list = document.querySelector('.menu__list')

let menuIsOpen = false

menu__btn.addEventListener('click', menuOpen)

function menuOpen() {
  if (!menuIsOpen) {
    menu__btn.classList.add('menu__btn-close')
    // menu__list.classList.remove('menu__list--hide')
    menu__list.classList.add('test2')
    menuIsOpen = true
  } else {
    menu__btn.classList.remove('menu__btn-close')
    // menu__list.classList.add('menu__list--hide')
    menu__list.classList.remove('test2')
    menuIsOpen = false
  }
}




