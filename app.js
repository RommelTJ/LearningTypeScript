var userInput;
var username;
userInput = 5;
userInput = "Max";
// username = userInput; // not allowed because it's unknown, but if it were 'any' it would work.
if (typeof userInput === 'string') {
    username = userInput; // allowed because of the type check. Better than 'any'.
}
