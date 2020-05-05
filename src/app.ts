function Logger(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string) {
  return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    }
  };
}

@Logger("Logging...")
@WithTemplate("<h1>My Person Object</h1>", "app")
class Person {
  name = "Rommel";

  constructor() {
    console.log("Creating person object...");
  }

}

const pers = new Person(); // WithTemplate now only shows until a Person obj is instantiated.
console.log("pers: ", pers);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property Decorator: ", target, propertyName);
}

// access decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter Decorator");
  console.log(target);
  console.log(name);
  console.log(position); // 0 for our example
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("Invalid price: Should be positive!");
    }
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }

}

// Decorators do behind the scenes setup work. They don't run when they execute. They're not event listeners.
const p1 = new Product('Book 1', 10);
const p2 = new Product('Book 2', 12);
