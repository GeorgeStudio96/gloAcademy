'use strict'

// homework lesson09

const title = document.getElementsByTagName('h1')[0]
const btnPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')


const inputRange = document.querySelector('div > input[type=range]')
const rangeValue = document.querySelector('div > span.range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]


const totalInputCostScreen = document.getElementsByClassName('total-input')[0]
const totalInputValue = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const totalInput = document.getElementsByClassName('total-input')[3]
const totalInputWithRollback = document.getElementsByClassName('total-input')[4]


let screens = document.querySelectorAll('.screen')



const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    count: 0,
    adaptive: true,
    rollback: 10,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        btnPlus.addEventListener('click', appData.addScreenBlock)
        appData.addRollback()
    },
    addTitle: function () {
        document.title = title.textContent
    },
    addScreenBlock: function () {
        console.log('clone block');
        const cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices();

        // appData.logger();
        console.log(appData);
        appData.showResult()

    },
    addRollback: function () {
        console.log(appData.rollback); // по умолчанию 10

        const rangeValRes = function (e) {
            rangeValue.innerHTML = e.target.value + '%'
            appData.rollback = +e.target.value
            console.log(appData.rollback);
        }

        inputRange.addEventListener('input', rangeValRes)
        inputRange.addEventListener('change', rangeValRes)

    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen') // нужно переопределить коллекцию

        screens.forEach(function (item, index) { // перебираем переменную screens
            const select = item.querySelector('select') // вытянули каждый отдельный пункт селекта
            const input = item.querySelector('input') // вытянули каждый отдельный инпут
            const selectName = select.options[select.selectedIndex].textContent // получили текст селекта

            if (input.value !== '' && select.value !== '') {
                const price = +select.value * +input.value
                const count = +input.value
                appData.screens.push({
                    id: index,
                    name: selectName,
                    price: price,
                    count: count
                })
                console.log(appData.screens);

            } else {
                appData.screens.splice(0);
                alert('Не заполнены обязательные поля')
            }

        })

    },
    addServices: function () {
        otherItemsPercent.forEach(function (item, index) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')



            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value
            }
        })


        otherItemsNumber.forEach(function (item, index) {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')




            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    showResult: function () {
        console.log('res');
        totalInputCostScreen.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesNumber + appData.servicePricesPercent
        totalInput.value = appData.fullPrice
        totalInputWithRollback.value = appData.servicePercentPrice
        totalInputValue.value = appData.count
    },
    addPrices: function () {

        const sumScreenPrice = appData.screens.reduce(function (accumulator, screen) {
            return accumulator + +screen.price
        }, 0)

        appData.screenPrice = sumScreenPrice
        console.log(sumScreenPrice, ' Получаю сумму экранов');


        const sumCount = appData.screens.reduce(function (prev, item) {
            return prev + +item.count
        }, 0)
        appData.count = sumCount
        console.log(sumCount, ' Получаю сумму кол-ва экранов');




        for (let item in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[item]
        }

        for (let item in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[item] / 100)
        }


        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent

        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },

    logger: function () {

        console.log('Сумма услуг ', appData.allServicePrices)
        console.log('Общая сумма услуг + стоимость экранов ', appData.fullPrice);
        console.log(appData.servicePercentPrice, 'Общая сумма после вычета % ')


        console.log(appData.screens, ' Отобразили массив с данными');




        for (let item in appData) {
            console.log('——————————————————')
            console.log(item);
        }

    },
    showTypeOf: function (variable) {
        console.log(variable, typeof variable)
    }

}


appData.init()

