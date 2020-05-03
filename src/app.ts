// Generics
// const names: Array<string> = ["Rommel", "Liza"];
// const names: string[] = ["Rommel", "Liza"]; // equivalent
//
// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("This is done!")
//   }, 2000);
// });
//
// promise.then(data => {
//   data.split(' '); // we can do this because TypeScript knows it will yield a string
// });

// Generic Function
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: "Rommel", hobbies: ['Sports']}, {age: 30});
console.log(mergedObj);

interface Lengthy {
  length: number;
}

// Returning a Tuple.
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got not value.";
  if (element.length === 1) descriptionText = `Got 1 element`;
  if (element.length > 1) descriptionText = `Got ${element.length} elements`;
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(""));
console.log(countAndDescribe("1"));
console.log(countAndDescribe([0, 1, 3]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

console.log(extractAndConvert({test: 1, name: "sdg"}, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }

}

const textStorage = new DataStorage<string>();
textStorage.addItem("My String");
textStorage.addItem("Rommel");
textStorage.removeItem("My String");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.removeItem(1);
console.log(numberStorage.getItems());

// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: "Rommel"});
// objectStorage.addItem({name: "Liza"});
// objectStorage.removeItem({name: "Rommel"});
// console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

console.log("Goal: ", createCourseGoal("Test1", "test2", new Date()));

const names: Readonly<string[]> = ["Rommel", "Anna"];
// names.push("Liza"); // error - not allowed
// names.pop(); // error - not allowed
console.log(names);
// You can also use Readonly with objects