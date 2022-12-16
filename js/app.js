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
    asking: function () {
        console.log(appData.services === 'Услуга 1', ' Вернет true или false, если есть строка Услуга 1');

        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');



        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?')
            let price = 0;

            /* while (!appData.isNumber(price) || price.trim() === '' || price === null) {
                 price = prompt('Сколько будет стоить данная работа?')
             }*/

            do {
                price = prompt('Сколько будет стоить данная работа?')
            } while (!appData.isNumber(price))


            this.screens.push({ id: i, name: name, price: price })
        }








        for (let i = 0; i < 2; i++) {
            let nameService = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')



            let textFromPromt = '';

            while (!appData.isNumber(textFromPromt) || textFromPromt.trim() === '' || textFromPromt === null) {
                textFromPromt = prompt('Сколько это будет стоить?')
            }

            appData.services[nameService] = Number(textFromPromt)

            if ('Услуга 1' in appData.services) {
                console.log('Уже есть услуга 1');
                appData.services[nameService + '1'] = Number(textFromPromt)

            }

            console.log('Услуга 1' in appData.services, ' Услуга 1', ' Вернет true или false, если есть строка Услуга 1');

        }


        appData.adaptive = prompt('Нужен ли адаптив на сайте?', 'Да')
    },
    addPrices: function () {
        for (let screen of this.screens) {
            appData.screenPrice += +screen.price
        }

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










