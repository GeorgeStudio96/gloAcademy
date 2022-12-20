const btn = document.querySelector('.screen-btn')

console.log(btn);

const foo = function (event) {
    console.log(event.type);
    if (event.type === 'mousedown') {
        btn.style.scale = '.8'
    } else {
        btn.style.scale = '1'
    }
}
btn.addEventListener('mousemove', foo) // вводим мышкой по области элемента
btn.addEventListener('mousedown', foo) // зажали кнопку
btn.addEventListener('mouseup', foo) // отжали кнопку
btn.addEventListener('mouseenter', foo) // навели на область элемента (игнорирует все дочерние элементы)
btn.addEventListener('mouseleave', foo) // увели из области элемента
btn.addEventListener('mouseover', foo) // включают в себя дочерние элементы (вложенные)
btn.addEventListener('mouseout', foo) // 



