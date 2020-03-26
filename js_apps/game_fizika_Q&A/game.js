'use strict'
let game = {
  run() {
    while (true) {
      if (confirm('Новый вопрос?')) {
        renderer.renderQA()

        if (questions.length <= 0) {
          renderer.gameEnd()
          return
        }

      } else {
        renderer.gameEnd()
        return
      }
    }
  },

  init() {
    if (confirm('Вас ждут 5 вопросов по физике!\nЧтобы начать нажмите "Ок".')) {
      renderer.renderQA()
      game.run()
    }
  },
}

game.init()