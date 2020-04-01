const container = document.querySelector('.container')

// Добавляем вопрос на страницу
for (let i = 0; i < questions.length; i++) {
  let qu = `
    <div class="qu">
      <h3 class="qu_num">Вопрос #<span>${i+1}</span></h3>
      <p class="qu_text">${questions[i].question}</p>
      <div class="qu_answers qu_answers_extra" data-id = ${i}>
        ${createAnswer(i)}
      </div>
      <p class="qu_alert_text"></p>
    </div>
    <!-- qu end -->
  `
  container.insertAdjacentHTML('beforeend', qu)
}
function createAnswer(i) {
  let htmlCode = ''
  
  for (let elem in questions[i].answers) {
    let an = `<div>${elem}: ${questions[i].answers[elem]}</div>`
    htmlCode += an
  }

  return htmlCode
}


// Счёт
let questionQuantity = questions.length
let questionLeft = questionQuantity
let currentScore = 0
let questionPassed = 0

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
  if (textAlert.innerText === '') {
    questionLeft--
    scoreSpan[0].innerText = questionLeft
  }

  if (main.classList[0] === 'qu_answers') {
    // Проверяем правильный или нет ответ
    let id = main.dataset.id
    if (event.target.innerText[0] === questions[id].rightAnswer) {
      // console.log('Правильно');
      event.target.style.backgroundColor = "#33CC66";
      main.classList.remove("qu_answers_extra")
      // console.dir(event.target);
      // let textAlert = main.parentElement.querySelector('.qu_alert_text')
      textAlert.innerText = 'Это правильный ответ!'

      main.removeEventListener('click', foo)
      currentScore++
      scoreSpan[2].innerText = currentScore
      questionPassed++
      finishPrase()
    } else {
      event.target.style.backgroundColor = "#FF6666";
      // main.classList.remove("qu_answers_extra")

      // let textAlert = main.parentElement.querySelector('.qu_alert_text')
      textAlert.innerText = 'Ответ не верен!'
      currentScore--
      scoreSpan[2].innerText = currentScore
    }
  }
}


function finishPrase() {
  if (questionPassed === 5) {
    let q = document.querySelector('.wrap_modal')
    q.style.opacity = 1
    q.style.visibility = 'visible'
  }
}

let closeBtn = document.querySelector('.close')
closeBtn.addEventListener('click', function () {
  let q = document.querySelector('.wrap_modal')
  q.style.opacity = 0
  q.style.visibility = 'hidden'
})


