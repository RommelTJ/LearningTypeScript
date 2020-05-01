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
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

type Person = {
  name: string;
  hobbies: string[];
}
type PersonAge = {
  age: number;
}
const mergedObj = merge<Person, PersonAge>({name: "Rommel", hobbies: ['Sports']}, {age: 32});
console.log(mergedObj);
console.log("name: ", mergedObj.name);
console.log("hobbies: ", mergedObj.hobbies);
console.log("age: ", mergedObj.age);
