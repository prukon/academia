let a;
function func(a) {
    if (typeof a != "string") {
        alert("Передана не строка");
    }
}
func(" привет ");

a = a.trim();
console.log(a);
