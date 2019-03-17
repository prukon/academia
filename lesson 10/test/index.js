'use strict';
let name = 'Ivan',
    age = 30,
    mail = 'ex@mail.ru';



document.write('Пользователю ' + name + ' ' + age);
document.write(`Пользователю ${name} ${age}`);

function makeArray() {
    var items = [];
    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        }
        items.push(item);
    }
    return items;
}

var arr = makeArray();
arr[1]();
arr[3]();
arr[7]();

// let fun = () => {
// console.log(this)
// };
// fun()

let obj = {
    nember:5,
    sayNamber:function(){
        let say=()=> {
            console.log(this)
        };
        say();
    }
};

obj.sayNamber();

 function calcOrDouble (number, basis = 2) {
    // basis = basis || 2; //es 5
    console.log(number*basis)
 }

 calcOrDouble(3,5);
 calcOrDouble(6);

 //Создание класса
class Rectangle {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
//экзепляр класса
    calcArea(){ 
        return this.height * this.width;
    }
}

const square = new Rectangle(10,10);
console.log(square.calcArea())

let video= ['youtube, vimeo'],
blogs = ['wordpress', 'lifejornal'],
internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log (a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
let number =[1,2,3];
log(...number)