"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Rommel" }, { age: 32 });
console.log(mergedObj);
console.log("name: ", mergedObj.name);
console.log("age: ", mergedObj.age);
