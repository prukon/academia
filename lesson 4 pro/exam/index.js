let have = [];
let summOne = [];
let mass = [];
let have2;
let have3 = [];
let have4 = [];

function getFriendlyNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        for (let n = 1; n < i; n++) {
            let del = i % n
            if (del == 0) {
                have.push(n)
            }
            //  console.log(i + "/" + n + " = " + del);
        }
        for (let j = 0; j < have.length; j++) {
            summOne = +summOne + have[j];
        }

        mass[i] = summOne;
        summOne = []
        have = []
    }

    //  a = [];

    mass.forEach(function (item, i) {
        m = i + "  " + item;
        //   console.log(i + " =  " + item);
    });

    var result = {};
    Object.entries(mass).forEach(item => {
        if (result[item[1]] == item[0]) {
            return;
        }
        if (mass[item[1]] == item[0]) {
            result[item[0]] = item[1];
        }
    });

    have2 = JSON.stringify(result);
    have2 = result
    // document.getElementById("display").innerHTML = `Исходные данные:
    // ${JSON.stringify(mass)}

    // Результат: 
    // ${JSON.stringify(result)}`;

    //console.log(have2)

    for (key in have2) {
        if (key == have2[key]) {
            delete have2[key];
        }
    }

   // console.log(have2)
    have3 = [];

    for (key in have2) {
        let h = `${key},${have2[key]}`;

        have3.push(h);
    }
    //console.log(have3)

    for (let i = 0; i < have3.length; i++) {
        have3[i] = have3[i].split(',');
    };
   // console.log(have3);


    if (have3) {

        for (let i = 0; i < have3.length; i++) {
            for (let j = 0; j < have3[i].length; j++) {
               have3[i][j] = +have3[i][j]
            }
        }
        console.log(have3);
        
        // var have3 = have3.split(',');
        // for (let i = 0; i < have3.length; i++) {
        //     have3[i] = +have3[i]
        // }
    } 
    
    else {
        have3 = [];
    }
   
  //  have4.push(have3);
   // console.log(have4)

}
getFriendlyNumbers(1, 100);







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