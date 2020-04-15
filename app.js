"use strict";
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
button.addEventListener('click', () => {
    console.log("Clicked!");
});
//# sourceMappingURL=app.js.map