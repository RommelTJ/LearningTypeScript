class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: ", this.name);
  }

}

const accountingDept = new Department("Accounting");
accountingDept.describe();
