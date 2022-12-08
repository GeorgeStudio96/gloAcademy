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





// const isNumber = function (num) {
//     return !isNaN(parseFloat(num)) && isFinite(num)
// }



// const getAllServicePrices = function () {
//     let sum = 0


//     for (let i = 0; i < 2; i++) {

//         if (i === 0) {
//             service = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 1')
//         } else if (i === 1) {
//             service2 = prompt('Какой дополнительный тип услуги нужен?', 'Услуга 2')
//         }

//         let costPromt = '';

//         while (!isNumber(costPromt) || costPromt.trim() === '' || costPromt === null) {
//             costPromt = prompt('Сколько будет стоить данная работа?')
//         }
//         sum += Number(costPromt)

//     }

//     return sum


// }

// console.log(getAllServicePrices())




// //Вариант с циклом c проверками бессмысленен если код повторяется
// for (let index = 1; index < 10; index++) {
//     if(index === 1) {
//         const promptString = prompt("Какая нужна доп услуга?", "Услуга 1")
//         console.log(promptString)
//     }

//     if(index === 2) {
//         const promptString = prompt("Какая нужна доп услуга?", "Услуга 2")
//         console.log(promptString)
//     }

//     if(index === 3) {
//         const promptString = prompt("Какая нужна доп услуга?", "Услуга 3")
//         console.log(promptString)
//     }

//     // 4,5,6...

// }

// //можно переписать в 

// const promptString1 = prompt("Какая нужна доп услуга?", "Услуга 1")
// console.log(promptString1)    
// const promptString2 = prompt("Какая нужна доп услуга?", "Услуга 2")
// console.log(promptString2)
// const promptString3 = prompt("Какая нужна доп услуга?", "Услуга 3")
// console.log(promptString3)


//если условие повторяется, то

for (let index = 1; index < 10; index++) {
    const promptString = +prompt("Какая нужна доп услуга?", "Услуга " + index)
    console.log(promptString)
}
