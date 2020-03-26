let mover = {
  canPlayerMakeStep(nextPoint) {
    return nextPoint.x >= 0 &&
            nextPoint.x < config.colsCount &&
            nextPoint.y >= 0 &&
            nextPoint.y < config.rowsCount
  },
  
  getDirection() {
    const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9]
    while (true) {
      let direction = parseInt(prompt(`Введите число (${availableDirections.join(', ')}), куда вы хотите переместиться, "Отмена" для выхода.`))

      if (isNaN(direction)) {
        return null
      }

      if (!availableDirections.includes(direction)) {
        alert('Для перемещения необходимо ввести одно из чисел: ' + availableDirections.join(', '))
        continue
      }
      
      return direction
    }
  },

  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y
    }
    switch (direction) {
      case 1:
        nextPosition.x--
        nextPosition.y++
        break;
      case 2:
        nextPosition.y++
        break;
      case 3:
        nextPosition.x++
        nextPosition.y++
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
        break;
      case 7:
        nextPosition.x--;
        nextPosition.y--;
        break;
      case 8:
        nextPosition.y--;
        break;
      case 9:
        nextPosition.x++;
        nextPosition.y--;
        break;
    }
    return nextPosition

    // if ((nextPosition.x < 0 || nextPosition.x >= config.colsCount) || (nextPosition.y < 0 || nextPosition.y >= config.rowsCount)) {
    //   return {
    //     x: player.x,
    //     y: player.y
    //   }
    // } else {
    //   return nextPosition
    // }
  }
}