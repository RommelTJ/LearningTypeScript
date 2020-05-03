"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Rommel", hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got not value.";
    if (element.length === 1)
        descriptionText = `Got 1 element`;
    if (element.length > 1)
        descriptionText = `Got ${element.length} elements`;
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(""));
console.log(countAndDescribe("1"));
console.log(countAndDescribe([0, 1, 3]));
