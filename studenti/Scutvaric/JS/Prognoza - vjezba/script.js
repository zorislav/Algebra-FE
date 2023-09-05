const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const inputLocation = document.getElementById('input-location');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('today');
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

function getCurrentLocation() {

    navigator.geolocation.getCurrentPosition ((success) => {
        
        displayDate();
        let {latitude,longitude} = success.coords;
        getWeatherData(latitude, longitude); 
    }, (fail) => {
        const lat = localStorage.getItem('latitude');
        const lon = localStorage.getItem('longitude');
        if (lat && lon) {
            getWeatherData(lat,lon);
        }
    });
    }