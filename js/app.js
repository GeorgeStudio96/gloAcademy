'use strict'






const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service: '',
    service2: '',
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные')

        appData.screenPrice = prompt('Сколько будет стоить данная работа?')

        while (!isNumber(appData.screenPrice) || appData.screenPrice.trim() === '' || appData.screenPrice === null) {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?')
        }

        appData.adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')
    }
}




const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}





const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            appData.service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        } else if (i === 1) {
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        }

        let textFromPromt = '';

        while (!isNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
            textFromPromt = prompt('Сколько это будет стоить?')
        }

        sum += Number(textFromPromt)

    }

    return sum


}


// const showTypeOf = function (variable) {
//     console.log(variable, typeof variable)
// }


const getFullPrice = function () {
    return appData.screenPrice + appData.allServicePrices
}


const getServicePercentPrice = function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
}



const getTitle = function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
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



appData.asking();
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullPrice();
appData.servicePercentPrice = getServicePercentPrice();
appData.title = getTitle();




// showTypeOf(title);
// showTypeOf(adaptive);




console.log(appData.screens.length)
console.log(Math.ceil(appData.servicePercentPrice))
console.log(getRollbackMessage(appData.fullPrice));
console.log('allServicePrices', appData.allServicePrices)


