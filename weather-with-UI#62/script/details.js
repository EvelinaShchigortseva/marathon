import { UI_ELEMENTS } from "./script.js";

function WeatherData(city) {
  UI_ELEMENTS.cityName[1].textContent = city.name;
  UI_ELEMENTS.temp.textContent = `${parseInt(city.main.temp)}°C`;
  UI_ELEMENTS.feels.textContent = `${parseInt(city.main.feels_like)}°C`;
  UI_ELEMENTS.weather.textContent = city.weather[0].main;
  UI_ELEMENTS.sunrise.textContent = correctDate(city.sys.sunrise);
  UI_ELEMENTS.sunset.textContent = correctDate(city.sys.sunset);
}

function correctDate(data) {
  let date = new Date(data);
  return date.toTimeString().split(" ")[0].slice(0, -3);
}

function setDetails(city) {
  const weatherShow = new WeatherData(city);
}

export {setDetails,correctDate };
