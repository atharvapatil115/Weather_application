const apiKey = "927f530bb8f0a4a991cca33609d6f095";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather_icon");
const sForm = document.getElementById("serach_form");
const dataList = document.getElementById("auto-comp");

let city = document.querySelector(".city");
let temper= document.querySelector(".temp");
let hum = document.querySelector(".humidity");
let wind = document.querySelector(".speed");
let Name=document.querySelector(".Name");
let data;

for (const city of cities) {
    // let op = document.createElement("option");
    // op.value = city;
    // op.innerText = city;
    // dataList.appendChild(op)
    dataList.innerHTML += `<option value=${city}>${city}</option>`
}

async function checkWeather(cityName) {
    console.log("API called");
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    data = await response.json();
    updateWeather();
     
}

function updateWeather() {
    console.log(data);
    Name.innerText = data.name;
    temper.innerHTML = Math.round(data.main.temp) + "°C";
    hum.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "image/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "image/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "image/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "image/Drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "image/mist.png";
    }
    
}

// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });
sForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkWeather(searchBox.value);
});



