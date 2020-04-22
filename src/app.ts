class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) { // Using a TypeScript hint
    console.log("Department: ", this.name);
  }

}

const accountingDept = new Department("Accounting");
accountingDept.describe(); // "this" is not a parameter.

// const accountingCopy = { describe: accountingDept.describe };
// accountingCopy.describe(); // undefined
