'use strict'

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service;
let service2;



const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

    screenPrice = prompt('Сколько будет стоить данная работа?')

    while (!isNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    }

    adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')
}



const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }

        let textFromPromt = '';

        while (!isNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }

        sum += Number(textFromPromt)

    }

    return sum


}


const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}


const getFullPrice = function () {
    return screenPrice + allServicePrices
}


const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}



const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
}



const getRollbackMessage = function (price) {

    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
}



asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();




showTypeOf(title);
showTypeOf(adaptive);




console.log(screens.length)
console.log(Math.ceil(servicePercentPrice))
console.log(getRollbackMessage(fullPrice));
console.log('allServicePrices', allServicePrices)


