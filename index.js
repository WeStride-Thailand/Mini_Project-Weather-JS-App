const  apiKey = "8615a8a0af8464e5c29e4f08017ab692";
const  apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const  reponse = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await reponse.json();

    console.log(data);

     // เพิ่มสุดท้ายเลย if else
    if (!data.name) {
        console.log('123');
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector('.humidity').innerHTML = data.main.temp + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } 
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } 
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        // เพิ่มสุดท้าย
        document.querySelector('.weather').style.display = "block"; 
    }


}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

