"use strict";
let add = (n1, n2) => n1 + n2;
class Person {
    constructor(n) {
        if (n)
            this.name = n;
        this.age = 32;
    }
    greet(phrase) {
        if (this.name)
            console.log(`${phrase} ${this.name}`);
        else
            console.log("Hi!");
    }
}
let user1;
user1 = new Person();
user1.greet("Hi, there I am");
