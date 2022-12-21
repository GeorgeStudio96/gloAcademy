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
const totalInputConstService = document.getElementsByClassName('total-input')[2]
const totalInput = document.getElementsByClassName('total-input')[3]
const totalInputWithRollback = document.getElementsByClassName('total-input')[4]


let screens = document.querySelectorAll('.screen')



const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    init: function () {
        this.addTitle()
        startBtn.addEventListener('click', appData.start)
    },
    addTitle: function () {
        document.title = title.textContent
    },
    start: function () {
        appData.addScreens()
        // appData.asking();
        // this.addPrices();
        // appData.getFullPrice();
        // appData.getServicePercentPrice();
        // appData.getTitle();

        // appData.logger();
        // console.log('Отобразим для понимания объект из услуг ', appData.services);
    },
    addScreens: function () {

        screens.forEach(function (item, index) {
            const select = item.querySelector('select')
            const input = item.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push(
                {
                    id: index,
                    name: selectName,
                    price: +select.value * +input.value
                }
            )
            console.log(appData.screens);

        })
    },
    isOnlyDigital: function (val) {
        return !isNaN(val)
    },
    asking: function () {
        console.log(appData.services === 'Услуга 1', ' Вернет true или false, если есть строка Услуга 1');

        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        } while (this.isOnlyDigital(this.title))


        for (let i = 0; i < 2; i++) {

            // проверка на строку name
            let name;

            do {
                name = prompt('Какие типы экранов нужно разработать?')
            } while (this.isOnlyDigital(name))


            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?')
            } while (!appData.isNumber(price))

            this.screens.push({ id: i, name: selectName, price: price })
        }






        for (let i = 0; i < 2; i++) {
            let nameService;





            do {
                nameService = prompt('Какой дополнительный тип услуги нужен?')


                // if (nameService in this.services) {
                //     console.log('Назван уже есть');
                //     nameService += ' copy'
                // }


            } while (this.isOnlyDigital(nameService) || nameService in this.services)




            let textFromPromt = '';

            while (!appData.isNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
                textFromPromt = prompt('Сколько это будет стоить?')
            }

            appData.services[nameService] = Number(textFromPromt)

        }


        appData.adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')
    },
    addPrices: function () {

        const sumScreenPrice = this.screens.reduce(function (accumulator, screen) {
            return accumulator + +screen.price
        }, 0)

        this.screenPrice = sumScreenPrice
        console.log(sumScreenPrice, ' Получаю сумму экранов');

        for (let item in appData.services) {
            appData.allServicePrices = appData.allServicePrices + appData.services[item]
        }


    },

    logger: function () {
        // appData.showTypeOf(appData.title);
        // appData.showTypeOf(appData.adaptive);
        // console.log(appData.screens.length)



        console.log('Сумма услуг ', appData.allServicePrices)
        console.log('Общая сумма услуг + стоимость экранов ', appData.fullPrice);
        console.log(appData.servicePercentPrice, 'Общая сумма после вычета % ')


        console.log(this.screens, ' Отобразили массив с данными');




        for (let item in appData) {
            console.log('——————————————————')
            console.log(item);
        }

    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    showTypeOf: function (variable) {
        console.log(variable, typeof variable)
    },
    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
    },
    getRollbackMessage: function (price) {

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

}


appData.init()











