const btn = document.querySelector('.screen-btn')
const input = document.querySelector('.main-controls__input > input')
const textChange = document.querySelector('.text-change')
const inputRange = document.querySelector('input[type=range]')
const rangeValue = document.querySelector('.range-value')
const linkTest = document.querySelector('.link-test')


document.addEventListener('DOMContentLoaded', function () {
    console.log('Dom Loaded!');
})


const foo = function (event) {
    console.log(event.type);
    console.dir(event.target.value);
    rangeValue.innerHTML = event.target.value + '%'

    /*
    if (event.type === 'mousedown') {
        btn.style.scale = '.8'
    } else {
        btn.style.scale = '1'
    }
    */
}

// input.addEventListener('input', foo) // срабатывает при действиях в инпуте
// input.addEventListener('focus', foo) // срабатывает при Focus инпута
// input.addEventListener('blur', foo) // срабатывает при unFocus инпута
// input.addEventListener('change', foo) // срабатывает при изменения в инпуте
inputRange.addEventListener('input', foo)
inputRange.addEventListener('change', foo)






/*

btn.addEventListener('mousemove', foo) // вводим мышкой по области элемента
btn.addEventListener('mousedown', foo) // зажали кнопку
btn.addEventListener('mouseup', foo) // отжали кнопку
btn.addEventListener('mouseenter', foo) // навели на область элемента (игнорирует все дочерние элементы)
btn.addEventListener('mouseleave', foo) // увели из области элемента
btn.addEventListener('mouseover', foo) // включают в себя дочерние элементы (вложенные)
btn.addEventListener('mouseout', foo) //

*/


linkTest.addEventListener('click', function (e) {
    e.preventDefault() // отменяет стандартное поведение элементов
    // отменили переход по ссылке
})

document.addEventListener('contextmenu', function (e) {
    e.preventDefault(); // закрывает контекстное меню, при клике на правую кнопку мыши
    console.log('Где меню?');
})

