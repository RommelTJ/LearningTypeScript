"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(`${phrase}: ${n1 + n2}`);
    }
    return n1 + n2;
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult1 = true;
const resultPhrase = 'Result is: ';
const result = add(number1, number2, printResult1, resultPhrase);
console.log("result: ", result);
