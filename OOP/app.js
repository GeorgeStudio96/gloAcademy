'use strict'

window.onload = () => {

    const DomElement = function (selector, height, width, bg, fontSize) {
        this.selector = selector
        this.height = height
        this.width = width
        this.bg = bg
        this.fontSize = fontSize

    }


    DomElement.prototype.createElement = function () {
        if (this.selector.startsWith('.')) {
            const newElem = document.createElement('div')
            newElem.classList.add('block')
            newElem.innerHTML = 'Text'
            newElem.style.cssText = `font-size: ${this.fontSize}; 
                    background: ${this.bg}; color: white; 
                    width: ${this.width}; height: ${this.height}; display: flex; align-items: center;
                    justify-content: center`
            document.body.append(newElem);
        } else if (this.selector.startsWith('#')) {
            const newElem = document.createElement('p')
            newElem.setAttribute('id', 'best')
            newElem.innerHTML = 'TextTextTextTextTextTextTextTextTextTextText'
            newElem.style.cssText = `font-size: ${this.fontSize}; color: black`
            console.log(newElem);
            document.body.append(newElem);
        }
    }


    const elem = new DomElement('.text', '300px', '300px', 'black', '18px')

    elem.createElement()
}
