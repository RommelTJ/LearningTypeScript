"use strict";
const userName = "Rommel";
let age = 30;
age = 29;
const add = (a, b = 1) => a + b;
console.log("add 2 + default: ", add(2));
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', e => console.log(e));
}
printOutput(add(1));
