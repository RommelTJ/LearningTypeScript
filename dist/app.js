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
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log("Reports: ", this.reports);
    }
    addEmployee(employee) {
        if (employee === "Rommel") {
            return;
        }
        this.employees.push(employee);
    }
}
const itDept = new ITDepartment("d1", ["Rommel"]);
itDept.describe();
itDept.addEmployee("Rommel");
itDept.addEmployee("Liza");
itDept.printEmployeeInformation();
console.log(itDept);
const acctDept = new AccountingDepartment("d2", []);
acctDept.addReport("TPS Report");
acctDept.addReport("HR Report");
acctDept.printReports();
acctDept.printEmployeeInformation();
acctDept.addEmployee("Test1");
acctDept.addEmployee("Rommel");
acctDept.printEmployeeInformation();
