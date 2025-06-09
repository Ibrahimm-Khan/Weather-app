let lat = document.getElementsByClassName("latitude");
let long = document.getElementsByClassName("longitude");
let btn = document.querySelector("button");
let temp = document.querySelector(".temp");
let windVal = document.querySelector(".windVal");
let timeVal = document.querySelector(".timeVal");

const weather = async () => {
  let lat1 = lat[0].value;
  let long1 = long[0].value;

  if (lat1 !== "" && long1 !== "") {
    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat1}&longitude=${long1}&current_weather=true`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    temp.innerText =
      data.current_weather.temperature + data.current_weather_units.temperature;
    windVal.innerText = data.current_weather.windspeed + "km/h";
    timeVal.innerText = data.timezone;
  } else {
    alert("Longitude and Latitude must be numbers , please check your input");
  }
};
btn.addEventListener("click", weather);
