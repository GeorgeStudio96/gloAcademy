'use strict'



let title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')
let screenPrice = +prompt('Сколько будет стоить данная работа?', 15000)
let adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')



let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service;
let service2;



const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }

        sum += +prompt('Сколько это будет стоить?')
    }

    return sum

}




const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}


const getFullPrice = function () {
    return screenPrice + allServicePrices
}


const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
}

const getServicePercentPrices = function () {
    return fullPrice - servicePercentPrice
}




const getRollbackMessage = function (price) {

    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
}





fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
allServicePrices = getAllServicePrices();
title = getTitle();




showTypeOf(title);
showTypeOf(adaptive);




console.log(screens)
console.log(servicePercentPrice)
console.log(getRollbackMessage(fullPrice));
console.log('allServicePrices', allServicePrices)


