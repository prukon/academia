let newArr = 0;
let sqr;
let arr = [20, 33, 1, "Человек", 2, 3];
for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
        console.log(arr[i]);

        newArr = newArr + Math.pow(arr[i], 3);
        sqr =  Math.sqrt(newArr);
    }
}
console.log(sqr);