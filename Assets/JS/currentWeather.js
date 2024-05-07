//DOM Elements
let weatherSearch = document.getElementById("weatherSearch");
let searchButton = document.getElementById("searchButton");

//Async function to get Weather Info from the weather API
async function getWeather(event){
    event.preventDefault();
    let searchValue = weatherSearch.value;
    if(searchValue){
        
    }
    try{
        let response;
        if(searchValue){
            response = await fetch(`https://api.weatherapi.com/v1/current.json?key=94ed6d6aa55644f58c7130043240205&q=${searchValue}`, {mode: 'cors'})
        } else{
            response = await fetch('https://api.weatherapi.com/v1/current.json?key=94ed6d6aa55644f58c7130043240205&q=london', {mode: 'cors'})
        }

        if (response.ok) {
            const weatherInfo = await response.json();
            console.log(weatherInfo);
        } else {
            console.log('Error fetching weather data:', response.status);
        }}

    catch (error) {
            console.log('An error occurred:', error);
        }
}

window.addEventListener('load', getWeather)
searchButton.addEventListener('click', getWeather);