'use strict'
let renderer = {
  sumAnswer: 0,


  renderQA() {
    let randomNum = Math.floor(Math.random() * questions.length)
    console.log(questions[randomNum].question);
    console.log(questions[randomNum].answers);
    
    let qqq = '';
    for (let key in questions[randomNum].answers) {
      qqq += `${key}: ${questions[randomNum].answers[key]}\n`
    }

    let playerAnswer = prompt(`${questions[randomNum].question}\n${qqq}`)



    if (playerAnswer == questions[randomNum].rightAnswer) {
      this.sumAnswer++
      alert(`Это правильный ответ!\nВсего баллов: ${this.sumAnswer}\nОсталось вопросов: ${questions.length - 1}`)

    } else {
      alert(`Ответ не правельный! Правильный ответ: ${questions[randomNum].rightAnswer}\nВсего баллов: ${this.sumAnswer}\nОсталось вопросов: ${questions.length - 1}`)

    }

    questions.splice(randomNum, 1)
  },

  gameEnd() {
    alert('Игра окончена.\nВсего баллов набрано: ' + this.sumAnswer);
  }  
}