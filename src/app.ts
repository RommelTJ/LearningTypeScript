class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) { // Using a TypeScript hint
    console.log("Department: ", this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log("employees#: ", this.employees.length);
    console.log("employees: ", this.employees);
  }
}

const accountingDept = new Department("Accounting");
accountingDept.describe(); // "this" is not a parameter.

accountingDept.addEmployee("Rommel");
accountingDept.addEmployee("Liza");

accountingDept.printEmployeeInformation();
