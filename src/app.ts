class Department {
  // private id: string;
  // private name: string; // default public
  private employees: string[] = [];

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

const itDept = new ITDepartment("d1", ["Rommel"]);
itDept.describe(); // "this" is not a parameter.

itDept.addEmployee("Rommel");
itDept.addEmployee("Liza");

// accountingDept.employees[2] = "Anna"; // Bad

itDept.printEmployeeInformation();
console.log(itDept);
