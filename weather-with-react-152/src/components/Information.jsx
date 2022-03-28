import React, { useState } from "react";
import FavoriteCities from "./FavoriteCities";
import InformationWeather from "./InformationWeather";

const Information = ({ information, saveCity, informationForecast }) => {
  const [favoriteCities, setFavoriteCities] = useState([]);

  const deleteFavoriteCity = (cityName) => {
    const newFavoriteCities = favoriteCities.filter(
      (item) => item !== cityName
    );
    setFavoriteCities(newFavoriteCities);
  };

  const addFavoriteCities = (city) => {
    if (favoriteCities.includes(city)) {
      return;
    }
    setFavoriteCities([...favoriteCities, city]);
    console.log(city);
  };

  return (
    <div className="information">
      <InformationWeather
        weatherInformation={information}
        addCity={addFavoriteCities}
        informationForecast={informationForecast}
      />
      <FavoriteCities
        favoriteCities={favoriteCities}
        saveCity={saveCity}
        deleteCity={deleteFavoriteCity}
      />
    </div>
  );
};

export default Information;
