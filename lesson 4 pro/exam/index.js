let have = [];
let summOne= [];
let mass = [];
function getFriendlyNumbers(start, end) {
let delta = end - start;
for (let i = start; i <= end; i++) {
    for (let n = 1; n < i; n++) {
        let del =  i%n
        if(del == 0) {
         have.push(n)
        }
//  console.log(i + "/" + n + " = " + del);
     }
     for(let j = 0; j <have.length; j++){
         summOne = +summOne + have[j];
     }
     mass[i] = summOne;
     summOne = []
     have = []
}

a=[];
mass.forEach(function(item, i){
    m = i + "  " + item ;
    console.log(i + " =  " + item );
});


var result = {};

Object.entries(mass)
.forEach(item=>{
	if( result[item[1]] == item[0])
  	return;
	if(mass[item[1]] == item[0])
  	result[item[0]] = item[1];
})

document.getElementById("display").innerHTML = `Исходные данные:
${JSON.stringify(mass)}

Результат: 
${JSON.stringify(result)}`;



}
getFriendlyNumbers(1,300);







//     let del =  start%i
//     if(del == 0) {
//      have.push(i)
//     }
// console.log(start + "/" +i + " = " + del);
//  }
//  for(let j = 0; j <have.length; j++){
//      summOne = summOne + have[j];
//  }
//  console.log(summOne)


//     for (let i = 1; i < start; i++) {
//        let del =  start%i
//        if(del == 0) {
//         have.push(i)
//        }
// console.log(start + "/" +i + " = " + del);
//     }
//     for(let j = 0; j <have.length; j++){
//         summOne = summOne + have[j];
//     }
//     console.log(summOne)



  


    // return [start, end]
// }








// module.exports = {
//     firstName: 'Евгений',
//     secondName: 'Устьян',
//     task: getFriendlyNumbers
// }