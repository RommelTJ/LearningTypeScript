"use strict";
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const user1 = new Person("Rommel", 32);
user1.greet("Hi, there I am");
