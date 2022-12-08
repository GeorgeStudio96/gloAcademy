let text = 'Hello, world'

console.log(text.charAt(3))
console.log(text[0])
console.log(text.substring(1, 10))
console.log(text.slice(-8))
console.log(text.indexOf('world'))
console.log(text.includes('world'))
// console.log(text.replace('Hello', 'Bye'))

console.log(text.split(', '))


let potato = 10

for (let i = 0; i < potato; i++) {
    if (i === 5) break
    console.log(i)
}
