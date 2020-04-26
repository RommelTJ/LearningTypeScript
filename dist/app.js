"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log("employees#: ", this.employees.length);
        console.log("employees: ", this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department ID: ${this.id}`);
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport)
            return this.lastReport;
        throw new Error("No report found.");
    }
    set mostRecentReport(text) {
        if (!text)
            throw new Error("Please pass a valid value.");
        this.addReport(text);
    }
    describe() {
        console.log("Accounting Department ID: ", this.id);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
const employee1 = Department.createEmployee("Rommel");
console.log("emp1: ", employee1);
console.log("fiscal year: ", Department.fiscalYear);
itDept.addEmployee(employee1.name);
itDept.addEmployee("Liza");
itDept.describe();
const acctDept = new AccountingDepartment("d2", []);
acctDept.mostRecentReport = "TPS Report2";
console.log("Most recent", acctDept.mostRecentReport);
acctDept.addReport("HR Report");
console.log("Most recent", acctDept.mostRecentReport);
acctDept.describe();
acctDept.addEmployee("Test1");
acctDept.addEmployee("Rommel");
acctDept.printEmployeeInformation();
