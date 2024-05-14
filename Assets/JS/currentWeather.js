//DOM Elements
let weatherSearch = document.getElementById("weatherSearch");
let searchButton = document.getElementById("searchButton");
let currentLocation = document.getElementById("currentLocation");
let currentTemperature = document.getElementById("currenttemperature");
let currentDescription = document.getElementById("currentdescription");
let currentWindSpeed = document.getElementById("currentwindspeed");
let currentHumidity = document.getElementById("currenthumidity");
let currentVisibility = document.getElementById("currentvisibilty");
let currentUV = document.getElementById("currentuvindex");
let currentpressure = document.getElementById("currentpressure");
let currentSunrise = document.getElementById("currentsunrise");
let currentSunset = document.getElementById("currentsunset")
let weather = document.getElementById("weather");
let day = document.getElementById("day");
let currentTime = document.getElementById("time");
let stage = document.getElementById("stage");
let rain = document.getElementById("rain");
let hummidityComment = document.getElementById("hummidityComment");
let visbilityComment = document.getElementById("visibilityComment");
let pressureComment = document.getElementById("pressureComment");
let forecastWeather = document.getElementById("forecastweather")

// Async function to get Weather Info from the weather API
async function getWeather(event){
    event.preventDefault();
    let searchValue = weatherSearch.value;
    try{
        let response;
        // Fetching API either by default value (Port Harcourt, Nigeria) or search value entered by the user
        if(searchValue) response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=94ed6d6aa55644f58c7130043240205&q=${searchValue}`, {mode: 'cors'})
        else response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=94ed6d6aa55644f58c7130043240205&q=Port Harcourt, Nigeria`, {mode: 'cors'})
        
        if (response.ok) {
           // Destructuring Object of data gotten by the API
            const { location, current, forecast } = await response.json();

            console.log(forecast)
            console.log(location)
            console.log(current)
            
            // Defining necessary variables needed  
            let time = current.last_updated.split(" ")

            // Assigning different DOM values to data gottenn from the API
            day.innerText = dayOfTheWeek(current.last_updated) + ", "; 
            currentTime.innerText = time[1];
            currentLocation.innerText = location.name + ", " + location.country;
            rain.innerText = forecast.forecastday[0].day.daily_chance_of_rain + "%";
            currentTemperature.innerText = current.temp_c + "°C";
            currentDescription.innerText = current.condition.text
            currentWindSpeed.innerText = current.wind_kph + "km/h";
            currentHumidity.innerText = current.humidity + "%";
            humidityLevels(current.humidity)
            currentVisibility.innerText = current.vis_km + "km";
            visbilityLevels(current.vis_km)
            currentUV.innerText = current.uv;
            currentpressure.innerText = current.pressure_mb + "mb";
            pressureLevels(current.pressure_mb)
            currentSunrise.innerText = forecast.forecastday[0].astro.sunrise;
            currentSunset.innerText = forecast.forecastday[0].astro.sunset;
            weather.src = current.condition.icon
            console.log(forecast.forecastday[0].hour)
            for(let card of forecast.forecastday[0].hour){
              let forecastIcon = card.condition.icon;
              let forecastTemp = card.temp_c + "°C";
              let forecastTime = timeAMPM(new Date(card.time).getHours())

              let dailyCard = document.createElement("div")
              dailyCard.classList.add("dailyCard")
              console.log(forecastIcon)
              dailyCard.innerHTML = 
              `<img src="${forecastIcon}" class = "dailyCardIcon" alt="weather icon">
              <p class = "dailyCardTemp">${forecastTemp}</p>
              <p class = "dailyCardTime">${forecastTime}</p>
              `
              forecastWeather.appendChild(dailyCard)

              // console.log(card)
            }

         }}
    catch (error) {
            console.log('An error occurred:', error);
        }
}

// Get the day of the week 
function dayOfTheWeek(x){
    switch (new Date(x).getDay()) {
        case 0:
          return day = "Sunday";
        case 1:
          return day = "Monday";
        case 2:
           return day = "Tuesday";
        case 3:
          return day = "Wednesday";
        case 4:
          return day = "Thursday";
        case 5:
          return day = "Friday";
        case 6:
          return day = "Saturday";
      }
}

// Function for the different humidity levels
function humidityLevels(x){
    if (x < 30) hummidityComment.innerText = "Low";
    else if (x > 50) hummidityComment.innerText = "High";
    else hummidityComment.innerText = "Moderate";

}

// Function for the different visbility levels
function visbilityLevels(x){
    if (x > 16) visbilityComment.innerText = "Excellent"
    else if(x > 8) visbilityComment.innerText = "Good"
    else if(x > 3) visbilityComment.innerText = "Moderate"
    else visbilityComment.innerText = "Poor"

}

// Function for the different Pressure Levels
function pressureLevels(x){
  if(x > 1013.25) pressureComment.innerText = "High"
  else pressureComment.innerText = "Low"
}

// Function to convert time to AM and PM
function timeAMPM(x){
  if(x > 12) return (x - 12) + "pm";
  else if(x === 12) return "12pm"
  else if(x === 0) return "12am"
  else return x + "am";
}
//Event listeners for different events
window.addEventListener('load', getWeather )
searchButton.addEventListener('click', getWeather);