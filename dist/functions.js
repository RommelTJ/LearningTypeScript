"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: ", num);
}
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
printResult(add1(5, 12));
let combineValues;
combineValues = add1;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log("Got result: ", result);
});
