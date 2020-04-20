"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = "Rommel";
var hobbies = ["Sports", "Cooking"];
console.log(hobbies[0]);
var activeHobbies = ["Hiking"];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log("activeHobbies: ", activeHobbies);
var person = {
    nickname: "Rommel",
    age: 32
};
var copiedPerson = __assign({}, person);
console.log("copiedPerson: ", copiedPerson);
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (curResult, curValue) {
        return curResult + curValue;
    }, 0);
};
var addedNumbers = add(5, 10, 2, 3.7);
console.log("addedNumbers: ", addedNumbers);
var hobby1 = hobbies[0], hobby2 = hobbies[1], remainingHobbies = hobbies.slice(2);
console.log("hobby1: ", hobby1);
console.log("hobby2: ", hobby2);
console.log("remainingHobbies: ", remainingHobbies);
var username = person.nickname, age = person.age;
console.log("username: ", username);
console.log("age: ", age);
