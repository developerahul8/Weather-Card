const input = document.querySelector(".input");
const search = document.querySelector(".searchBtn");
let cityName = document.querySelector(".cityName");
let weatherImage = document.querySelector(".weatherImg");
let cityTemp = document.querySelector(".temp");
let humidity = document.querySelector(".humidityText");
let wind = document.querySelector(".windText");
const apiKey = "f9ab0791b7b3fd987482c4d1cb0b130a";


search.addEventListener("click",()=> {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
        cityName.textContent = data.name
        cityTemp.textContent = `${Math.round(data.main.temp)}°C`
        humidity.innerText = `${data.main.humidity}%`
        wind.innerText = `${data.wind.speed} km/h`
        console.log(data);
        let weather = data.weather[0].main;
        switch(weather){
            case "Clouds":
                weatherImage.src = "./images/clouds.png"
                break;
            case "Drizzle":
                weatherImage.src = "./images/drizzle.png"
                break;
            case "Humidity":
                weatherImage.src = "./images/humidity.png"
                break;
            case "Mist":
                weatherImage.src = "./images/mist.png"
                break;
            case "Rain":
                weatherImage.src = "./images/rain.png"
                break;
            case "Snow":
                weatherImage.src = "./images/snow.png"
                break;
            default:weatherImage.src = "./images/clear.png"
        }
    })
})


