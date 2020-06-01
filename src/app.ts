import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "<REDACTED>";

type GoogleGeocodingResponse = {
  results: {
    geometry: {
      location: {lat: number, lng: number}
    }
  }[],
  status: 'OK' | 'ZERO_RESULTS';
}

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;
  const encodedAddress = encodeURI(enteredAddress);

  // send this to Google's API.
  axios
    .get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GOOGLE_API_KEY}`)
    .then(response => {
      const coordinates = response.data.results[0].geometry.location;
    })
    .catch(err => {
      console.log(err);
    })
}

form.addEventListener("submit", searchAddressHandler);
