"use strict";
const userName = "Rommel";
let age = 30;
age = 29;
const add = (a, b) => a + b;
console.log("add 2 + 7: ", add(2, 7));
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', e => console.log(e));
}
printOutput(add(1, 2));
