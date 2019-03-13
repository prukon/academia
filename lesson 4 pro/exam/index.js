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
    // console.log("have: " + have)
     for(let j = 0; j <have.length; j++){
         summOne = +summOne + have[j];
     }
     mass[i] = summOne;
     summOne = []
     have = []
    //  console.log(mass)
}



a=[];
mass.forEach(function(item, i){

    // for (j= start; j < end; j++){
    //     console.log(j + " - " +  item  + " - " + i);

    // }
    m = i + "  " + item ;
    console.log(i + "  " + item );
// a.push(m);

});
// console.log(a)

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