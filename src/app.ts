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
