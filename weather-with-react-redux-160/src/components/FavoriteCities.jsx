import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCurrentCityAction} from "../store/currentCityRedicer";
import {deleteFavoriteCityAction} from "../store/favoriteCitiesReducer";
import {requestWeatherInformation} from "../store/asyncAction/weatherInformation";
import {requestWeatherInformationForecast} from "../store/asyncAction/weatherInformationForecast";

const FavoriteCities = () => {
    const dispatch = useDispatch()
    const weatherInformation = useSelector(state => state.weatherInformation.weatherInformation)
    const favoriteCities = useSelector(state => state.favoriteCities.favoriteCities)
    const city = useSelector(state => state.currentCity.cityName)

    const handleClick = (e) => {
        addCurrentCity(e.target.innerText)
        console.log('city:', city, "weatherInfo:", weatherInformation)

    };

    const updateWeatherInformation = (city) => {
        dispatch(requestWeatherInformation(city))
        dispatch(requestWeatherInformationForecast(city))
    }

    const addCurrentCity = (city) => {
        dispatch(getCurrentCityAction(city))
        updateWeatherInformation(city)

    }

    const deleteCity = (city) => {
        dispatch(deleteFavoriteCityAction(city))
    }

    return (
        <div className="favorite-cities">
            <div className="favorite-cities-heading">Added Locations:</div>
            <div className="favorite-cities-list">
                {favoriteCities.map((city) => (
                    <div className="list-item">
                        <div onClick={handleClick} key={city}>
                            {city}
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
