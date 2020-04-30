"use strict";
const names = ["Rommel", "Liza"];
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This is done!");
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
