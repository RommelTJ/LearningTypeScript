"use strict";
let add = (n1, n2) => n1 + n2;
class Person {
    constructor(n, age) {
        this.name = n;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person("Rommel", 32);
user1.greet("Hi, there I am");
