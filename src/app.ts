class Department {
  // private id: string;
  // private name: string; // default public
  // private employees: string[] = [];
  protected employees: string[] = [];

  // Using shorthand.
  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) { // Using a TypeScript hint
    console.log(`Department: ${this.id} - ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
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

itDept.addEmployee("Rommel");
itDept.addEmployee("Liza");

// accountingDept.employees[2] = "Anna"; // Bad

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
