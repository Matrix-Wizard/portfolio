
// The code below modifies margin in "<progress> tag" in block "Our expertise"
let progressValue = document.querySelectorAll('.progress__value')

for (let i = 0; i < progressValue.length; i++) {
  let sum = 94 - progressValue[i].dataset.value
  progressValue[i].style.marginRight = sum + '%'
}

