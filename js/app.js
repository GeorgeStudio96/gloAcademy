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


function getRollbackMessage(price) {

    if (price > 30000) {
        return 'Даем скидку в 10%'
    } else if (price > 15000 && fullPrice < 30000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && fullPrice > 0) {
        return 'Скидка не предусмотрена'
    } else if (price < 0) {
        return 'Что-то пошло не так'
    } else if (price === 0 || fullPrice === 15000 || fullPrice === 30000) {
        return 'Что-то происходит'

    }
}


console.log(getRollbackMessage(fullPrice));





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


