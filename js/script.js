"use strict";
const number=[1 , 2 , 3, 4, 5];
console.log(number);
let totale=0;
for (let i = 0; i < number.length; i++) {
    if (i % 2 !==0 ) {
        totale= totale + number[i];
    }    
}

console.log(totale);