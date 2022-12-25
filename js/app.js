'use strict'

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


let screens = document.querySelectorAll('.screen') // nodelist

const checkCms = document.querySelector('#cms-open')
const cmsHidden = document.querySelector('.main-controls__item.hidden-cms-variants')



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
        this.addTitle()
        startBtn.addEventListener('click', this.start)
        btnPlus.addEventListener('click', this.addScreenBlock)
        this.addRollback()
        this.addRollbackAfter()
        resetBtn.addEventListener('click', this.reset)
        checkCms.addEventListener('click', this.openCms)
    },
    addTitle: function () {
        document.title = title.textContent
    },
    addScreenBlock: function () {
        screens = document.querySelectorAll('.screen') // нужно переопределить коллекцию
        console.log(screens, ' нодлист скринов и их кол-во')
        const cloneScreen = screens[0].cloneNode(true)
        cloneScreen.querySelector('input[type=text]').value = ''
        screens[screens.length - 1].after(cloneScreen)
        console.log(screens, ' нодлист скринов и их кол-во после клонирования')


    },
    start: function () {
        appData.addScreens()
        appData.addServices()
        appData.addPrices();

        // appData.logger();
        console.log(this);
        appData.showResult()
        appData.screens.splice(0)
        appData.disableItem()

    },
    openCms: function () {
        console.log('FUCK');
    },
    disableItem: function () {
        let allSelect = document.querySelectorAll('.main-controls__select > select')
        allSelect.forEach(item => item.setAttribute('disabled', 'disabled'))

        let firstInput = document.querySelectorAll('.screen > .main-controls__input > input[type=text]')
        firstInput.forEach(item => item.setAttribute('disabled', 'disabled'))


        resetBtn.style.display = 'block'
        startBtn.style.display = 'none'

    },
    reset: function () {

        let firstInput = document.querySelectorAll('.screen > .main-controls__input > input[type=text]')
        firstInput.forEach(item => {
            item.value = '';
            item.removeAttribute('disabled')
        })


        let allSelect = document.querySelectorAll('.main-controls__select > select')
        allSelect.forEach(item => {
            item.value = ''
            item.removeAttribute('disabled')
        })


        let checkobxes = document.querySelectorAll('input[type=checkbox]')
        checkobxes.forEach(item => {
            item.checked = false
        })


        appData.screens.splice(0)
        inputRange.value = 0
        totalInputCostScreen.value = 0
        totalInputValue.value = 0
        totalCountOther.value = 0
        totalInput.value = 0
        totalInputWithRollback.value = 0
        rangeValue.innerHTML = 0 + '%'

        resetBtn.style.display = 'none'
        startBtn.style.display = 'block'





        screens = document.querySelectorAll('.screen') // нужно переопределить коллекцию
        for (let i = 1; i < screens.length; i++) {
            console.log('удален 1 элемент');
            screens[i].remove()
        }



        console.log('Все очищено');
        console.log(appData.screens);
    },

    addRollback: function () {
        console.log(appData.rollback, ' // по умолчанию 10');

        const rangeValRes = (e) => {
            rangeValue.innerHTML = e.target.value + '%'
            this.rollback = +e.target.value
            console.log(this.rollback);
        }

        inputRange.addEventListener('input', rangeValRes)
        inputRange.addEventListener('change', rangeValRes)

    },

    addRollbackAfter: function () {
        const rangeValResAfter = (e) => {
            this.rollback = +e.target.value
            this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))
            totalInputWithRollback.value = this.servicePercentPrice
        }
        inputRange.addEventListener('input', rangeValResAfter)
        inputRange.addEventListener('change', rangeValResAfter)
    },
    addScreens: function () {
        screens = document.querySelectorAll('.screen') // нужно переопределить коллекцию

        screens.forEach((item, index) => { // перебираем переменную screens
            const select = item.querySelector('select') // вытянули каждый отдельный пункт селекта
            const input = item.querySelector('input') // вытянули каждый отдельный инпут
            const selectName = select.options[select.selectedIndex].textContent // получили текст селекта

            if (input.value !== '' && select.value !== '') {
                const price = +select.value * +input.value
                const count = +input.value
                this.screens.push({
                    id: index,
                    name: selectName,
                    price: price,
                    count: count
                })
                console.log(appData.screens);

            } else {
                this.screens.splice(0);
                document.querySelectorAll('input[type=text]').value = ''
                console.log('Не заполнены обязательные поля')
            }

        })

    },
    addServices: function () {
        otherItemsPercent.forEach((item, index) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')



            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }
        })


        otherItemsNumber.forEach((item, index) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')




            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }
        })
    },
    showResult: function () {
        console.log('res');
        totalInputCostScreen.value = this.screenPrice
        totalCountOther.value = this.servicePricesNumber + this.servicePricesPercent
        totalInput.value = this.fullPrice
        totalInputWithRollback.value = this.servicePercentPrice
        totalInputValue.value = this.count
    },
    addPrices: function () {

        const sumScreenPrice = this.screens.reduce((accumulator, screen) => {
            return accumulator + +screen.price
        }, 0)

        appData.screenPrice = sumScreenPrice
        console.log(sumScreenPrice, ' Получаю сумму экранов');


        const sumCount = this.screens.reduce((prev, item) => {
            return prev + +item.count
        }, 0)

        this.count = sumCount
        console.log(sumCount, ' Получаю сумму кол-ва экранов');




        for (let item in this.servicesNumber) {
            appData.servicePricesNumber += this.servicesNumber[item]
        }

        for (let item in appData.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[item] / 100)
        }


        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))
    },

    logger: function () {

        console.log('Сумма услуг ', this.allServicePrices)
        console.log('Общая сумма услуг + стоимость экранов ', this.fullPrice);
        console.log(this.servicePercentPrice, 'Общая сумма после вычета % ')


        console.log(this.screens, ' Отобразили массив с данными');




        for (let item in this) {
            console.log('——————————————————')
            console.log(item);
        }

    },
    showTypeOf: function (variable) {
        console.log(variable, typeof variable)
    }

}


appData.init()


