
// The code below modifies margin in "<progress> tag" in block "Our expertise"
let progressValue = document.querySelectorAll('.progress__value')

for (let i = 0; i < progressValue.length; i++) {
  let sum = 94 - progressValue[i].dataset.value
  progressValue[i].style.marginRight = sum + '%'
}

const burger = document.querySelector('.menu__burger')
const menuUl = document.querySelector('.menu__list')
const wrapper = document.querySelector('.wrapper')
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active')
  menuUl.classList.toggle('menu__list--hide')
  wrapper.classList.toggle('wrapper--hide')
  document.body.classList.toggle('overflow')
})