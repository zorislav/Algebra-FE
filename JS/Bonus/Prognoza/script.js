
// Deklaracija varijabli za pristup elementima
const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const inputLocation = document.getElementById('input-location');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('current-temp');
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');

// Deklaracija nizova za dene u tjednu i mjesece u godini
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// API ključ
const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

// Funkcija koja prikazuje datum za izabranu lokaciju
function displayDate(tzOff) {
    
    const mom  = tzOff ? window.moment().utcOffset(tzOff/60) : window.moment();

    const day = mom.format("dddd");
    const date = mom.format("DD");
    const month = mom.format("MMMM");
    const hour = mom.format("HH");
    const minute = mom.format("mm");

    timeEl.innerHTML = `${hour}:${minute}`;
    dateEl.innerHTML = `${day}, ${date} ${month}`; 

}

// Funkcija koja čita trenutnu lokaciju
function getCurrentLocation() {

    navigator.geolocation.getCurrentPosition((success) => {

        // Ako je procitana trenutna lokacija browsera

        // Prikazi lokalni datum i vrijeme
        displayDate();

        // Ucitaj i prikazi lokalne podatke
        let {latitude, longitude} = success.coords;
        getWeatherData(latitude, longitude);

    }, (fail) => {

        // Ako nije procitana trenutna lokacija browsera

        // Ucitaj latitude i longitude iz local storage
        const lat = localStorage.getItem('latitude');
        const lon = localStorage.getItem('longitude');
        
        // Ako postoje spremljeni latitude i longitude ucitaj i prikazi podatke za tu lokaciju
        if ( lat && lon ) {
            getWeatherData(lat, lon);
        }

    });

}

// Funkcija koja ucitava podatke za danu duzinu i sirinu i poziva funkciju koja prikazuje ucitane podatke
async function getWeatherData(latitude, longitude) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    const data = await response.json();

    // Prikazi datum i vrijeme za izabranu lokaciju
    displayDate(data.timezone_offset);

    // Prikazi podatke za izabranu lokaciju
    showWeatherData(data);

}


// Za izabranu lokaciju procitaj koordinate
async function getCityLatLon(cityName) {

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    const retLat = data[0].lat;
    const retLon = data[0].lon;

    const coordinates = {
        latitude: retLat,
        longitude: retLon
    }

    // Spremi duzinu i sirinu u local storage
    localStorage.setItem('latitude', retLat);
    localStorage.setItem('longitude', retLon);    

    return coordinates;

}

// Click listener funkcija za trazi button
async function buttonElOnClick() {
    const cityName = inputEl.value.trim();

    inputLocation.innerHTML = cityName ? cityName : 'Current Location';

    const coordinates = await getCityLatLon(cityName);

    getWeatherData(coordinates.latitude, coordinates.longitude);

    inputEl.value = '';

}

// Funkcija koja prikazuje ucitane podatke
function showWeatherData (data){

    // Izdvoji dio ucitanih podataka
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    // Prikazi vremensku zonu, duzinu i sirinu
    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N ' + data.lon+'E'


    // Prikazi vlagu, tlak, brzinu vjetra, vrijeme izlaska i zalaska sunca
    currentWeatherItemsEl.innerHTML = 
    `
        <div class="weather-item">
            <div>Humidity</div>
            <div>${humidity}%</div>
        </div>
        <div class="weather-item">
            <div>Pressure</div>
            <div>${pressure}</div>
        </div>
        <div class="weather-item">
            <div>Wind Speed</div>
            <div>${wind_speed}</div>
        </div>

        <div class="weather-item">
            <div>Sunrise</div>
            <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
        </div>
        <div class="weather-item">
            <div>Sunset</div>
            <div>${window.moment(sunset*1000).format('HH:mm a')}</div>
        </div>
    `;

    // Prikazi sadrzaj za slijedecih 7 dana
    let otherDayForcast = ''
    data.daily.forEach((day, idx) => {
        if(idx == 0){
            currentTempEl.innerHTML = `
            <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
            <div class="other">
                <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
           `
        }else{
            otherDayForcast += `
            <div class="weather-forecast-item">
                <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
                <div class="temp">Night - ${day.temp.night}&#176;C</div>
                <div class="temp">Day - ${day.temp.day}&#176;C</div>
            </div>
            
            `
        }
    })
    weatherForecastEl.innerHTML = otherDayForcast;
}


// Dodaj click event listener na buttonEl
buttonEl.addEventListener('click', buttonElOnClick);

// Na pocetku izvrsavanja programa pročitaj trenutnu lokaciju
getCurrentLocation();




