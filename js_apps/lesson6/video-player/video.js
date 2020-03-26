'use strict'
const video = document.querySelector('video');
const playBtn = document.querySelector('.fa-play');
const pauseBtn = document.querySelector('.fa-pause');
const volume = document.querySelector('.volume');
const timing = document.querySelector('.timing');
const currentTimeEl = document.querySelector('.currentTime');
const duration = document.querySelector('#duration');
const volumeNum = document.querySelector('#volumeNum');




window.addEventListener('load', function () {
  duration.innerText = video.duration + ' секунд'
  timing.min = '0'
  timing.max = video.duration
  volumeNum.innerText = volume.value * 100 + '%'
})

let progressIdentifier = null
let wasVideoPlaying = false

playBtn.addEventListener('click', function () {
  if (video.paused) {
    video.play()
    progressIdentifier = setInterval(changeProgress, 100)
  }
})
pauseBtn.addEventListener('click', function () {
  if (!video.paused) {
    video.pause()
    clearInterval(progressIdentifier)
  }
})

function changeProgress() {
  currentTimeEl.innerText = video.currentTime
  timing.value = video.currentTime
}

video.addEventListener('ended', function() {
  clearInterval(progressIdentifier)
})

timing.addEventListener('change', function () {
  video.currentTime = timing.value
  if (wasVideoPlaying) {
    video.play()
    progressIdentifier = setInterval(changeProgress, 100);
  }
  currentTimeEl.innerText = timing.value
})

timing.addEventListener('mousedown', function() {
  clearInterval(progressIdentifier)
  wasVideoPlaying = !video.paused
  if (wasVideoPlaying) {
    video.pause()
  }
  
  
})
// timing.addEventListener('click', function() {
//   video.currentTime = timing.value
// })

volume.addEventListener('change', function() {
  video.volume = volume.value
  volumeNum.innerText = volume.value * 100 + '%'
})


let my = document.querySelector('#my')
let myNum = document.querySelector('#myNum')

let num = null
my.addEventListener('mousedown', function () {
  num = setInterval(function() {
    myNum.innerText = my.value
  }, 1)
  
})
my.addEventListener('mouseup', function () {
  clearInterval(num)
})