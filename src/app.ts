type Admin = {
  name: string;
  privileges: string[];
};

type GeneralEmployee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & GeneralEmployee;

const e1: ElevatedEmployee = {
  name: "Rommel",
  privileges: ["create-server"],
  startDate: new Date()
};

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric; // number type because the intersection of union types is number.

// type guard
function add(a: Combineable, b: Combineable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = GeneralEmployee | Admin;

// Second kind of Type Guard
function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: ", emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: ", emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Start Date: ", emp.startDate);
  }
}

printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo...", amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

// A third kind of Type Guard
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(10);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated Union Pattern
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// Discriminated Union
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: ", speed);
}

moveAnimal({type: "bird", flyingSpeed: 10});
moveAnimal({type: "horse", runningSpeed: 6});

// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hi there3!";
}
