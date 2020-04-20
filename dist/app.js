"use strict";
const userName = "Rommel";
let age = 30;
age = 29;
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
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log("addedNumbers: ", addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log("hobby1: ", hobby1);
console.log("hobby2: ", hobby2);
console.log("remainingHobbies: ", remainingHobbies);
