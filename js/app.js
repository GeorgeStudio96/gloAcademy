'use strict'



let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let rollback = 76;
let adaptive = prompt('Нужен ли адаптив на сайте?')
let service = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = Math.ceil(fullPrice - (fullPrice * (rollback / 100)))

console.log(typeof title)
console.log(typeof adaptive)
console.log(screens)


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
    return servicePrice1 + servicePrice2

}
allServicePrices = getAllServicePrices();



function getFullPrice() {
    return screenPrice + allServicePrices
}
fullPrice = getFullPrice();


let newTitle = '';

const getTitle = function () {
    return title[0].toUpperCase() + title.slice(1).toLocaleLowerCase()
}
newTitle = getTitle();


const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}

servicePercentPrice = getAllServicePrices();
console.log(servicePercentPrice)
