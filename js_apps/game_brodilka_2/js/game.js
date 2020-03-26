renderer.renderBoard()
window.addEventListener('keydown', function (event) {
  mover.makeStep(event)
})