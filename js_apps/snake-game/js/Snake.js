class Snake {
  constructor() {
    this.possibleDirections = ['down', 'up', 'left', 'right'];

    this.body = [
      {
        x: 1,
        y: 2,
      },
      {
        x: 1,
        y: 1,
      },
      ];

    this.direction = 'down';

    this.currentSnakeLength = document.querySelector('#currentSnakeLength')
    this.winSnakeLength = document.getElementById('winSnakeLength')
  }

  performStep() {
    let currentHeadCoords = this.body[0];
    let newHeadCoords = {
      x: currentHeadCoords.x,
      y: currentHeadCoords.y,
    };
    switch (this.direction) {
      case "down":
        newHeadCoords.y++;
        if (newHeadCoords.y > this.settings.rowsCount) {
          newHeadCoords.y = 1
        }
        break;
      case "up":
        newHeadCoords.y--;
        if (newHeadCoords.y < 1) {
          newHeadCoords.y = this.settings.rowsCount
        }
        break;
      case "left":
        newHeadCoords.x--;
        if (newHeadCoords.x < 1) {
          newHeadCoords.x = this.settings.colsCount
        }
        break;
      case "right":
        newHeadCoords.x++;
        if (newHeadCoords.x > this.settings.colsCount) {
          newHeadCoords.x = 1
        }
        break;
    }
    this.body.unshift(newHeadCoords);
    this.body.pop();
  }

  changeDirection(newDirection) {
    if (!this.possibleDirections.includes(newDirection)) {
      throw new Error('Передано не верное направление. Вы передали: ' + newDirection);
    }
    if (this.isPassedOppositeDirection(newDirection)) {
      return;
    }
    this.direction = newDirection;
  }

  isPassedOppositeDirection(newDirection) {
    if (this.direction == 'down' && newDirection == 'up') {
      return true;
    }
    if (this.direction == 'up' && newDirection == 'down') {
      return true;
    }
    if (this.direction == 'left' && newDirection == 'right') {
      return true;
    }
    if (this.direction == 'right' && newDirection == 'left') {
      return true;
    }
    return false;
  }

  increaseBody() {
    let bodyLastCell = this.body[this.body.length - 1];
    let newBodyLastCell = {
      x: bodyLastCell.x,
      y: bodyLastCell.y,
    };
    this.body.push(newBodyLastCell);
    this.countForWin()
  }

  init(settings) {
    this.settings = settings
    this.winSnakeLength.innerText = this.settings.winLength
    this.countForWin()
  }
  countForWin() {
    currentSnakeLength.innerText = this.body.length
  }
}