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
