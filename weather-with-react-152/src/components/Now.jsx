import React from "react";

const Now = ({ weatherInformation, addFavoriteCity }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInformation.weather[0].icon}@2x.png`;

  const handleClick = (e) => {
    addFavoriteCity(weatherInformation.name);
  };

  return (
    <div className="wrapper">
      <div className="weather_now_temp">
        <span>{parseInt(weatherInformation.main.temp)}°C</span>
      </div>
      <div className="weather_now_img">
        {" "}
        <img src={iconUrl} />
      </div>
      <div className="weather-now-city">
        <div className="city_text_block">
          <span className="city_text">{weatherInformation.name}</span>
        </div>
        <button className="city_favorite" onClick={handleClick}>
          {" "}
        </button>
      </div>
    </div>
  );
};

export default Now;
