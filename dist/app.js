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
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert({ test: 1, name: "sdg" }, "name"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("My String");
textStorage.addItem("Rommel");
textStorage.removeItem("My String");
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());
