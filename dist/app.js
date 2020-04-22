"use strict";
class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: ", this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("employees#: ", this.employees.length);
        console.log("employees: ", this.employees);
    }
}
const accountingDept = new Department("Accounting");
accountingDept.describe();
accountingDept.addEmployee("Rommel");
accountingDept.addEmployee("Liza");
accountingDept.printEmployeeInformation();
