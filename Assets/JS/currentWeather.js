//DOM Elements
let weatherSearch = document.getElementById("weatherSearch");
let searchButton = document.getElementById("searchButton");
let currentLocation = document.getElementById("currentLocation");
let currentTime = document.getElementById("currenttime")
let currentTemperature = document.getElementById("currenttemperature");
let currentDescription = document.getElementById("currentdescription");
let currentWindSpeed = document.getElementById("currentwindspeed");
let currentHumidity = document.getElementById("currenthumidity");
let currentFeelsLike = document.getElementById("currentfeelslike");
let currentVisibility = document.getElementById("currentvisibilty");
let currentUV = document.getElementById("currentuvindex");
let currentpressure = document.getElementById("currentpressure");
let currentgustspeed = document.getElementById("currentgustspeed");
let weather = document.getElementById("weather");
//Async function to get Weather Info from the weather API
async function getWeather(event){
    event.preventDefault();
    let searchValue = weatherSearch.value;
    if(searchValue){
        
    }
    try{
        let response;
        if(searchValue){
            response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=94ed6d6aa55644f58c7130043240205&q=${searchValue}`, {mode: 'cors'})

        } else{
            response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=94ed6d6aa55644f58c7130043240205&q=Nigeria`, {mode: 'cors'})
        }

        if (response.ok) {
            const { location, current, forecast } = await response.json();
            console.log(forecast)
            console.log(location, current)
            let time = current.last_updated.split(" ")
            currentTime.innerText = time[1]
            currentLocation.innerText = location.name + ", " + location.country
            currentTemperature.innerText = current.temp_c + "°C" 
            currentDescription.innerText = current.condition.text
            currentWindSpeed.innerText = current.wind_kph + "km/h";
            currentHumidity.innerText = current.humidity + "%";
            currentFeelsLike.innerText = current.feelslike_c + "°C";
            currentVisibility.innerText = current.vis_km + "km";
            currentUV.innerText = current.uv;
            currentpressure.innerText = current.pressure_mb + "mb";
            currentgustspeed.innerText = current.gust_kph + "km/h";
            weather.src = current.condition.icon

         } else {
            console.log('Error fetching weather data:', response.status);
        }}

    catch (error) {
            console.log('An error occurred:', error);
        }
}

window.addEventListener('load', getWeather )
searchButton.addEventListener('click', getWeather);