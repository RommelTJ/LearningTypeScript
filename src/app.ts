import axios from "axios";
declare var google: any;

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
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const coordinates = response.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
      new google.maps.Marker({position: coordinates, map: map});
    })
    .catch(err => {
      alert(err.message);
      console.log(err);
    })
}

form.addEventListener("submit", searchAddressHandler);
