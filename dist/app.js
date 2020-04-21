"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
}
const accountingDept = new Department("Accounting");
console.log("accounting: ", accountingDept);
