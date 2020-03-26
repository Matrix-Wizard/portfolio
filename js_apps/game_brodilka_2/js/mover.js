let mover = {
  canPlayerMakeStep(nextPoint) {
    return renderer.getSquere(nextPoint) !== null;
  },

  makeStep(event) {
    let userStep = this.userStepPosition(event)
    if (this.arePositionsEqual(player, userStep)) {
      return;
    }
    if (!this.canPlayerMakeStep(userStep)) {
      return
    }
    renderer.removeUserClass()
    player.changePosition(userStep)
    renderer.renderUserPosition(player)
  },

  userStepPosition(event) {
    switch (event.key) {
      case 'ArrowUp':
        return {
          x: player.x,
          y: player.y - 1
        }
      case 'ArrowRight':
        return {
          x: player.x + 1,
          y: player.y
        }
      case 'ArrowDown':
        return {
          x: player.x,
          y: player.y + 1
        }
      case 'ArrowLeft':
        return {
          x: player.x - 1,
          y: player.y
        }

      default:
        return {
          x: player.x,
          y: player.y
        };
    }
  },

  arePositionsEqual(curPos, newPos) {
    return curPos.x == newPos.x && curPos.y == newPos.y;
  }
}