'use strict'

let ticTacToe = {
  gameTableElement: document.querySelector('#game'),
  status: 'playing',
  mapValues: [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ],
  phase: 'X',

  init() {
    // Отрисовываем поле
    this.renderMap()
    
    this.initEventHandlers()
  },

  renderMap() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement('tr')
      this.gameTableElement.appendChild(tr)
      for (let col = 0; col < 3; col++) {
        let td = document.createElement('td')
        td.dataset.row = row.toString()
        td.dataset.col = col.toString()
        tr.appendChild(td)
      }
    }
  },

  initEventHandlers() {
    this.gameTableElement.addEventListener('click', event => this.cellClickHandler(event))
  },

  cellClickHandler(event) {
    if (!this.isCorrectClick(event)) {
      return
    }

    this.fillCell(event)

    if (this.hasWon()) {
      // Ставим статус в "остановлено".
      this.setStatusStopped();
      // Сообщаем о победе пользователя.
      this.sayWonPhrase();
    }

    this.togglePhase();
  },

  isCorrectClick(event) {
    // console.log(this.isCellEmpty(event));
    return this.isStatusPlaying() && this.isClickByCell(event) && this.isCellEmpty(event);
  },

  isStatusPlaying() {
    return this.status === 'playing'
  },

  isClickByCell(event) {
    return event.target.tagName === 'TD'
  },

  isCellEmpty(event) {
    let row = +event.target.dataset.row
    let col = +event.target.dataset.col

    if (event.target.dataset.row == undefined) {
      return false
    }

    return this.mapValues[row][col] === ''
  },

  fillCell(event) {
    let row = +event.target.dataset.row
    let col = +event.target.dataset.col

    this.mapValues[row][col] = this.phase
    event.target.textContent = this.phase
  },

  hasWon() {
    return this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }) ||
    this.isLineWon({ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }) ||
    this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }) ||

    this.isLineWon({ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }) ||
    this.isLineWon({ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }) ||
    this.isLineWon({ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }) ||

    this.isLineWon({ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }) ||
    this.isLineWon({ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 });
  },

  isLineWon(a, b, c) {
    let value = this.mapValues[a.y][a.x] + this.mapValues[b.y][b.x] + this.mapValues[c.y][c.x]
    return value === 'XXX' || value === '000'
  }, 

  setStatusStopped() {
    this.status = 'stopped'
  },

  sayWonPhrase() {
    let figure = this.phase === 'X' ? 'Крестики' : "Нолики"
    // alert(figure + ' выиграли!')
    setTimeout(() => alert(figure + ' выиграли!'), 300);
  },

  togglePhase() {
    this.phase = this.phase === 'X' ? '0' : 'X'
  }
}

// Кнопка
let btn = document.querySelector('button')
btn.addEventListener('click', reload)
function reload() {
  window.location.reload()
}


ticTacToe.init()