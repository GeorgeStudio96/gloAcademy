'use strict'

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let rollback = 76;
let adaptive = prompt('Нужен ли адаптив на сайте?')
let service = prompt('Какой дополнительный тип услуги нужен?')
let price = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let price2 = +prompt('Сколько это будет стоить?')


let priceResult = price
console.log(priceResult)
let priceResult2 = price2
console.log(priceResult2)

let fullPrice = (screenPrice + priceResult + priceResult2)
console.log('Full Price: ' + fullPrice)


//откат посреднику (fullPrice * (rollback/100))
let rollbackRes = (fullPrice * (rollback / 100))
console.log('Откат посреднику: ' + rollbackRes)

let servicePercentPrice = (fullPrice - rollbackRes)
console.log("Итоговая цена: " + Math.ceil(servicePercentPrice))



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


