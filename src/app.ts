// let userInput: unknown;
// let username: string;
//
// userInput = 5;
// userInput = "Rommel";
// // username = userInput; // not allowed because it's unknown, but if it were 'any' it would work.
//
// if (typeof userInput === 'string') {
//   username = userInput; // allowed because of the type check. Better than 'any'.
// }
//
// // This function "never" returns.
// function generateError(message: string, code: number): never {
//   throw { message: message, errorCode: code };
// }
//
// generateError('An error occurred!', 500);

const button = document.querySelector('button');

function clickHandler(message: string) {
  console.log("Clicked!: ", message);
}

if (button) {
  button.addEventListener('click', clickHandler.bind(null, "Your message"));
}