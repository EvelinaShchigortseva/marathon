import React from "react";

const FavoriteCities = ({ favoriteCities, saveCity, deleteCity }) => {
  const handleClick = (e) => {
    saveCity(e.target.innerText);
  };

  return (
    <div className="favorite-cities">
      <div className="favorite-cities-heading">Added Locations:</div>
      <div className="favorite-cities-list">
        {favoriteCities.map((city) => (
          <div className="list-item">
            <div onClick={handleClick} key={city}>
              {" "}
              {city}{" "}
            </div>
            <input
              className="button_x"
              onClick={() => deleteCity(city)}
              type="button"
              value=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteCities;
