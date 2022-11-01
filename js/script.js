const key = "##"
const contryURL = "https://countryflagsapi.com/png/";
const resultCity = document.querySelector("#resultCity");
const searchButton = document.querySelector("#chooseCity");

const cityElement = document.querySelector("#resultCity");
const countryElement = document.querySelector(".conutryFlag");
const weatherElement = document.querySelector(".weatherText");
const imageElement = document.querySelector(".weatherImage");
const temperatureElement = document.querySelector("#temperature");
const humidityElement = document.querySelector("#humidity");
const windElement = document.querySelector("#wind");


const getWeatherData = async(resultCity) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${resultCity}&units=metric&appid=${key}&lang=pt_br`

    const result = await fetch(apiWeatherURL);
    const data = await result.json();

    console.log(data);
}


const showWeatherData = (resultCity) => {

    getWeatherData(resultCity);
}


function searchCity() {
    const resultCity = document.querySelector("#chooseCity").value;


}