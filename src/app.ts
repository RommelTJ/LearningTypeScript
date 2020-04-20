const userName = "Rommel";
// let age = 30;
// age = 29;

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

// default arguments have to be last on the list.
// const add = (a: number, b: number = 1) => a + b;
//
// console.log("add 2 + default: ", add(2));
//
// const printOutput: (a: number | string) => void = output => console.log(output);
// const button = document.querySelector('button');
// if (button) {
//   button.addEventListener('click', e => console.log(e));
// }
//
// printOutput(add(1));

const hobbies = ["Sports", "Cooking"];
console.log(hobbies[0]);
const activeHobbies = ["Hiking"];
// activeHobbies.push(hobbies[0], hobbies[1]);
activeHobbies.push(...hobbies);
console.log("activeHobbies: ", activeHobbies);

const person = {
  nickname: "Rommel",
  age: 32
};

const copiedPerson = {...person};
console.log("copiedPerson: ", copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log("addedNumbers: ", addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log("hobby1: ", hobby1);
console.log("hobby2: ", hobby2);
console.log("remainingHobbies: ", remainingHobbies);

const {nickname: username, age} = person;
console.log("username: ", username);
console.log("age: ", age);
