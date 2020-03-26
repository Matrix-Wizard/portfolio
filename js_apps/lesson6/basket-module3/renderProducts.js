// Добавляем продукты на страницу
'use strict'
const productsPlace = document.querySelector('.products')

for (let i = 0; i < products.length; i++) {
  let productWrap = document.createElement('div')
  productWrap.classList.add('products_item')
  productWrap.setAttribute('data-id', products[i].id)

  let productAdd = `
    <div class="products_item__img">
      <img src=${products[i].img} alt="Картинка">
    </div>
    <div class="products_item__heading">
      ${products[i].name}
    </div>
    <div class="products_item__price">
      <span>${products[i].price}</span> рублей
    </div>
    <button class="products_item__button">Купить</button>
  `
  productWrap.innerHTML = productAdd
  productsPlace.insertAdjacentElement('beforeend', productWrap)
}