"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Rommel", hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
