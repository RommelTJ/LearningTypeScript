class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

}

const accountingDept = new Department("Accounting");
console.log("accounting: ", accountingDept);
