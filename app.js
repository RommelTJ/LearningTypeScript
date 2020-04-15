"use strict";
let userInput;
let username;
userInput = 5;
userInput = "Rommel";
// username = userInput; // not allowed because it's unknown, but if it were 'any' it would work.
if (typeof userInput === 'string') {
    username = userInput; // allowed because of the type check. Better than 'any'.
}
// This function "never" returns.
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
