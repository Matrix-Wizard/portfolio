const form = document.querySelector('form')
const btnSign = form.querySelector('input[type=button]')
const inputName = form.querySelector('input[placeholder="Имя"]')
const inputPhone = form.querySelector('input[placeholder="Телефон"]')
const inputQuantity = form.querySelector('select')
let messegeForm = document.getElementById('messegeForm')

let quantity = document.getElementById('quantity')

btnSign.addEventListener('click', function() {
  messegeForm.innerText = ''
  // Проверить введено ли имя и кол-во человек?
  if (!checkInput()) {
    // Проверка пройдена, записываем человека в базу
    addToList()
    // Считаем кол-во записанных человек
    quantity.innerText = sumQuantity()
    if (quantity.innerText >= 10) {
      signIsFinished()
    }
    alert('Ура! Вы записаны!')
  } else {
    console.log('Заполнены не все поля.');
    messegeForm.innerText = 'Заполнены не все поля.'
  } 
  
})

function checkInput() {
  return inputName.value === '' || inputQuantity.options.selectedIndex === 0 || inputPhone.value === ''
}

function addToList() {
  listOfPeople.push({
    name: inputName.value,
    phone: inputPhone.value,
    quantity: +inputQuantity.value
  })
}

function sumQuantity() {
  let sum = 0
  listOfPeople.forEach(elem => sum += elem.quantity)
  return sum
}

let listOfPeople = [
  // {
  //   name: 'Тест',
  //   quantity: 999
  // }
]

function signIsFinished() {
  let formElem = document.querySelectorAll('form > *')
  formElem.forEach(elem => elem.setAttribute('disabled', 'disabled'))

  messegeForm.innerText = 'Группа набрана. Запись завершена. До встречи!)'

  inputName.value = ''
  inputQuantity.options.selectedIndex = 0
  inputPhone.value = ''
}



let btn = document.querySelector('.topic')
let list = document.getElementById('list')

btn.addEventListener('click', function() {
  if (listOfPeople.length != 0) {
    list.innerHTML = listRefresh()
  }
})


function listRefresh() {
  let code = ''
  listOfPeople.forEach(function(elem) {
    code += `
    <li><span>${elem.name}:</span> ${elem.quantity} чел.</li>
    `
  })
  return code
}


