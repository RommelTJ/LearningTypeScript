class Department {
  // private id: string;
  // private name: string; // default public
  private employees: string[] = [];

  // Using shorthand.
  constructor(private id: string, public name: string) {
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

const accountingDept = new Department("d1", "Accounting");
accountingDept.describe(); // "this" is not a parameter.

accountingDept.addEmployee("Rommel");
accountingDept.addEmployee("Liza");

// accountingDept.employees[2] = "Anna"; // Bad

accountingDept.printEmployeeInformation();
