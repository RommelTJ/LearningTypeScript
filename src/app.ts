interface AddFn {
  (a: number, b: number): number;
}

// type AddFn = (a: number, b: number) => number;
let add: AddFn = (n1: number, n2: number) => n1 + n2;

interface Named {
  readonly name: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, age: number) {
    this.name = n;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`)
  }

}

let user1: Greetable;
user1 = new Person("Rommel", 32);
user1.greet("Hi, there I am");
