'use strict'


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

            /*while (!appData.isNumber(price) || price.trim() === '' || price === null) {
                price = prompt('Сколько будет стоить данная работа?')
            } */

            do {
                price = prompt('Сколько будет стоить данная работа?')
            } while (!appData.isNumber(price))

            this.screens.push({ id: i, name: name, price: price })
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

        // перепишу на reduce
        const sumScreenPrice = this.screens.reduce(function (accumulator, screen) {
            return accumulator + +screen.price // 11000
        }, 0)

        this.screenPrice = sumScreenPrice
        console.log(sumScreenPrice, ' Получаю сумму экранов');

        // for (let screen of this.screens) {
        //     appData.screenPrice += +screen.price
        // }


        // appData.screenPrice = this.screens.reduce((sum, screen) =>
        //     sum + screen.price // 2
        //     , 0)



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

    start: function () {
        appData.asking();
        this.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrice();
        appData.getTitle();

        // после всех заданных вопросов и математических операций вызываем консоль логи из logger
        appData.logger();
        console.log('Отобразим для понимания объект из услуг ', appData.services);
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




appData.start()













