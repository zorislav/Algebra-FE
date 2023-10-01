const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const currentWeatherItemsEl = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone')
const inputLocation = document.getElementById('input-location');
const countryEl = document.getElementById('country');
const weatherForecastEl = document.getElementById('weather-forecast');
const currentTempEl = document.getElementById('today');
const inputEl = document.getElementById('input');
const buttonEl = document.getElementById('button');

const API_KEY ='49cc8c821cd2aff9af04c9f98c36eb74';

function getCurrentLocation(){

    navigator.geolocation.getCurrentPosition((success) => {

        displayDate();
        let {latitude, longitude} = success.coords;
        getWeatherData(latitude, longitude);
    }, (fail) => {
        const lat = localStorage.getItem('latitude');
        const lon = localStorage.getItem('longitude');
        if (lat && lon) {
            getWeatherData(lat, lon);
        }
    });

}

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

function showWeatherData(data) {
    
    let {humidity, pressure, sunrise, sunset, wind_speed} = data.current;

    timezone.innerHTML = data.timezone;
    countryEl.innerHTML = data.lat + 'N '+ data.lon + 'E'
    currentWeatherItemsEl.innerHTML =  `
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
      `;
    }else{
      otherDayForcast += `
        <div class="weather-forecast-item">
          <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
          <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
          <div class="temp">Night - ${day.temp.night}&#176;C</div>
          <div class="temp">Day - ${day.temp.day}&#176;C</div>
        </div>
      `;
    }
  });
  weatherForecastEl.innerHTML = otherDayForcast;
}

async function getCityLatLon(cityName) {

    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    const data = await response.json();
    
    const retLat = data [0].lat;
    const retLon = data[0].lon;

    const coordinates = {
        latitude: retLat,
        longitude: retLon
    }

    localStorage.setItem('latitude', retLat);
    localStorage.setItem('longitude', retLon);      

    return coordinates;
}

async function getWeatherData(latitude, longitude) {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`);
    const data = await response.json();

    displayDate(data.timezone_offset);

    showWeatherData(data);

};

async function buttonElOnClick() {

    const cityName = inputEl.value.trim();
  
    inputLocation.innerHTML = cityName ? cityName : 'Current Location';
  
    const coordinates = await getCityLatLon(cityName);

    getWeatherData(coordinates.latitude, coordinates.longitude);
  
    inputEl.value = '';
  
  }

buttonEl.addEventListener('click', buttonElOnClick);


getCurrentLocation();