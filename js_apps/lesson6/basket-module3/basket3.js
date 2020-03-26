'use strict'
let basketBtn = document.querySelector('.menu_button')
let basket = document.querySelector('.menu_basket')

// Открытие и закрытие окна корзины
basketBtn.addEventListener('click', function () {
  if (basket.style.visibility === 'hidden' || basket.style.visibility === '') {
    basket.style.visibility = 'visible'
  } else {
    basket.style.visibility = 'hidden'
  }
})

//берем все кнопки "Купить" и слушаем клики по ним
let buyBtns = document.querySelectorAll('.products_item__button');
for (let i = 0; i < buyBtns.length; i++) {
  buyBtns[i].addEventListener('click', function () {
    basketTools.addProduct({
      id: products[i].id,
      price: products[i].price,
      name: products[i].name
    })
  })
}

let basketTools = {
  productsBasket: {},

  /**
   * Метод добавляет продукт в корзину.
   * @param {{ id: string, price: string, name: string }} product
   */
  addProduct(product) {
    this.addProductToObject(product);
    this.renderProductInBasket(product);
    this.renderTotalSum();
    this.addRemoveBtnsListeners();
  },

  /**
   * Метод добавляет продукт в объект с продуктами.
   * @param {{ id: string, price: string, name: string }} product
   */
  addProductToObject(product) {
    if (this.productsBasket[product.id] == undefined) {
      this.productsBasket[product.id] = {
        price: product.price,
        name: product.name,
        count: 1
      }
    } else {
      this.productsBasket[product.id].count++;
    }
  },


  /**
   * Метод отрисовывает продукт в корзине, если там такой уже есть просто
   * увеличивает счетчик на 1.
   * @param {{ id: string, price: string, name: string }} product
   * @returns
   */
  renderProductInBasket(product) {
    let productExist = basket.querySelector(`.productCount[data-id="${product.id}"]`)
    if (productExist) {
      productExist.textContent++
      return
    }
    let productRow = `
            <tr>
              <td>${product.id}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td class="productCount" data-id="${product.id}">1</td>
              <td><i class="fas fa-trash-alt productRemoveBtn" data-id="${product.id}"></i></td>
            </tr>
        `;
    let tbody = basket.querySelector('tbody');
    tbody.insertAdjacentHTML("beforeend", productRow);
  },

  /**
   * Метод считает и отображает общую сумму заказа в корзине
   */
  renderTotalSum() {
    let totalSumBasket = basket.querySelector('#totalSum')
    let sum = 0
    for (let key in this.productsBasket) {
      sum += this.productsBasket[key].price * this.productsBasket[key].count
    }
    totalSumBasket.textContent = sum
  },


  /**
   * Обработчик события клика по кнопке удаления товара.
   * @param {MouseEvent} event
   */
  removeProductListener(event) {
    basketTools.removeProduct(event);
    basketTools.renderTotalSum();
  },

  /**
   * Добавляем слушателей события клика по кнопкам удалить.
   */
  addRemoveBtnsListeners() {
    let btns = basket.querySelectorAll('.productRemoveBtn');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', this.removeProductListener);
    }
  },

  /**
   * Метод удаляет продукт из объекта продуктов, а также из корзины на странице.
   * @param {MouseEvent} event
   */
  removeProduct(event) {
    let id = event.srcElement.dataset.id;
    this.removeProductFromObject(id);
    this.removeProductFromBasket(id);
  },

  /**
   * Метод удаляет продукт из объекта с продуктами.
   * @param {string} id
   */
  removeProductFromObject(id) {
    if (this.productsBasket[id].count == 1) {
      delete this.productsBasket[id]
    } else {
      this.productsBasket[id].count--
    }
  },

  /**
   * Метод удаляет товар из корзины. Если количество больше 1, то просто уменьшает его.
   * @param {string} id
   */
  removeProductFromBasket(id) {
    let countId = basket.querySelector(`.productCount[data-id="${id}"]`)
    if (countId.textContent == 1) {
      countId.parentElement.remove()
    } else {
      countId.textContent--
    }
  },
}
