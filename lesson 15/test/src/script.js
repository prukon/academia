//инкапсуляция
function User(name, age) {
    this.name = name;
    this.age = age;
    let userAge = age;
    this.getAge = function () {
        return userAge;
    };
    this.setAge = function (age) {
        if (typeof age === "number" && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log("Недопустимое значение");
        }
    };
    this.say = function () {
        console.log(`Имя пользователя ${this.name}, возвраст: ${this.userAge}`);
    };
}

// let user = new User('Ivan', 25);
// console.log(user.name);
// console.log(user.userAge);
// user.say();
// console.log(user.getAge());
// user.setAge(30);
// console.log(user.getAge());



//Модули
let number = 1;
(function () {
    let number = 2;
    console.log(number);
    return console.log(number + 3);
}());
console.log(number);

//Объектный интерфейс
let user = (function () {
    let privat = function () {
        console.log('I am private');
    };
    let sayHello = function () {
        console.log('Hello');
    };
    return {
        sayHello: sayHello
    };
}());


console.log(user);
console.log(user.sayHello());

function myModule(){
    this.hello = function(){
        return 'hello';
    }
    this.goodBye = function(){
        return 'goodbye';
    }
}

module.exports = myModule;