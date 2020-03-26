let renderer = {
  map: '',
  render() {
    for (let row = 0; row < config.rowsCount; row++) {
      for (let col = 0; col < config.colsCount; col++) {
        if (row == player.y && col == player.x) {
          this.map += (player.label + ' ')
        } else {
          this.map += 'x '
        }
      }
      this.map += '\n'
    }
    console.log(this.map);
  },

  clear() {
    this.map = ''
    console.clear()
  }
}