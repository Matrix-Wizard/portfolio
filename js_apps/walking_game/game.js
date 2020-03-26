let game = {
  get run() {
    while (true) {
      const direction = mover.getDirection()
      if (direction === null) {
        console.log('Игра окончена');
        return
      }
      const nextPoint = mover.getNextPosition(direction)
      if (mover.canPlayerMakeStep(nextPoint)) {
        player.move(nextPoint)
        renderer.clear()
        renderer.render()
      }
    }
  },


  get init() {
    console.log('Ваше положение на поле в виде ' + player.label + '.');
    renderer.render()
    console.log("Чтобы начать игру наберите game.run и нажмите Enter.");
  }
}

game.init