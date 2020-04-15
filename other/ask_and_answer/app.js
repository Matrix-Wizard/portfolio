"use strict";

// Добавляет вопросы на страницу
let generateQu = {
  container: document.querySelector('.container'),
  
  init() {
    for (let i = 0; i < questions.length; i++) {
      let qu = `
    <div class="qu">
      <h3 class="qu_num">Вопрос #<span>${i+1}</span></h3>
      <p class="qu_text">${questions[i].question}</p>
      <div class="qu_answers qu_answers_extra" data-id = ${i}>
        ${this.createAnswer(i)}
      </div>
      <p class="qu_alert_text">ответ</p>
    </div>
    <!-- qu end -->
  `
      this.container.insertAdjacentHTML('beforeend', qu)
    }
  },

  createAnswer(i) {
    let htmlCode = ''

    for (let elem in questions[i].answers) {
      let an = `<div>${elem}: ${questions[i].answers[elem]}</div>`
      htmlCode += an
    }

    return htmlCode
  },

}

generateQu.init()






// Счёт
let modalSpan = document.querySelector('.modal > span')

let questionQuantity = questions.length
let questionLeft = 0
let currentScore = 0
let questionPassed = 0
let index = 1

let score = document.querySelector('.score')
let scoreSpan = score.querySelectorAll('span')
scoreSpan[1].innerText = questionQuantity
scoreSpan[0].innerText = questionLeft
scoreSpan[3].innerText = questionQuantity



// Событие на клик по ответу
document.addEventListener('DOMContentLoaded', function () {

  let qus = document.querySelectorAll('.qu_answers')
  qus.forEach(function (qu) {
    qu.addEventListener('click', foo)
  })

}, false);

function foo(event) {
  let main = event.srcElement.parentElement
  let textAlert = main.parentElement.querySelector('.qu_alert_text')
  if (textAlert.innerText === 'ответ') {
    questionLeft++
    scoreSpan[0].innerText = questionLeft
  }

  if (main.classList[0] === 'qu_answers') {
    // Проверяем правильный или нет ответ
    let id = main.dataset.id
    if (event.target.innerText[0] === questions[id].rightAnswer) {
      event.target.style.backgroundColor = "#33CC66";
      main.classList.remove("qu_answers_extra")

      // Добавляем текст
      textAlert.innerText = 'Это правильный ответ!'
      textAlert.classList.add('qu_alert_text_extra')

      main.removeEventListener('click', foo)
      currentScore += index
      scoreSpan[2].innerText = currentScore
      questionPassed++
      finishPrase()
      index = 1
    } else {
      textAlert.innerText = 'Ответ не верен! Попробуйте снова.'
      textAlert.classList.add('qu_alert_text_extra')
      index = 0
      event.target.style.backgroundColor = "#FF6666";
    }
  }
}

function finishPrase() {
  if (questionPassed === questionQuantity) {
    let q = document.querySelector('.wrap_modal')
    modalSpan.innerText = currentScore
    q.style.opacity = 1
    q.style.visibility = 'visible'
    soundClick()
  }
}




// Кнопка закрыть модальное окно (крестик)
let closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', function () {
  let q = document.querySelector('.wrap_modal')
  q.style.opacity = 0
  q.style.visibility = 'hidden'
})


// Добавляем проигрывание музыки
// function soundClick() {
//   let audio = new Audio();
//   audio.src = 'victory.mp3';
//   audio.autoplay = true;
// }
function soundClick() {
  let audio = document.querySelector('audio');
  audio.play()
}

// +++++ Доработать
// Баллы прибавлялись более корректно
// Вопросы в разном порядке на странице (и ответы тоже)
// Кнопки ответов выпуклые
// Звуковой сигнал при правильном ответе и не правильном
// Звук чуть потише сделать и с нарастанием





