const userName = "Rommel";
let age = 30;
age = 29;

// var lets you used in global or function scope.
// let result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// let also has block-scope.
// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld); // can't access it now.

const add = (a: number, b: number) => a + b;

console.log("add 2 + 7: ", add(2, 7));

const printOutput: (a: number | string) => void = output => console.log(output);
const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', e => console.log(e));
}

printOutput(add(1, 2));
