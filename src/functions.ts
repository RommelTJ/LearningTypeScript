function add1(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: ", num);
}

function addAndHandle(n1: number, n2: number, callback: (n: number) => void) {
  const result = n1 + n2;
  callback(result);
}

printResult(add1(5, 12));

// let combineValues: Function;
let combineValues: (n1: number, n2: number) => number;
combineValues = add1;
console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log("Got result: ", result);
});
