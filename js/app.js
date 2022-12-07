'use strict'

let title = prompt('Как называется ваш проект?');
console.log(typeof title)

let screens = prompt('Какие типы экранов нужно разработать?')
console.log(screens)
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let rollback = 76;
let adaptive = prompt('Нужен ли адаптив на сайте?')
console.log(typeof adaptive)

let service = prompt('Какой дополнительный тип услуги нужен?')
let price = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let price2 = +prompt('Сколько это будет стоить?')



let priceResult = price
let priceResult2 = price2

let fullPrice = (screenPrice + priceResult + priceResult2) // 9
console.log(fullPrice + ' FULLPRICE')

//откат посреднику (fullPrice * (rollback/100))
let rollbackRes = (fullPrice * (rollback / 100))

console.log(rollbackRes + ' ОТКАТ ПОСРЕДНИКУ')


if (fullPrice > 30000) {
    console.log('Даем скидку в 10%')
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log('Даем скидку в 5%')
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log('Скидка не предусмотрена')
} else if (fullPrice < 0) {
    console.log('Что-то пошло не так')
} else if (fullPrice === 0 || fullPrice === 15000 || fullPrice === 30000) {
    console.log('Что-то происходит')
}




let allServicePrices;

const getAllServicePrices = function () {
    allServicePrices = priceResult + priceResult2

}
getAllServicePrices();
console.log(allServicePrices)


function getFullPrice() {
    fullPrice = screenPrice + allServicePrices
}
getFullPrice();
console.log('FULL PRICE UPDATED: ' + fullPrice)




let newTitle = '';

function getTitle() {
    newTitle = title[0].toUpperCase() + title.slice(1).toLocaleLowerCase()
}

getTitle();





let servicePercentPrice;

const getServicePercentPrices = () => {
    servicePercentPrice = fullPrice - rollbackRes
}

getServicePercentPrices();
console.log(servicePercentPrice)


getAllServicePrices();

console.log("Итоговая цена: " + servicePercentPrice)

