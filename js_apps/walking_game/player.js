const player = {
  x: 0,
  y: 0,

  label: '$',
  /**
   * 
   * @param {{x: int, y: int}} nextPoint. Метод move принимает объект
   */
  move(nextPoint) {
    this.x = nextPoint.x
    this.y = nextPoint.y
  }
}