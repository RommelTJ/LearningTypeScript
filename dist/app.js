"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: ", this.name);
    }
}
const accountingDept = new Department("Accounting");
accountingDept.describe();
const accountingCopy = { name: "Test", describe: accountingDept.describe };
accountingCopy.describe();
