interface AddFn {
  (a: number, b: number): number;
}

// type AddFn = (a: number, b: number) => number;
let add: AddFn = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(n?: string) {
    if (n) this.name = n;
    this.age = 32;
  }

  greet(phrase: string) {
    if (this.name) console.log(`${phrase} ${this.name}`);
    else console.log("Hi!");
  }

}

let user1: Greetable;
user1 = new Person();
user1.greet("Hi, there I am");
