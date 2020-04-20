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
const hobbies = ["Sports", "Cooking"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log("activeHobbies: ", activeHobbies);
const person = {
    name: "Rommel",
    age: 32
};
const copiedPerson = Object.assign({}, person);
console.log("copiedPerson: ", copiedPerson);
