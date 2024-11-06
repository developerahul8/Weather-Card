const input = document.querySelector(".input");
const search = document.querySelector(".searchBtn");
let cityName = document.querySelector(".cityName");
const apiKey = "f9ab0791b7b3fd987482c4d1cb0b130a";


search.addEventListener("click",()=> {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
    .then((res) => res.json())
    .then((data) => {
        cityName.textContent = data.name
        console.log(data);
    })
})


