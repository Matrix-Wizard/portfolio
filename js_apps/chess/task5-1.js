let app = {
  config: {
    rows: [8,7,6,5,4,3,2,1],
    cols: 'ABCDEFGH',
    bChess: ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;']
  },


  run() {
    let board = this.generateBoard()
    document.body.insertAdjacentHTML('afterbegin', board)
    this.insertRowsNumbers()
    this.insertColsChars()
    this.insertBlackPawns()
    this.insertWhitePawns()

    this.insertChess()

  },

  generateBoard() {
    let board = ''
    let rowStartWithColor = 'white'
    for (let i = 0; i < this.config.rows.length; i++) {
      let row = ''
      if (rowStartWithColor == 'white') {
        row = this.generateRow(rowStartWithColor, this.config.rows[i])
        rowStartWithColor = 'black'
      } else {
        row = this.generateRow(rowStartWithColor, this.config.rows[i])
        rowStartWithColor = 'white'
      }
      board += row
    }
    return `<table><tbody>${board}</tbody></table>`
  },

  generateRow(startWithColor, rowNum) {
    let currentColorClass = startWithColor
    let row = ""
    for (let i = 0; i < this.config.cols.length; i++) {
      let field = ""
      if (currentColorClass === 'white') {
        field = this.generateField('white', rowNum, this.config.cols[i]);
        currentColorClass = 'blackField';
      } else {
        field = this.generateField('black', rowNum, this.config.cols[i]);
        currentColorClass = 'white';
      }
      row += field
    }
    return `<tr>${row}</tr>`
  },

  generateField(color, rowNum, colChar) {
    return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
  },

  insertRowsNumbers() {
    let trs = document.querySelectorAll('tr')
    for (let i = 0; i < trs.length; i++) {
      let td = document.createElement('td')
      td.innerText = this.config.rows[i]
      trs[i].insertAdjacentElement('afterbegin', td)
    }
  },

  insertColsChars() {
    let tr = document.createElement('tr')
    tr.innerHTML += '<td></td>'
    for (let i = 0; i < this.config.cols.length; i++) {
      tr.innerHTML += `<td>${this.config.cols[i]}</td>`
    }
    let board = document.querySelector('tbody')
    // board.insertAdjacentElement('beforeend', tr)
    board.append(tr)
  },

  insertWhitePawns() {
    let secondTrLine = document.querySelectorAll('[data-rownum="2"]')
    secondTrLine.forEach(function (element) {
      element.innerHTML = '&#9817;'
      element.classList.add('whiteChess')
    })
  },

  insertBlackPawns() {
    let seventhTrLine = document.querySelectorAll('[data-rownum="7"]')
    seventhTrLine.forEach(function (element) {
      element.innerHTML = '&#9823;'
      element.classList.add('blackChess')
    })
  },

  insertChess() {
    let firstTrLine = document.querySelectorAll('[data-rownum="1"]')
    for (let i = 0; i < firstTrLine.length; i++) {
      firstTrLine[i].innerHTML = this.config.bChess[i]
      firstTrLine[i].classList.add('whiteChess')
    }

    let eigthTrLine = document.querySelectorAll('[data-rownum="8"]')
    for (let i = 0; i < eigthTrLine.length; i++) {
      eigthTrLine[i].innerHTML = this.config.bChess[i]
      eigthTrLine[i].classList.add('black Chess')
    }

  }
}

app.run()