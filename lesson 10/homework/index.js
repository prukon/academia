'use strict';
class options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    dev() {
        var d=document.createElement('div');
        d.style.cssText=`width: ${this.width}; height: ${this.height}; background: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
        // d.style.width=this.width;
        // d.style.height=this.height;
        // d.style.background=this.bg;
        // d.style.fontSize=this.fontSize;
        // d.style.textAlign=this.textAlign; 
        d.textContent = "Hello, World";
        document.body.appendChild(d);
    }
}

const square = new options('100px','100px', 'red', '22px','center');

console.log(square.dev())

