abstract class Department {
  // private id: string;
  // private name: string; // default public
  // private employees: string[] = [];
  static fiscalYear = 2020;
  protected employees: string[] = [];

  // Using shorthand.
  constructor(protected readonly id: string, public name: string) {
  }

  static createEmployee(name: string) {
    return {name};
  }

  // Using a TypeScript hint
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("employees#: ", this.employees.length);
    console.log("employees: ", this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log(`IT Department ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  static getInstance() {
    if (AccountingDepartment.instance) return this.instance;
    this.instance = new AccountingDepartment("acc1", []);
    return this.instance;
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  get mostRecentReport() {
    if (this.lastReport) return this.lastReport;
    throw new Error("No report found.");
  }

  set mostRecentReport(text: string) {
    if (!text) throw new Error ("Please pass a valid value.");
    this.addReport(text);
  }

  describe() {
    console.log("Accounting Department ID: ", this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log("Reports: ", this.reports);
  }

  // overriding
  addEmployee(employee: string) {
    if (employee === "Rommel") {
      return;
    }
    this.employees.push(employee);
  }

}

const itDept = new ITDepartment("d1", ["Rommel"]);

itDept.describe(); // "this" is not a parameter.

const employee1 = Department.createEmployee("Rommel");
console.log("emp1: ", employee1);
console.log("fiscal year: ", Department.fiscalYear);
itDept.addEmployee(employee1.name);
itDept.addEmployee("Liza");
itDept.describe();

// accountingDept.employees[2] = "Anna"; // Bad

// itDept.printEmployeeInformation();
// console.log(itDept);

const acctDept = AccountingDepartment.getInstance();
// console.log("Most recent", acctDept.mostRecentReport); throws Error.
acctDept.mostRecentReport = "TPS Report2";
// acctDept.addReport("TPS Report");
console.log("Most recent", acctDept.mostRecentReport);
acctDept.addReport("HR Report");
console.log("Most recent", acctDept.mostRecentReport);
// acctDept.printReports();
// acctDept.printEmployeeInformation();
acctDept.describe();
acctDept.addEmployee("Test1");
acctDept.addEmployee("Rommel");
acctDept.printEmployeeInformation();
