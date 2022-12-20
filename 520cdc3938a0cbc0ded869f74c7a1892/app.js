const books = document.querySelector('.books')
const book = document.querySelectorAll('.book')
const headingBook = document.querySelectorAll('h2 > a')
const adv = document.querySelector('.adv')
const lists = document.querySelectorAll('ul')
const li = document.querySelectorAll('li')



adv.remove();

book[0].before(book[1])
book[2].before(book[4])
book[2].before(book[3])
book[2].before(book[5])

document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')"


headingBook[4].innerHTML = 'Книга 3. this и <b>Прототипы</b> Объектов'



// книга 2
lists[0].append(li[4], li[5], li[7], li[9], li[2], li[10])

// книга 5
lists[5].prepend(li[46], li[47], li[55], li[49], li[50], li[48])
lists[5].append(li[51], li[54], li[56])

// книга 6

const cloneElem = li[5].cloneNode(true)
cloneElem.textContent = 'Глава 8: За пределами ES6'

lists[2].insertBefore(cloneElem, li[26])










