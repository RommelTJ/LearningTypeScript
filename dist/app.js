"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.id} - ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("employees#: ", this.employees.length);
        console.log("employees: ", this.employees);
    }
}
class ITDepartment extends Department {
}
const accountingDept = new ITDepartment("d1", "Accounting");
accountingDept.describe();
accountingDept.addEmployee("Rommel");
accountingDept.addEmployee("Liza");
accountingDept.printEmployeeInformation();
