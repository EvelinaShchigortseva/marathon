import "./style/style.css";
import SearchForm from "./components/SearchForm";
import { useEffect, useState } from "react";
import Information from "./components/Information";
const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";

async function request(url) {
  let response = await fetch(url);
  return response.json();
}

function App() {
  const [city, setCity] = useState("");
  const [weatherInformation, setWeatherInformation] = useState({});
  const [weatherInformationForecast, setWeatherInformationForecast] = useState(
    {}
  );

  useEffect(async () => {
    const serverUrl = "http://api.openweathermap.org/data/2.5/weather";
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;

    const cityInfo = await request(url);
    setWeatherInformation(cityInfo);
  }, [city]);

  useEffect(async () => {
    const apiKey = "f660a2fb1e4bad108d6160b7f58c555f";
    const serverUrl = "http://api.openweathermap.org/data/2.5/forecast";
    const url = `${serverUrl}?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let cityInfo = await response.json();
    setWeatherInformationForecast(cityInfo);
    console.log(cityInfo);
  }, [city]);

  const setSearchCity = (cityName) => {
    setCity(cityName);
    console.log(weatherInformation);
  };

  return (
    <div className="main">
      <SearchForm value={city} saveCity={setSearchCity} />
      <Information
        information={weatherInformation}
        saveCity={setSearchCity}
        informationForecast={weatherInformationForecast}
      />
    </div>
  );
}

export default App;
