function add(n1: number, n2: number, showResult: boolean): number {
  if (showResult) {
    console.log("n1 + n2: ", n1 + n2);
  }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;

// Basic Types:
// - number
// - string
// - boolean

const result = add(number1, number2, printResult);
console.log("result: ", result);
