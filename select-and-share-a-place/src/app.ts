import axios from 'axios';

const form = document.querySelector('form')!;
const GOOGLE_API_KEY = '';
const GOOGLE_SEARCH_BASE_URI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

interface GoogleGeocodingResponse {
    status: string,
    results: {
        geometry: {
            location: {
                lat: number,
                lng: number
            }
        }
    }[]
};

async function searchAddressHandler(event: Event) {
    event.preventDefault();
    const userInput = document.getElementById('address')! as HTMLInputElement;
    const address = userInput.value;

    try {
        const response = await axios.get<GoogleGeocodingResponse>(`${GOOGLE_SEARCH_BASE_URI}${encodeURI(address)}&key=${GOOGLE_API_KEY}`);
        const coordinates = response.data.results[0].geometry.location;

        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: coordinates,
            zoom: 8
        });
        new google.maps.Marker({ position: coordinates, map: map });
    } catch (e) {
        console.error(e);
    }
}

form?.addEventListener('submit', searchAddressHandler);
