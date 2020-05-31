"use strict";
const form = document.querySelector("form");
const addressInput = document.getElementById("address");
const GOOGLE_API_KEY = "<REDACTED>";
const req = "https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY";
function searchAddressHandler(event) {
    event.preventDefault();
    const enteredAddress = addressInput.value;
    console.log("enteredAddress: ", enteredAddress);
}
form.addEventListener("submit", searchAddressHandler);
//# sourceMappingURL=app.js.map