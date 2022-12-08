// let text = 'Hello, world'

// console.log(text.charAt(3))
// console.log(text[0])
// console.log(text.substring(1, 10))
// console.log(text.slice(-8))
// console.log(text.indexOf('world'))
// console.log(text.includes('world'))
// // console.log(text.replace('Hello', 'Bye'))

// console.log(text.split(', '))


// let potato = 10

// for (let i = 0; i < potato; i++) {
//     if (i === 5) break
//     console.log(i)
// }





const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}



const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {

        // if (i === 0) {
        //     service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
        // } else if (i === 1) {
        //     service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
        // }

        if (i === 0 && !isNumber(sum) || sum.trim() === '' || sum === null) {
            service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
            sum += prompt('Сколько это будет стоить?')

        } else {

        }

        sum += +prompt('Сколько это будет стоить?')


    }

    return sum


}

console.log(getAllServicePrices())