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