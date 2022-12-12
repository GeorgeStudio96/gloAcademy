'use strict'

let x1 = '456x321' // return Number 456 и удалит все последующие символы не являющиеся цифрами
let x2 = '123x' // return Number 123 и удалит все последующие символы не являющиеся цифрами
let x3 = 'x123' // NaN
let x4 = '1' // isFinite return true 

console.log(parseFloat(x1))
console.log(isFinite(x4))




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
let textFromPromt;
let sum = 0


const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)
}







const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

    screenPrice = prompt('Сколько будет стоить данная работа?', 12000)

    while (!checkIsNumber(screenPrice) || screenPrice.trim() === '' || screenPrice === null) {
        screenPrice = prompt('Сколько будет стоить данная работа?')
    }
    screenPrice = Number(screenPrice)
    // пока в промпте мы не пропишем число, цикл while будет нас заебывать и возвращать промпт

    adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')
}

asking();


console.log(screenPrice, ' Отображаем значение из промта screenPrice')
console.log(checkIsNumber(screenPrice), ' Если число, тогда true, иначе false')
console.log(typeof screenPrice, ' Проверка на тип')


let sumServ = 0;
console.log(typeof (sumServ), ' Тип ДО вычислительной функции')


const getAllServicePrices = function () {

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }






        textFromPromt = prompt('Сколько это будет стоить?')

        while (!checkIsNumber(textFromPromt) || textFromPromt.trim() == '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }

        sumServ += Number(textFromPromt)

    }
    return sumServ


}


function allPrices() {
    return sumServ + screenPrice
}

getAllServicePrices();
allPrices();



console.log(textFromPromt, ' Отображаем значение из промта screenPrice')
console.log(checkIsNumber(textFromPromt), ' Если число, тогда true, иначе false')
console.log(allPrices())


console.log(typeof sumServ, ' Тип ПОСЛЕ вычислительной функции')
console.log(typeof screenPrice, ' Узнаю тип screenPrice из первого промта')



// const getAllServicePrices = function () {

//     for (let i = 0; i < 2; i++) {

//         if (i === 0) {
//             service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
//         } else if (i === 1) {
//             service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
//         }


//         textFromPromt = +prompt('Сколько это будет стоить?')
//         /*while (!isNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
//         } */

//         // sum += Number(textFromPromt)
//         console.log(textFromPromt, ' Введеное значение в поле цены услуги1 и услуги2')
//         sum += textFromPromt
//     }

//     return sum


// }


// const showTypeOf = function (variable) {
//     console.log(variable, typeof variable)
// }


// const getFullPrice = function () {
//     return screenPrice + allServicePrices
// }



// const getServicePercentPrice = function () {
//     return fullPrice - (fullPrice * (rollback / 100))
// }



// const getTitle = function () {
//     return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
// }



// const getRollbackMessage = function (price) {

//     if (price >= 30000) {
//         return 'Даем скидку в 10%'
//     } else if (price >= 15000 && price < 30000) {
//         return 'Даем скидку в 5%'
//     } else if (price >= 0 && price < 15000) {
//         return 'Скидка не предусмотрена'
//     } else {
//         return 'Что-то пошло не так'
//     }
// }



// asking();
// allServicePrices = getAllServicePrices();
// fullPrice = getFullPrice();
// servicePercentPrice = getServicePercentPrice();
// title = getTitle();




// showTypeOf(title);
// showTypeOf(adaptive);


// console.log(screenPrice, ' Это стоимость верстки экранов screenPrice')
// console.log(sum, ' Это сумма стоимости услуги1 и услуги2')
// console.log(fullPrice, 'Это фуллпрайс, до применения комиссии')


// console.log(screens.length, ' Длина строки')
// console.log(getRollbackMessage(fullPrice), ' Проверка на наличие скидки?');
// console.log(Math.ceil(servicePercentPrice), ' Полная стоимость за вычетом комиссии')

