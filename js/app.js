// homework lesson 01

let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

alert('homework lesson01')
console.log('homework lesson01')



// homework lesson 2

// Следующим переменным присвоить значения

title = 'Lesson 01';
screens = 'Простые, Сложные, Интерактивные';
screenPrice = 10;
rollback = 76;
fullPrice = 1000000;
adaptive = true

// Вывести в консоль тип данных значений переменных title, fullPrice, adaptive;
console.log(typeof title)
console.log(typeof fullPrice)
console.log(typeof adaptive)

// Вывести в консоль длину строки из переменной screens

console.log(screens.length)

// Вывести в консоль “Стоимость верстки экранов (screenPrice) рублей/ долларов/гривен/юани” 
// и “Стоимость разработки сайта (fullPrice) рублей/ долларов/гривен/юани”

console.log((screenPrice + ' Рублей'))
console.log((screenPrice + ' Долларов'))
console.log((fullPrice + ' Рублей'))
console.log((fullPrice + ' Долларов'))

// Привести строку screens к нижнему регистру и разбить строку на массив, вывести массив в консоль

let screensToLowerCase = screens.toLowerCase();
console.log(screensToLowerCase)

let array = screensToLowerCase.split(', ')
console.log(array)

// Вывести в консоль Процент отката посреднику за работу (fullPrice * (rollback/100))

console.log((fullPrice * (rollback / 100)))

