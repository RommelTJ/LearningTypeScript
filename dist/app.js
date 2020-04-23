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
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
const itDept = new ITDepartment("d1", ["Rommel"]);
itDept.describe();
itDept.addEmployee("Rommel");
itDept.addEmployee("Liza");
itDept.printEmployeeInformation();
console.log(itDept);
