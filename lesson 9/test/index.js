// 'use strict'
// создание объекта(класса) es5
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello! ' + this.name);
//     };
// }
// //обращение к объекту через prototype
// User.prototype.exit = function (name) {
//     console.log('Пользователь ' + this.name + ' ушел');
// }

// создание объекта(класса) es6
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log('Hello! ' + this.name);
    }
    exit() {
        console.log('Пользователь ' + this.name + ' ушел');
    }
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
ivan.hello();
ivan.exit();


//___

function showThis(a, b) {
    console.log(this);

    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum());
}
showThis(4, 5);

let obj = {
    a: 20,
    b: 15,
    sum: function () {
        console.log(this);

        function shout() {
            console.log(this);
        }
        shout();
    }
}
obj.sum();

// 1) Просто вызов функции - windows/indefined
// 2) Метод объекта this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind

console.log("__________")
let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}
console.log(sayName.call(user, 'Smith')) //1 способ изменения контекста
console.log(sayName.apply(user, ['Snow'])) //2 способ контекста

console.log("__________")

function count(number) {
    return this * number;
}
let double = count.bind(2); //3 способ контекста
console.log(double(3));
console.log(double(10));
console.log("__________")

let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    console.log(this);
this.style.backgroundColor = 'red';
function showThis(){
    console.log(this)
}
showThis();
})

