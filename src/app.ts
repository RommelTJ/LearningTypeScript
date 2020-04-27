interface Greetable {
  name: string;
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

const user1: Person = new Person("Rommel", 32);
user1.greet("Hi, there I am");
