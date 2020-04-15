"use strict";
function add(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + ": " + (n1 + n2));
    }
    return n1 + n2;
}
var number1;
number1 = 5;
var number2 = 2.8; // number type assignment is inferred
var printResult1 = true; // boolean type assignment is inferred
var resultPhrase = 'Result is: '; // string type assignment is inferred
// Basic Types:
// - number
// - string
// - boolean
var result = add(number1, number2, printResult1, resultPhrase);
console.log("result: ", result);
